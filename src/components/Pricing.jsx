import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'

import { basicPaymentAPI } from '../hooks/functions'
import Footer from './Footer'

const Pricing = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCurrentRoute('pricing')
  }, [])

  const handleMonthly = () => {
    if (loading || (loginStatus.plan === 'basic')) {
      return
    }

    if (loginStatus.login) {
      basicPaymentAPI({ setLoading })
    } else {
      navigate('/login')
    } 
  }

  return (
    <>
      <div className='h-fit min-h-[calc(100%-60px)] w-full flex items-center justify-center'>
        <div className='h-fit w-full max-w-[900px] p-[20px] grid items-center justify-center gap-[20px]'>
          <div>
            <p className='text-3xl font-semibold text-center'>Grow a better business</p>
            <p className='text-center'>Our prices start from:</p>
          </div>

          <div className='h-fit w-full grid grid-cols-2 gap-[40px] xl:grid-cols-1'>
            <div className='h-fit w-full bg-white rounded-xl shadow-xl px-[20px] py-[40px] flex flex-col items-center gap-[20px]'>
              <p className='text-emerald-400 font-semibold text-center'>Basic</p>
              <p className='text-5xl font-semibold text-center'><span className='text-xl text-slate-500'>US$</span>750<span className='text-xl text-slate-500'>/mo</span></p>
              <p className='text-center'>Carb0nomics's carbon emission measurement tools</p>
              <ul className='md:text-sm'>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>AI powered carbon emission calculation</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Intuitive interfaces for data collection</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Beautiful graphical presentations</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Database to save your history</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Action plan</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Search engine</li>
              </ul>
              {(loginStatus.plan === 'basic') ? (
                <div className='h-[50px] w-full max-w-[300px] bg-slate-500 text-white font-medium px-[10px] rounded-full flex items-center justify-center shadow-lg'>Currently Subscribed</div>
              ) : (
                <button onClick={() => handleMonthly()} className={`h-[50px] w-full max-w-[300px] bg-emerald-400 text-white font-medium px-[10px] rounded-full flex items-center justify-center shadow-lg duration-200 ${loading ? 'cursor-default' : 'cursor-pointer hover:opacity-50'}`}>
                  {loading ? (<div className='h-[30px] w-[30px] border-[5px] border-emerald-300 border-t-[5px] border-t-white rounded-full animate-spin'/>) : 'Get Started'}
                </button>
              )}
            </div>

            <div className='h-fit w-full bg-white rounded-xl shadow-xl px-[20px] py-[40px] flex flex-col items-center gap-[20px]'>
              <p className='text-violet-500 font-semibold text-center'>Professional</p>
              <p className='text-2xl text-center text-slate-500'>Contact Sales</p>
              <p className='text-center'>Carb0nomics's <span className='text-violet-500'>Ultimate</span> carbon emission measurement tools</p>
              <ul className='md:text-sm'>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>AI powered carbon emission calculation</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Intuitive interfaces for data collection</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Beautiful graphical presentations</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Database to save your history</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Action plan</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Search engine</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>AI assisted tools</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>On-Call support</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Professional carbon management Advices</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Personal consultant</li>
              </ul>
              <a href='mailto:contact@3xm.asia' className='h-[50px] w-full max-w-[300px] bg-violet-500 text-center text-white font-medium px-[10px] rounded-full flex items-center justify-center shadow-lg duration-200 hover:opacity-50'>Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pricing