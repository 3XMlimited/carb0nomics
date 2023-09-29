import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import logo from '../assets/logo.png'
import { signupAPI } from '../hooks/functions'

const Signup = ({ setCurrentRoute, loginStatus, setLoginStatus }) => {
  const navigate = useNavigate()

  const [details, setDetails] = useState({ email: '', password: '', confirmPassword: '' })
  const [hidePassword, setHidePassword] = useState({ password: true, confirm: true })
  const [error, setError] = useState({ email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCurrentRoute('signup')
  }, [])

  useEffect(() => {
    if (loginStatus.login === true) {
      navigate('/dashboard')
    }
  }, [loginStatus.login])

  const handleSignup = () => {
    const email = details.email.trim()
    const password = details.password.trim()
    const confirmPassword = details.confirmPassword.trim()
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email === '' || !regex.test(email)) {
      setError(p => {return{...p, email: 'Please input email correctly.'}})
    }
    if (password === '' || password.length < 6 || password.length > 20) {
      setError(p => {return{...p, password: 'Password should be 6 to 20 characters long without any space in-between.'}})
    }
    if (password !== confirmPassword) {
      setError(p => {return{...p, confirmPassword: 'Passwords do not match.'}})
    }
    if (email !== '' && regex.test(email) && password !== '' && password.length > 5 && password.length < 21 && password === confirmPassword) {
      signupAPI({ setLoading, setError, details, setDetails, navigate, setLoginStatus })
    }
  }

  return (
    <>
      <div className='h-[calc(100%-60px)] min-h-fit w-full bg-slate-100 grid items-center'>
        <div className='h-fit w-full p-[20px] flex flex-col gap-[20px] items-center'>
          <img src={logo} alt="logo" className='h-[100px]'/>
          <div className='w-full flex flex-col items-center gap-[5px]'>
            <p className='text-2xl font-semibold text-center'>Create account</p>
            <p className='text-center text-slate-600'>Calculate and offset your carbon footprint</p>
          </div>
          <div className='w-full max-w-[400px] flex flex-col'>
            <p className='text-slate-600'>Email:</p>
            <input type="email" placeholder='abc123@gmail.com' value={details.email} onChange={e => setDetails(p => {return{...p, email: e.target.value}})} className={`h-[50px] w-full bg-white border-2 ${(error.email === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] focus:outline-none`}/>
            {(error.email !== '') && (<p className='text-sm text-red-400'>{error.email}</p>)}
          </div>
          <div className='w-full max-w-[400px] flex flex-col'>
            <p className='text-slate-600'>Password:</p>
            <div className={`h-[50px] w-full bg-white border-2 ${(error.password === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] flex items-center gap-[5px]`}>
              <input type={hidePassword.password ? 'password' : 'text'} placeholder='******' value={details.password} onChange={e => setDetails(p => {return{...p, password: e.target.value}})} className={`flex-1 h-full w-full focus:outline-none`}/>
              <div className='h-full flex items-center justify-center cursor-pointer' onClick={() => setHidePassword(p => {return{...p, password: !p.password}})}>
                {hidePassword.password ? <FaEyeSlash size={30} className='text-slate-400'/> : <FaEye size={30} className='text-slate-400'/>}
              </div>
            </div>
            {(error.password !== '') && (<p className='text-sm text-red-400'>{error.password}</p>)}
          </div>
          <div className='w-full max-w-[400px] flex flex-col'>
            <p className='text-slate-600'>Confirm Password:</p>
            <div className={`h-[50px] w-full bg-white border-2 ${(error.confirmPassword === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] flex items-center gap-[5px]`}>
              <input type={hidePassword.confirm ? 'password' : 'text'} placeholder='******' value={details.confirmPassword} onChange={e => setDetails(p => {return{...p, confirmPassword: e.target.value}})} className={`flex-1 h-full w-full focus:outline-none`}/>
              <div className='h-full flex items-center justify-center cursor-pointer' onClick={() => setHidePassword(p => {return{...p, confirm: !p.confirm}})}>
                {hidePassword.confirm ? <FaEyeSlash size={30} className='text-slate-400'/> : <FaEye size={30} className='text-slate-400'/>}
              </div>
            </div>
            {(error.confirmPassword !== '') && (<p className='text-sm text-red-400'>{error.confirmPassword}</p>)}
          </div>
          <button onClick={() => handleSignup()} className={`h-[50px] w-full max-w-[400px] text-white rounded-md px-[5px] flex items-center justify-center ${loading ? 'bg-gray-400' : 'bg-emerald-400'} duration-200 focus:outline-none hover:opacity-50 focus-visible:opacity-50`}>
            {loading ? (<div className='h-[40px] w-[40px] border-[5px] border-gray-300 border-t-[5px] border-t-white rounded-full animate-spin'/>) : 'Signup'}
          </button>
          <div className='w-full max-w-[400px] text-sm text-center text-slate-600 cursor-pointer underline-offset-4 hover:underline hover:text-emerald-500' onClick={() => navigate('/login')}>Already have an account? <span className='text-emerald-500'>Login</span></div>
        </div>
      </div>
    </>
  )
}

export default Signup