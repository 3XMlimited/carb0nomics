import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <>
      <div className='bg-slate-200'>
        <p className='text-3xl text-emerald-400'>TITLE HAHA</p>
        <p className='text-3xl font-bold text-black'>TITLE HAHA</p>
        <p className='text-9xl font-bold'>TITLE HAHA</p>
        <p className='text-9xl font-bold text-gray-800'>TITLE HAHA</p>
        <div className='p-10'>
          <div className='h-[200px] w-[200px] bg-white rounded-xl flex items-center justify-center'>dsd</div>
        </div>
      </div>
      <div className='bg-slate-100'>
        <p className='text-3xl text-emerald-400'>TITLE HAHA</p>
        <p className='text-3xl font-bold text-black'>TITLE HAHA</p>
        <p className='text-9xl font-bold'>TITLE HAHA</p>
        <p className='text-9xl font-bold text-gray-800'>TITLE HAHA</p>
        <div className='p-10'>
          <div className='h-[200px] w-[200px] bg-white rounded-xl flex items-center justify-center shadow-md'>dsd</div>
        </div>
      </div>
    </>
  )
}

export default Home