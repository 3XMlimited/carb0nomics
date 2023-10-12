import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { FaCircleUser, FaChevronDown } from 'react-icons/fa6'

import logo from '../assets/logo.png'

const Navbar = ({ currentRoute, loginStatus, setLoginStatus }) => {
  const navigate = useNavigate()
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <div className={`sticky top-0 z-50 h-[60px] w-full bg-white justify-center ${(currentRoute === 'thankyou' || currentRoute === 'unsuccessful') ? 'hidden' : 'flex'} shadow-md`}>
      {loginStatus.login ? (
        <div className='relative h-full w-full max-w-[1700px] flex items-center justify-between px-[20px]'>
          <div className='h-full flex items-center justify-center'>
            <img src={logo} alt="logo" className='h-full'/>
          </div>

          <div className='h-full flex items-center gap-[10px] md:hidden'>
            <div className={`relative group h-full flex items-center justify-center px-[10px] duration-200 cursor-pointer`}>
              <div className='flex items-center gap-[5px] font-semibold'>Home<FaChevronDown size={16}/></div>
              <div className='absolute top-full h-fit w-full min-w-[200px] bg-white flex flex-col p-[10px] gap-[10px] border-t border-t-slate-200 shadow-2xl rounded-b-md duration-100 origin-top scale-y-0 group-hover:scale-y-100'>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'home') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'home') && navigate('/')}>Home</div>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'about') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'about') && navigate('/about')}>About Us</div>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'contact') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'contact') && navigate('/contact')}>Contact Us</div>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'pricing') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'pricing') && navigate('/pricing')}>Pricing</div>
              </div>
            </div>
            <div className={`relative group h-full flex items-center justify-center px-[10px] duration-200 cursor-pointer`}>
              <div className='flex items-center gap-[5px] font-semibold'>Dashboard<FaChevronDown size={16}/></div>
              <div className='absolute top-full h-fit w-full min-w-[200px] bg-white flex flex-col p-[10px] gap-[10px] border-t border-t-slate-200 shadow-2xl rounded-b-md duration-100 origin-top scale-y-0 group-hover:scale-y-100'>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'dashboard') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'dashboard') && navigate('/dashboard')}>Footprint Calculator</div>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'actionplan') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'actionplan') && navigate('/actionplan')}>Action Plan</div>
                <div className={`w-full flex items-center justify-center font-semibold p-[10px] text-center border rounded-md ${(currentRoute === 'search') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => (currentRoute !== 'search') && navigate('/search')}>ESG Scores Benchmark</div>
              </div>
            </div>
            <div className={`h-full flex items-center justify-center px-[10px] cursor-pointer`} onClick={() => (currentRoute !== 'account') && navigate('/account')}><FaCircleUser size={30} className={`${(currentRoute === 'account') ? 'fill-emerald-400' : ''} duration-200 hover:fill-emerald-400`}/></div>
          </div>

          <div className='h-full items-center justify-center cursor-pointer hidden md:flex' onClick={() => setDisplayMenu(!displayMenu)}>
            <FiMenu size={30}/>
          </div>

          <div className={`absolute top-full left-0 h-[calc(100vh-60px)] w-full origin-top-right duration-200 hidden md:flex ${displayMenu ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className='h-fit max-h-full w-full bg-white flex flex-col gap-[10px] p-[20px] overflow-y-scroll hide-scrollbar'>
              <div className='w-full flex items-center font-semibold gap-[5px]'>Home<FaChevronDown size={16}/></div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'home') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'home') && navigate('/'));}}>Home</div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'about') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'about') && navigate('/about'));}}>About Us</div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'contact') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'contact') && navigate('/contact'));}}>Contact Us</div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'pricing') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'pricing') && navigate('/pricing'));}}>Pricing</div>
              <div className='w-full flex items-center font-semibold gap-[5px]'>Dashboard<FaChevronDown size={16}/></div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'dashboard') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'dashboard') && navigate('/dashboard'));}}>Footprint Calculator</div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'actionplan') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'actionplan') && navigate('/actionplan'));}}>Action Plan</div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border ${(currentRoute === 'search') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'search') && navigate('/search'));}}>ESG Scores Benchmark</div>
              <div className='w-full flex items-center font-semibold gap-[5px]'>Account<FaChevronDown size={16}/></div>
              <div className={`h-fit min-h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] rounded-md border gap-[5px] border-emerald-400 ${(currentRoute === 'account') ? 'bg-emerald-400' : 'bg-emerald-50'} duration-200 cursor-pointer hover:bg-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'account') && navigate('/account'));}}><FaCircleUser size={24} className={`${(currentRoute === 'account') ? 'fill-emerald-400' : ''} duration-200 hover:fill-emerald-400`}/>Account</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative h-full w-full max-w-[1440px] flex items-center justify-between px-[20px]'>
          <div className='h-full flex items-center justify-center'>
            <img src={logo} alt="logo" className='h-full'/>
          </div>

          <div className='h-full grid grid-cols-6 items-center lg:hidden'>
            <div className={`h-full flex items-center justify-center px-[10px] font-semibold ${(currentRoute === 'home') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'home') && navigate('/')}>Home</div>
            <div className={`h-full flex items-center justify-center px-[10px] font-semibold ${(currentRoute === 'about') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'about') && navigate('/about')}>About</div>
            <div className={`h-full flex items-center justify-center px-[10px] font-semibold ${(currentRoute === 'contact') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'contact') && navigate('/contact')}>Contact</div>
            <div className={`h-full flex items-center justify-center px-[10px] font-semibold ${(currentRoute === 'pricing') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'pricing') && navigate('/pricing')}>Pricing</div>
            <div className={`h-full flex items-center justify-center px-[10px] font-semibold ${(currentRoute === 'login') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'login') && navigate('/login')}>Login</div>
            <div className={`h-[50px] flex items-center justify-center px-[10px] font-semibold ${(currentRoute === 'signup') ? 'bg-emerald-400 text-white' : 'bg-emerald-50 text-emerald-400'} border-2 border-emerald-400 rounded-md duration-200 ml-[5px] cursor-pointer hover:bg-emerald-400 hover:text-white`} onClick={() => (currentRoute !== 'signup') && navigate('/signup')}>SIGNUP</div>
          </div>

          <div className='h-full items-center justify-center cursor-pointer hidden lg:flex' onClick={() => setDisplayMenu(!displayMenu)}>
            <FiMenu size={30}/>
          </div>

          <div className={`absolute top-full left-0 h-[calc(100vh-60px)] w-full origin-top-right duration-200 hidden lg:flex ${displayMenu ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className='h-fit max-h-full w-full bg-white grid grid-row-6 gap-[10px] p-[20px] overflow-y-scroll hide-scrollbar'>
              <div className={`h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] border rounded-md ${(currentRoute === 'home') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'home') && navigate('/'));}}>Home</div>
              <div className={`h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] border rounded-md ${(currentRoute === 'about') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'about') && navigate('/about'));}}>About</div>
              <div className={`h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] border rounded-md ${(currentRoute === 'contact') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'contact') && navigate('/contact'));}}>Contact</div>
              <div className={`h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] border rounded-md ${(currentRoute === 'pricing') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'pricing') && navigate('/pricing'));}}>Pricing</div>
              <div className={`h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] border rounded-md ${(currentRoute === 'login') ? 'border-slate-600' : 'border-slate-200'} duration-200 cursor-pointer hover:border-slate-600`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'login') && navigate('/login'));}}>Login</div>
              <div className={`h-[50px] w-full flex items-center justify-center text-center font-semibold p-x-[10px] border rounded-md border-emerald-400 ${(currentRoute === 'signup') ? 'bg-emerald-400 text-white' : 'bg-emerald-50 text-emerald-500'} duration-200 cursor-pointer hover:bg-emerald-400 hover:text-white`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'signup') && navigate('/signup'));}}>SIGNUP</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar