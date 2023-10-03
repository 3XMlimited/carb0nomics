import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import logo from '../assets/logo.png'

const Navbar = ({ currentRoute, loginStatus, setLoginStatus }) => {
  const navigate = useNavigate()
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <div className={`sticky top-0 z-50 h-[60px] w-full bg-white flex justify-center`}>
      {loginStatus.login ? (
        <div className='relative h-full w-full max-w-[1700px] flex items-center justify-between px-[20px]'>
          <div className='h-full flex items-center justify-center'>
            <img src={logo} alt="logo" className='h-full'/>
          </div>

          <div className='h-full flex items-center lg:hidden'>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'home') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'home') && navigate('/')}>HOME</div>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'dashboard') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'dashboard') && navigate('/dashboard')}>FOOTPRINT CALCULATOR</div>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'actionplan') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'actionplan') && navigate('/actionplan')}>ACTION PLAN</div>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'search') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'search') && navigate('/search')}>SEARCH</div>
            {/* <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'account') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'account') && navigate('/account')}>ACCOUNT</div> */}
            <div className={`h-[50px] min-w-[100px] flex items-center justify-center px-[10px] font-medium bg-red-50 text-red-300 border-2 border-red-300 rounded-md duration-200 ml-[5px] cursor-pointer hover:bg-red-300 hover:text-white`} onClick={() => {window.localStorage.clear(); setLoginStatus({ loading: false, login: false, email: '', level: 'FREE', expiry: '', id: '' }); navigate('/');}}>LOGOUT</div>
          </div>

          <div className='h-full items-center justify-center cursor-pointer hidden lg:flex' onClick={() => setDisplayMenu(!displayMenu)}>
            <FiMenu size={30}/>
          </div>

          <div className={`absolute top-full left-0 h-[calc(100vh-60px)] w-full origin-top-right duration-200 hidden lg:flex ${displayMenu ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className='h-fit max-h-full w-full bg-white grid grid-row-3 gap-[10px] p-[20px] overflow-y-scroll hide-scrollbar'>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === '') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== '') && navigate('/'));}}>HOME</div>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'dashboard') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'dashboard') && navigate('/dashboard'));}}>FOOTPRINT CALCULATOR</div>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'actionplan') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'actionplan') && navigate('/actionplan'));}}>ACTION PLAN</div>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'search') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'search') && navigate('/search'));}}>SEARCH</div>
              {/* <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'account') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'account') && navigate('/account'));}}>ACCOUNT</div> */}
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] bg-red-50 text-red-300 font-medium border-2 border-red-300 rounded-md duration-200 cursor-pointer hover:bg-red-300 hover:text-white`} onClick={() => {setDisplayMenu(!displayMenu); window.localStorage.clear(); setLoginStatus({ loading: false, login: false, email: '', level: 'FREE', expiry: '', id: '' }); navigate('/');}}>LOGOUT</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative h-full w-full max-w-[1440px] flex items-center justify-between px-[20px]'>
          <div className='h-full flex items-center justify-center'>
            <img src={logo} alt="logo" className='h-full'/>
          </div>

          <div className='h-full grid grid-cols-5 items-center lg:hidden'>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'home') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'home') && navigate('/')}>HOME</div>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'about') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'about') && navigate('/about')}>ABOUT</div>
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'contact') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'contact') && navigate('/contact')}>CONTACT</div>
            {/* <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'pricing') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'pricing') && navigate('/pricing')}>PRICING</div> */}
            <div className={`h-full flex items-center justify-center px-[10px] ${(currentRoute === 'login') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => (currentRoute !== 'login') && navigate('/login')}>LOGIN</div>
            <div className={`h-[50px] flex items-center justify-center px-[10px] font-medium ${(currentRoute === 'signup') ? 'bg-emerald-400 text-white' : 'bg-emerald-50 text-emerald-400'} border-2 border-emerald-400 rounded-md duration-200 ml-[5px] cursor-pointer hover:bg-emerald-400 hover:text-white`} onClick={() => (currentRoute !== 'signup') && navigate('/signup')}>SIGNUP</div>
          </div>

          <div className='h-full items-center justify-center cursor-pointer hidden lg:flex' onClick={() => setDisplayMenu(!displayMenu)}>
            <FiMenu size={30}/>
          </div>

          <div className={`absolute top-full left-0 h-[calc(100vh-60px)] w-full origin-top-right duration-200 hidden lg:flex ${displayMenu ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className='h-fit max-h-full w-full bg-white grid grid-row-6 gap-[10px] p-[20px] overflow-y-scroll hide-scrollbar'>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'home') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'home') && navigate('/'));}}>HOME</div>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'about') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'about') && navigate('/about'));}}>ABOUT</div>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'contact') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'contact') && navigate('/contact'));}}>CONTACT</div>
              {/* <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'pricing') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'pricing') && navigate('/pricing'));}}>Pricing</div> */}
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'login') ? 'text-emerald-400' : ''} duration-200 cursor-pointer hover:text-emerald-400`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'login') && navigate('/login'));}}>LOGIN</div>
              <div className={`h-[50px] w-full flex items-center justify-center p-x-[10px] ${(currentRoute === 'signup') ? 'bg-emerald-400 text-white' : 'bg-emerald-50 text-emerald-400'} font-medium border-2 border-emerald-400 rounded-md duration-200 cursor-pointer hover:bg-emerald-400 hover:text-white`} onClick={() => {setDisplayMenu(!displayMenu); ((currentRoute !== 'signup') && navigate('/signup'));}}>SIGNUP</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar