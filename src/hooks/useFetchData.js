import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { host } from './host'
import { useNavigate } from 'react-router-dom'

const useFetchData = ({ refresh }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [chartCF, setChartCF] = useState({ sectors: [], data: [] })
    const [chartSector, setChartSector] = useState([])

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null

        if (!user) {
            navigate('/')
        }
        
        const url = `${host}/api/v1/data`;
        
        const getData = async () => {
            setLoading(true)

            await axios.patch(url, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type, x-access-token",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Authorization": "Bearer "+user?.token,
                    "Content-Type": "application/json",
                }
            },
            {
                cancelToken: cancelToken.token
            })
            .then((response) => {
                const obj = response.data
                if (obj) {
                    let temp = Object.entries(obj?.by_type)?.filter(f => f[1] > 0)
                    setData(obj)
                    if (temp && temp.length > 0) {
                        setChartSector(temp.map(e => { return { name: e[0], value: Number(Number(e[1]).toFixed(0)) } }))
                    }
                
                    if (obj.by_date) {
                        if (Array.isArray(obj.by_date) && obj.by_date.length > 0) {
                            const filterWithValues = obj.by_date.map(e => {
                                let temp = Object.keys(e).map((key) => [key, e[key]]).filter(f => f[0] !== 'date')
                                return temp.filter(f => Number(f[1]) > 0)
                            })
            
                            const changeToArrayOfObjects = filterWithValues.map(e => {
                                let temp = []
                                e.forEach(element => {
                                    temp.push({ [element[0]] : element[1] })
                                });
                                return temp
                            }).map(e => {
                                let temp = {}
            
                                e.map(m => {
                                    let key = Object.keys(m)[0]
                                    let value = Object.values(m)[0]
                                    temp = { ...temp, [key]: value }
                                })
            
                                return temp
                            })

                            let sectors = []
                            
                            changeToArrayOfObjects.map(e => {
                                Object.keys(e).map(m => sectors.push(m))
                            })

                            setChartCF({ sectors: Array.from(new Set (sectors)), data: changeToArrayOfObjects });
                        }
                        else {
                            setChartCF({ sectors: [], data: [] })
                        }
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setData({})
                setChartCF({ sectors: [], data: [] })
                setChartSector([])
            }) 
            .finally(() => setLoading(false))
        }

        getData()
        
        return () => {
            cancelToken.cancel()
        }
    }, [refresh])

    return [loading, data, chartCF, chartSector]
}

export default useFetchData