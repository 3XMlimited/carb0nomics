import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import logo from '../assets/logo.png'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[100px] w-full max-w-[1024px] px-[20px] py-[20px] flex flex-col items-center justify-center gap-[20px] border-t-2 border-t-slate-300'>
          <div className='h-fit w-full grid grid-cols-2 pb-[20px] gap-[20px] border-b border-b-slate-300 lg:grid-cols-1'>
            <div className='h-fit w-full flex flex-col gap-[10px]'>
              <Fade direction='up' triggerOnce={true}>
                <div className='flex items-center'>
                  <img src={logo} alt="logo" className='h-[80px] w-[80px] xs:h-[60px] xs:w-[60px]' />
                  <p className='text-3xl font-bold sm:text-2xl xs:text-xl'>Carb0nomics</p>
                </div>
                <p>Carbon Neutrality Platform</p>
              </Fade>
            </div>
            <div className='h-fit w-full flex flex-col gap-[10px]'>
              <Fade direction='up' triggerOnce={true}>
                <p className='text-xl font-semibold text-slate-500'>Explore</p>
                <p className='underline-offset-4 duration-200 cursor-pointer hover:underline hover:opacity-50' onClick={() => navigate('/')}>Home</p>
                <p className='underline-offset-4 duration-200 cursor-pointer hover:underline hover:opacity-50' onClick={() => navigate('/about')}>About</p>
                <p className='underline-offset-4 duration-200 cursor-pointer hover:underline hover:opacity-50' onClick={() => navigate('/contact')}>Contact</p>
                <p className='underline-offset-4 duration-200 cursor-pointer hover:underline hover:opacity-50' onClick={() => navigate('/pricing')}>Pricing</p>
                <p className='underline-offset-4 duration-200 cursor-pointer hover:underline hover:opacity-50' onClick={() => navigate('/policy')}>Policy</p>
              </Fade>
            </div>
          </div>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-sm'>© Copyright 2023 Carb0nomics. All rights reserved.</p>
          </Fade>
        </div>
      </div>
  )
}

export default Footer