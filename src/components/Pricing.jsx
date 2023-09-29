import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from './Footer'

const Pricing = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('pricing')
  }, [])

  // useEffect(() => {
  //   if (loginStatus.level !== 'FREE') {
  //     navigate('/dashboard')
  //   }
  // }, [loginStatus.level])

  return (
    <>
      <div className='h-fit min-h-[calc(100%-60px)] w-full flex items-center justify-center'>
        <div className='h-fit w-full max-w-[1024px] p-[20px] grid items-center justify-center gap-[20px]'>
          <p className='text-3xl font-semibold text-center'>Grow a better business</p>
          <div className='h-fit bg-white rounded-xl border border-slate-300 shadow-xl p-[20px] flex flex-col items-center gap-[20px]'>
            <p className='text-emerald-400 font-semibold text-center'>Basic</p>
            <p className='text-5xl font-semibold text-center'><span className='text-xl text-slate-500'>$</span>999<span className='text-xl text-slate-500'>/mo</span></p>
            <p className='text-center'>Carb0nomics's carbon emission measurement tools</p>
            <ul className='list-disc list-inside'>
              <li className='mb-[10px]'>AI powered carbon emission calculation</li>
              <li className='mb-[10px]'>Intuitive interfaces for data collection</li>
              <li className='mb-[10px]'>Beautiful graphical presentations</li>
              <li className='mb-[10px]'>Database to save your history</li>
              <li className='mb-[10px]'>Search engine</li>
            </ul>
            <button onClick={() => navigate('/login')} className='h-[50px] w-full max-w-[300px] bg-emerald-400 text-white font-medium px-[10px] rounded-full shadow-lg duration-200 hover:opacity-50'>Get Started</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pricing