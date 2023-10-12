import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCircleUser } from 'react-icons/fa6'
import moment from 'moment'

import { unsubscribeAPI } from '../hooks/functions'

const Account = ({ setCurrentRoute, loginStatus, setLoginStatus }) => {
  const navigate = useNavigate()
  const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCurrentRoute('account')
  }, [])

  useEffect(() => {
    if (loginStatus.login === false) {
      navigate('/')
    }
  }, [loginStatus.login])

  return (
    <div className='relative h-fit min-h-[calc(100%-60px)] flex items-center justify-center'>
      <div className='z-10 h-fit w-full grid grid-cols-1'>
        <div className='h-full w-full flex flex-col items-center justify-center p-[20px] gap-[20px]'>
          <FaCircleUser size={100}/>
          <div>
            {user.username ? (
              <p className='text-xl text-center font-semibold leading-normal sm:text-base'>{user.username}</p>
            ) : (<></>)}
            {user.email ? (
              <p className='text-center font-medium leading-normal sm:text-sm'><span className='text-slate-500'>Email:</span> {user.email}</p>
            ) : (<></>)}
            <p className='text-center font-medium leading-normal sm:text-sm'><span className='text-slate-500'>Plan:</span> {loginStatus.plan}</p>
            {(loginStatus.plan !== 'none' && user.endDate) ? (
              <p className='text-center font-medium leading-normal sm:text-sm'><span className='text-slate-500'>End Date:</span> {moment(user.endDate).format('MMMM Do YYYY, hh:mm a')}</p>
            ) : (<></>)}
          </div>
          {(loginStatus.plan === 'none') ? (
            <>
              <p className='max-w-[800px] text-center sm:text-sm'>We provide a Carbon Neutrality Platform packed with powerful tools and features powered by AI, displayed in beauty, focused on performance and simplicity; carrying the sole purpose of helping your business obtain <span className='font-semibold'>"Carbon Neutrality without any sacrifices"</span>.</p>
              <button className='h-[50px] w-full max-w-[300px] font-semibold text-black bg-emerald-400 text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => navigate('/pricing')}>Explore Plans</button>
              <button className='h-fit w-fit text-slate-300 text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => {window.localStorage.clear(); setLoginStatus({ loading: false, login: false, plan: 'none' }); navigate('/');}}>Logout</button>
            </>
          ) : (
            <>
              <button className='h-[50px] w-full max-w-[300px] font-semibold bg-red-400 text-white text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => {window.localStorage.clear(); setLoginStatus({ loading: false, login: false, plan: 'none' }); navigate('/');}}>Logout</button>
              {(loginStatus.plan !== 'none' && user?.hasSubs === true) ? (
                <button className='h-fit w-fit text-slate-300 text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => {
                  if (window.confirm('Do you really wanna unsubscribe?')) {
                    unsubscribeAPI({ setLoading })
                  }
                }}>
                  {loading ? (<div className='h-[30px] w-[30px] border-[5px] border-slate-50 border-t-[5px] border-t-slate-300 rounded-full animate-spin'/>) : 'Unsubscribe'}
                </button>
              ) : (<></>)}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Account