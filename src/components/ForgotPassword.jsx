import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'

import { sendCodeAPI, changePasswordAPI } from '../hooks/functions'

const ForgotPassword = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  const [details, setDetails] = useState({ email: '', code: '', password: '', confirmPassword: '' })
  const [hidePassword, setHidePassword] = useState({ password: true, confirm: true })
  const [error, setError] = useState({ email: '', code: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [displayChange, setDisplayChange] = useState(false)
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    setCurrentRoute('forgotpassword')
    document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })
  }, [])

  useEffect(() => {
    if (loginStatus.login === true) {
      navigate('/dashboard')
    }
  }, [loginStatus.login])

  const handleGetCode = () => {
    const email = details.email.trim()
    if (email === '') {
      setError(p => {return{...p, email: 'Please input your subscribed email.'}})
    } else {
      sendCodeAPI({ setLoading, setError, details, setDisplayChange, setCountdown })
    }
  }
  
  const handleChangePassword = () => {
    const code = details.code.trim()
    const password = details.password.trim()
    const confirmPassword = details.confirmPassword.trim()

    if (code === '') {
      setError(p => {return{...p, code: 'Please input the code your received in your email.'}})
    }
    if (password === '' || password.length < 6 || password.length > 20) {
      setError(p => {return{...p, password: 'Password should be 6 to 20 characters long without any space in-between.'}})
    }
    if (password !== confirmPassword) {
      setError(p => {return{...p, confirmPassword: 'Passwords do not match.'}})
    }
    if (code !== '' && password !== '' && password.length > 5 && password.length < 21 && password === confirmPassword) {
      changePasswordAPI({ setLoading, setError, details, setDetails, setDisplayChange, navigate })
    }
  }

  return (
    <>
      <div className='h-[calc(100%-60px)] min-h-fit w-full bg-slate-100 grid items-center'>
        {displayChange ? (
          <div className='h-fit w-full p-[20px] flex flex-col gap-[20px] items-center'>
            <Fade direction='up' cascade={true} damping={0.1} triggerOnce={true} className='w-full max-w-[400px]'>

              <div className='w-full flex flex-col items-center gap-[5px]'>
                <p className='text-2xl font-semibold text-center'>Change Password</p>
                <p className='text-center text-slate-600'>Enter the code and your new password</p>
              </div>
              <div className='w-full max-w-[400px] flex flex-col'>
                <p className='text-slate-600'>Email:</p>
                <div className={`h-[50px] w-full bg-white border-2 border-slate-300 rounded-md px-[5px] flex items-center opacity-50`}>{details.email}</div>
              </div>
              <div className='w-full max-w-[400px] flex flex-col'>
                <p className='text-slate-600'>Code:</p>
                <input type="text" placeholder='Check your email' value={details.code} onKeyDown={e => (e.key === 'Enter') && handleChangePassword()} onChange={e => setDetails(p => {return{...p, code: e.target.value}})} className={`h-[50px] w-full bg-white border-2 ${(error.code === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] focus:outline-none`}/>
                {(error.code !== '') && (<p className='text-sm text-red-400'>{error.code}</p>)}
              </div>
              <div className='w-full max-w-[400px] flex flex-col'>
                <p className='text-slate-600'>Password:</p>
                <div className={`h-[50px] w-full bg-white border-2 ${(error.password === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] flex items-center gap-[5px]`}>
                  <input type={hidePassword.password ? 'password' : 'text'} placeholder='******' value={details.password} onKeyDown={e => (e.key === 'Enter') && handleChangePassword()} onChange={e => setDetails(p => {return{...p, password: e.target.value}})} className={`flex-1 h-full w-full focus:outline-none`}/>
                  <div className='h-full flex items-center justify-center cursor-pointer' onClick={() => setHidePassword(p => {return{...p, password: !p.password}})}>
                    {hidePassword.password ? <FaEyeSlash size={30} className='text-slate-400'/> : <FaEye size={30} className='text-slate-400'/>}
                  </div>
                </div>
                {(error.password !== '') && (<p className='text-sm text-red-400'>{error.password}</p>)}
              </div>
              <div className='w-full max-w-[400px] flex flex-col'>
                <p className='text-slate-600'>Confirm Password:</p>
                <div className={`h-[50px] w-full bg-white border-2 ${(error.confirmPassword === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] flex items-center gap-[5px]`}>
                  <input type={hidePassword.confirm ? 'password' : 'text'} placeholder='******' value={details.confirmPassword} onKeyDown={e => (e.key === 'Enter') && handleChangePassword()} onChange={e => setDetails(p => {return{...p, confirmPassword: e.target.value}})} className={`flex-1 h-full w-full focus:outline-none`}/>
                  <div className='h-full flex items-center justify-center cursor-pointer' onClick={() => setHidePassword(p => {return{...p, confirm: !p.confirm}})}>
                    {hidePassword.confirm ? <FaEyeSlash size={30} className='text-slate-400'/> : <FaEye size={30} className='text-slate-400'/>}
                  </div>
                </div>
                {(error.confirmPassword !== '') && (<p className='text-sm text-red-400'>{error.confirmPassword}</p>)}
              </div>
              <div className={`w-full max-w-[400px] text-sm text-right ${(countdown === 0) ? 'text-slate-600 cursor-pointer underline-offset-4 hover:underline hover:opacity-50' : 'text-slate-400'}`} onClick={() => (countdown === 0) && sendCodeAPI({ setLoading, setError, details, setDisplayChange, setCountdown })}>{(countdown === 0) ? 'Resend code' : `Resend code in ${countdown}s`}</div>
              <button onClick={() => handleChangePassword()} onKeyDown={e => (e.key === 'Enter') && handleChangePassword()} className={`h-[50px] w-full max-w-[400px] text-white rounded-md px-[5px] flex items-center justify-center ${loading ? 'bg-gray-400' : 'bg-emerald-400'} duration-200 focus:outline-none hover:opacity-50 focus-visible:opacity-50`}>
                {loading ? (<div className='h-[40px] w-[40px] border-[5px] border-gray-300 border-t-[5px] border-t-white rounded-full animate-spin'/>) : 'Change Password'}
              </button>
              <button onClick={() => setDisplayChange(false)} onKeyDown={e => (e.key === 'Enter') && setDisplayChange(false)} className={`h-[50px] w-full max-w-[400px] text-red-300 rounded-md px-[5px] flex items-center justify-center bg-red-50 border-2 border-red-200 focus:outline-none hover:opacity-50 focus-visible:opacity-50`}>
                Back
              </button>
              <div className='w-full max-w-[400px] text-sm text-center text-slate-600 cursor-pointer underline-offset-4 hover:underline hover:text-emerald-500' onClick={() => navigate('/login')}>Remembered your account details? <span className='text-emerald-500'>Login</span></div>
            </Fade>
          </div>
        ) : (
          <div className='h-fit w-full p-[20px] flex flex-col gap-[20px] items-center'>
            <Fade direction='up' cascade={true} damping={0.1} triggerOnce={true} className='w-full max-w-[400px]'>
              <div className='w-full flex flex-col items-center gap-[5px]'>
                <p className='text-2xl font-semibold text-center'>Recover account</p>
                <p className='text-center text-slate-600'>Enter your registered email to get code</p>
              </div>
              <div className='w-full max-w-[400px] flex flex-col'>
                <p className='text-slate-600'>Email:</p>
                <input type="email" placeholder='abc123@gmail.com' value={details.email} onKeyDown={e => (e.key === 'Enter') && handleGetCode()} onChange={e => setDetails(p => {return{...p, email: e.target.value}})} className={`h-[50px] w-full bg-white border-2 ${(error.email === '') ? 'border-slate-300' : 'border-red-400'} rounded-md px-[5px] focus:outline-none`}/>
                {(error.email !== '') && (<p className='text-sm text-red-400'>{error.email}</p>)}
              </div>
              <button onClick={() => handleGetCode()} onKeyDown={e => (e.key === 'Enter') && handleGetCode()} className={`h-[50px] w-full max-w-[400px] text-white rounded-md px-[5px] flex items-center justify-center ${loading ? 'bg-gray-400' : 'bg-emerald-400'} duration-200 focus:outline-none hover:opacity-50 focus-visible:opacity-50`}>
                {loading ? (<div className='h-[40px] w-[40px] border-[5px] border-gray-300 border-t-[5px] border-t-white rounded-full animate-spin'/>) : 'Get Code'}
              </button>
              <div className='w-full max-w-[400px] text-sm text-center text-slate-600 cursor-pointer underline-offset-4 hover:underline hover:text-emerald-500' onClick={() => navigate('/login')}>Remembered your account details? <span className='text-emerald-500'>Login</span></div>
            </Fade>
          </div>
        )}
      </div>
    </>
  )
}

export default ForgotPassword