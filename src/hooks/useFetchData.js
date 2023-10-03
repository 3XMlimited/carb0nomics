import { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from './host'

const useFetchData = ({ refresh }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [chartSector, setChartSector] = useState([])

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        const token = window.localStorage.getItem('token')
        
        const url = `${host}/api/v1/data`;
        
        const getData = async () => {
            setLoading(true)

            await axios.patch(url, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type, x-access-token",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Authorization": "Bearer "+token,
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