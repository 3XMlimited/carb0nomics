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
      basicPaymentAPI({ setLoading, navigate })
    } else {
      navigate('/login')
    } 
  }

  return (
    <>
      <div className='h-fit min-h-[calc(100%-60px)] w-full flex items-center justify-center'>
        <div className='h-fit w-full max-w-[900px] p-[20px] grid items-center justify-center gap-[20px]'>
          <div>
            <p className='text-3xl font-semibold text-center'>What Gets Measured Gets Accomplished</p>
            <p className='text-center'>Your Path to Net 0 Start with These Plans</p>
          </div>

          <div className='h-fit w-full grid grid-cols-2 gap-[40px] xl:grid-cols-1'>
            <div className='h-fit w-full bg-white rounded-xl shadow-xl px-[20px] py-[40px] flex flex-col items-center gap-[20px]'>
              <p className='text-emerald-400 font-semibold text-center'>Basic</p>
              <p className='text-5xl font-semibold text-center'><span className='text-xl text-slate-500'>US$</span>750<span className='text-xl text-slate-500'>/mo</span></p>
              <p className='text-center'>Carb0nomics's carbon emission measurement tools</p>
              <ul className='md:text-sm'>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Carbon Emissions Calculation</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>AI-Powered Action Plan for Carbon Reduction</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>ESG Score Finder for Global Companies Benchmarks</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Scope 1, 2 & 3 Calculations</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>Intuitive Interfaces for Data Collection</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>10,000 Emission Factors</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-emerald-400'/>GHG Reporting</li>
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
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Carbon Emissions Calculation</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>AI-Powered Action Plan for Carbon Reduction</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>ESG Score Finder for Global Companies Benchmarks</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Scope 1, 2 & 3 Reporting</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Scope 3 Vendor Outreach</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Intuitive Interfaces for Data Collection</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>21,000 Emission Factors</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>GHG Reporting</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Regulatory Disclosure Reports</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Use Case Specific Calculators</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Simulations and Action Monitoring</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Benchmarking and Target Setting</li>
                <li className='mb-[10px] grid grid-cols-[24px_1fr] items-center'><GiCheckMark size={16} className='fill-violet-500'/>Dedicated Account Manager</li>
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