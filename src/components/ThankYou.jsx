import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Fade } from 'react-awesome-reveal'

import { host } from '../hooks/host'
import thankyouBG from '../assets/thankyouBG.jpg'

const ThankYou = ({ setCurrentRoute, setLoginStatus }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setCurrentRoute('thankyou')
        document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })

        if (!Cookies.get('sessionID')) {
            navigate('/')
        } else {
            Cookies.remove('sessionID')
        }
    }, [])

    // check login status
    useEffect(() => {
        const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null

        const checkLoginAPI = () => {
            setLoading(true)

            const url = `${host}/api/v1/auth/checkLogin`;

            axios.post(url, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Authorization": "Bearer "+user?.token,
                },
            })
            .then((response) => {
                const obj = response.data;
                if (obj.success) {
                    Cookies.set('user', JSON.stringify({ ...user, plan: obj?.plan, endDate: obj?.endDate, subscriptionID: obj?.subscriptionID, hasSubs: obj?.hasSubs }), { expires: 7 })
                    setLoginStatus({ loading: false, login: true, plan: obj?.plan })
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
        };

        if (user?.token) {
            checkLoginAPI()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <div className='relative h-fit min-h-full flex items-center justify-center'>
            <img src={thankyouBG} alt="thankyou" className='absolute h-full w-full object-cover object-top' />
            <div className='z-10 h-fit min-h-screen w-full grid grid-cols-1 bg-black/20 backdrop-blur-[2px]'>
                <div className='h-full w-full flex flex-col items-center justify-center p-[20px]'>
                    <Fade direction='up' cascade={true} damping={0.1} triggerOnce={true}>
                        <p className='text-white text-[150px] text-center leading-normal xl:text-[120px] lg:text-[90px] md:text-[60px] sm:text-[40px]' style={{ fontFamily: 'Neonderthaw' }}>Thank You</p>
                        <p className='text-white text-center leading-normal sm:text-sm'>Your payment was successful.</p>
                        <p className='text-white text-center leading-normal mb-[30px] md:mb-[20px] sm:text-sm'>Let's walk towards a sustainable future together.</p>
                        <button className='h-[50px] w-full max-w-[200px] font-semibold bg-emerald-400 text-center px-[20px] flex items-center justify-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => navigate('/dashboard')}>
                            {loading ? (<div className='h-[30px] w-[30px] border-[5px] border-emerald-300 border-t-[5px] border-t-white rounded-full animate-spin'/>) : 'Go To Dashbaord'}
                        </button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default ThankYou