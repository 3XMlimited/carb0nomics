import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import forest from '../assets/forest.svg'

const PageNotFound = ({ setCurrentRoute }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('pagenotfound')
    document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })
  }, [])
  
  return (
    <div className='relative h-fit min-h-full flex items-center justify-center bg-slate-800'>
      <img src={forest} alt="" className='absolute h-full w-full object-cover' />
      <div className='h-fit w-full max-w-[1024px] grid grid-cols-1'>
        <Fade duration={1000} triggerOnce={true}>
          <div className='h-full w-full p-[20px] flex flex-col items-center justify-center'>
              <div className='h-fit w-full flex items-center justify-center gap-[10px] mb-[60px] lg:mb-[40px] md:mb-[20px]'>
                <div className='z-10 h-fit text-[300px] text-white lg:text-[200px] md:text-[100px]'>4</div>
                <div className='relative h-[220px] w-[220px] rounded-full bg-[#F6EDBD] shadow-[0px_0px_500px_150px_rgba(246,237,189,0.5),inset_-10px_-10px_20px_20px_#ECE1A8] lg:h-[150px] lg:w-[150px] md:h-[80px] md:w-[80px] lg:shadow-[0px_0px_500px_100px_rgba(246,237,189,0.5),inset_-10px_-10px_10px_10px_#ECE1A8] md:shadow-[0px_0px_500px_100px_rgba(246,237,189,0.5),inset_-5px_-5px_5px_5px_#ECE1A8]'>
                  <div className='absolute top-[10px] left-[10px] h-[200px] w-[200px] rounded-full shadow-[1px_1px_5px_0px_#F6EDBD,inset_-1px_-1px_5px_0px_#F6EDBD] lg:h-[130px] lg:w-[130px] lg:shadow-[1px_1px_2px_0px_#F6EDBD,inset_-1px_-1px_2px_0px_#F6EDBD] md:hidden'/>
                  <div className='absolute top-[50px] left-[50px] h-[60px] w-[60px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[40px] lg:w-[40px] lg:top-[30px] lg:left-[30px] md:h-[25px] md:w-[25px] md:top-[40px] md:left-[40px]'/>
                  <div className='absolute top-[90px] left-[130px] h-[50px] w-[50px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[30px] lg:w-[30px] lg:top-[70px] lg:left-[90px] md:h-[20px] md:w-[20px] md:top-[15px] md:left-[15px]'/>
                  <div className='absolute top-[140px] left-[70px] h-[40px] w-[40px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[20px] lg:w-[20px] lg:top-[90px] lg:left-[50px] md:h-[10px] md:w-[10px] md:top-[50px] md:left-[20px]'/>
                  <div className='absolute top-[30px] left-[110px] h-[20px] w-[20px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[10px] lg:w-[10px] lg:top-[20px] lg:left-[70px] md:h-[5px] md:w-[5px] md:top-[15px] md:left-[40px]'/>
                  <div className='absolute top-[120px] left-[40px] h-[20px] w-[20px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[10px] lg:w-[10px] lg:top-[80px] lg:left-[30px] md:h-[5px] md:w-[5px] md:top-[40px] md:left-[15px]'/>
                  <div className='absolute top-[170px] left-[130px] h-[20px] w-[20px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[10px] lg:w-[10px] lg:top-[110px] lg:left-[80px] md:h-[5px] md:w-[5px] md:top-[60px] md:left-[35px]'/>
                  <div className='absolute top-[70px] left-[170px] h-[20px] w-[20px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[10px] lg:w-[10px] lg:top-[50px] lg:left-[110px] md:h-[5px] md:w-[5px] md:top-[30px] md:left-[60px]'/>
                  <div className='absolute top-[110px] left-[110px] h-[10px] w-[10px] bg-[#F0E7B9] border border-[#F6EDBD] shadow-[2px_2px_2px_0px_#ECE1A8,inset_5px_5px_5px_5px_#ECE1A8] rounded-full lg:h-[5px] lg:w-[5px] lg:top-[75px] lg:left-[75px] md:top-[35px] md:left-[35px]'/>
                </div>
                <div className='z-10 h-fit text-[300px] text-white lg:text-[200px] md:text-[100px]'>4</div>
              </div>
              <p className='z-10 text-4xl text-center text-white font-bold leading-normal lg:text-3xl md:text-xl'>Page Not Found</p>
              <p className='z-10 text-base mb-[20px] text-center text-white md:text-sm'>The page you are looking for doesn't exist</p>
              <button onClick={() => navigate('/')} className='z-10 group relative h-[50px] w-full max-w-[200px] bg-emerald-400 rounded-full shadow-[0px_5px_20px_0px] shadow-emerald-400/50 cursor-pointer duration-300 overflow-hidden hover:shadow-white/50'>
                <div className='absolute top-0 left-0 z-10 bg-transparent h-full w-full text-white font-medium px-[10px] flex items-center justify-center duration-300 group-hover:text-slate-800'>
                  Go Back Home
                </div>
                <div className='absolute top-0 left-0 z-0 bg-white h-full w-full scale-0 origin-top flex items-center justify-center rounded-full duration-300 group-hover:top-0 group-hover:scale-100'/>
              </button>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default PageNotFound