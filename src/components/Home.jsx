import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa6'
import { ImCalculator } from 'react-icons/im'

import Footer from './Footer'
import dashboard from '../assets/dashboard.png'
import search from '../assets/search.png'

const Home = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('home')
  }, [])

  useEffect(() => {
    if (loginStatus.login === true) {
      navigate('/dashboard')
    }
  }, [loginStatus.login])
  
  return (
    <div className='h-[calc(100%-60px)] min-h-fit w-full bg-slate-100 flex flex-col'>
      {/* hero */}
      <div className='h-fit w-full flex justify-center bg-slate-200'>
        <div className='h-fit min-h-[600px] w-full max-w-[1440px] px-[20px] py-[40px] grid grid-cols-2 gap-[10px] xl:grid-cols-1 xl:gap-[40px]'>
          <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
            <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Carb0nomics help you take simple, effective <span className='text-emerald-400'>climate action</span></p>
            <p className='mb-[10px] xl:text-center'>Calculate and offset your carbon footprint.</p>
            <button onClick={() => navigate('/login')} className='h-[50px] w-[200px] bg-emerald-400 text-white font-medium px-[10px] rounded-full shadow-lg duration-200 hover:opacity-50'>Get Started</button>
          </div>
          <div className='h-full w-full flex items-center justify-center'>
            <img src={dashboard} alt="dashboard" className='w-full' />
          </div>
        </div>
      </div>

      {/* about */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[600px] w-full max-w-[1440px] px-[20px] py-[40px] flex flex-col items-center justify-center gap-[20px]'>
          <p className='text-4xl font-bold text-center xxl:text-3xl sm:text-2xl'>Carb0nomics is your all-in-one climate solution</p>
          <div className='h-fit w-full max-w-[1024px] grid grid-cols-3 gap-[20px] lg:grid-cols-1'>
            <div className='h-[400px] w-full p-[20px] bg-white border border-slate-300 rounded-xl flex flex-col items-center justify-center gap-[10px] lg:h-[300px]'>
              <ImCalculator className='fill-emerald-400 text-[80px] sm:text-[60px]'/>
              <p className='text-2xl font-semibold text-center'>Calculate Footprint</p>
              <p className='text-center'>Our AI calculates your carbon footprint better and quicker for you.</p>
            </div>
            <div className='h-[400px] w-full p-[20px] bg-white border border-slate-300 rounded-xl flex flex-col items-center justify-center gap-[10px] lg:h-[300px]'>
              <FaChartLine className='fill-emerald-400 text-[80px] sm:text-[60px]'/>
              <p className='text-2xl font-semibold text-center'>Your Growth</p>
              <p className='text-center'>We manage and display your growth data to you in a beautiful graphical presentation.</p>
            </div>
            <div className='h-[400px] w-full p-[20px] bg-white border border-slate-300 rounded-xl flex flex-col items-center justify-center gap-[10px] lg:h-[300px]'>
              <FaSearch className='fill-emerald-400 text-[80px] sm:text-[60px]'/>
              <p className='text-2xl font-semibold text-center'>Find ESG Scores</p>
              <p className='text-center'>Explore how other companies are performing all around the world.</p>
            </div>
          </div>
        </div>
      </div>

      {/* break */}
      <div className='h-fit w-full flex justify-center bg-emerald-100'>
        <div className='h-fit min-h-[100px] w-full max-w-[1440px] px-[20px] py-[40px] flex flex-col items-center justify-center gap-[20px]'>
          <p className='text-4xl font-bold text-center xxl:text-3xl sm:text-2xl'><span className='text-emerald-500'>Easier</span> carbon management</p>
          <p className='text-center'>Carb0nomic focuses on achieving carbon neutrality faster without any sacrifices and need of consultants. Our easy-to-use UI requires no training for use.</p>
        </div>
      </div>

      {/* features */}
      <div className='h-fit w-full flex justify-center bg-slate-200'>
        <div className='h-fit min-h-[600px] w-full max-w-[1440px] px-[20px] py-[40px] flex flex-col items-center justify-center gap-[40px]'>
          <div>
            <p className='text-4xl font-bold text-center mb-[10px] xxl:text-3xl sm:text-2xl'>Powerful Features</p>
            <p className='mb-[10px] text-center'>Carb0nomic is packed with features to back you up.</p>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 xl:gap-[40px]'>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
              <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Accurate emissions measurement</p>
              <p className='mb-[10px] xl:text-center'>Carb0nomics help you achieve your climate goals through accurate measurement. To give you the best experience, we have developed a system thats easy to use and provides beautiful graphical presentations to all of your data.</p>
            </div>
            <div className='h-full w-full flex items-center justify-center'>
              <img src={dashboard} alt="dashboard" className='w-full' />
            </div>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 xl:gap-[40px]'>
            <div className='h-full w-full flex items-center justify-center xl:order-2'>
              <img src={search} alt="search" className='w-full' />
            </div>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center xl:order-1'>
              <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Explore ESG risk scores</p>
              <p className='mb-[10px] xl:text-center'>Carb0nomics provides you a powerful search engine to explore how other companies are performing all around the world throughout the years; in a beautiful yet powerful presentation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[100px] w-full max-w-[1440px] px-[20px] py-[40px] flex flex-col items-center justify-center gap-[40px]'>
          <div className='h-fit w-full flex items-center justify-between gap-[10px] bg-emerald-400 p-[40px] rounded-[40px] lg:flex-col'>
            <div>
              <p className='text-3xl font-bold lg:text-center sm:text-2xl'>Start using Carb0nomics</p>
              <p className='lg:text-center'>Let's achieve a carbon neutral future together.</p>
            </div>
            <button onClick={() => navigate('/login')} className='h-[50px] w-[200px] bg-slate-800 text-white font-medium px-[10px] rounded-full shadow-lg duration-200 hover:opacity-50 sm:w-full'>Get Started</button>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home