import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { host } from './host'
import { useNavigate } from 'react-router-dom'

const useFetchData = ({ refresh }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
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
                }
            })
            .catch((err) => {
                console.log(err);
                setData({})
                setChartSector([])
            }) 
            .finally(() => setLoading(false))
        }

        getData()
        
        return () => {
            cancelToken.cancel()
        }
    }, [refresh])

    return [loading, data, chartSector]
}

export default useFetchData