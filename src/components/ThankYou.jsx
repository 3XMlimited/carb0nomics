import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import thankyouBG from '../assets/thankyouBG.jpg'

const ThankYou = ({ setCurrentRoute }) => {
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentRoute('thankyou')
    }, [])

    return (
        <div className='relative h-fit min-h-full flex items-center justify-center'>
            <img src={thankyouBG} alt="thankyou" className='absolute h-full w-full object-cover object-top' />
            <div className='z-10 h-fit min-h-screen w-full grid grid-cols-1 bg-black/20 backdrop-blur-[2px]'>
                <div className='h-full w-full flex flex-col items-center justify-center p-[20px]'>
                    <p className='text-white text-[150px] text-center leading-normal xl:text-[120px] lg:text-[90px] md:text-[60px] sm:text-[40px]' style={{ fontFamily: 'Neonderthaw' }}>Thank You</p>
                    <p className='text-white text-center leading-normal sm:text-sm'>Your payment was successful.</p>
                    <p className='text-white text-center leading-normal mb-[30px] md:mb-[20px] sm:text-sm'>Let's walk towards a sustainable future together.</p>
                    <button className='h-[50px] w-full max-w-[200px] font-semibold bg-emerald-400 text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => navigate('/dashboard')}>Go to dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYou