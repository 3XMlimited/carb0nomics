import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Unsuccessful = ({ setCurrentRoute }) => {
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentRoute('unsuccessful')
    }, [])

    return (
        <div className='h-fit min-h-full flex items-center justify-center'>
            <div className='h-fit min-h-screen w-full grid grid-cols-1 backdrop-blur-[2px]'>
                <div className='h-full w-full flex flex-col items-center justify-center p-[20px]'>
                    <p className='text-[150px] text-center leading-normal lg:text-[100px] md:text-[60px]'>Oops!</p>
                    <p className='text-center leading-normal sm:text-sm'>Your payment was unsuccessful.</p>
                    <p className='text-center leading-normal mb-[30px] md:mb-[20px] sm:text-sm'>Please try again or <span className='text-blue-400 underline underline-offset-2 duration-200 cursor-pointer hover:underline-offset-4' onClick={() => navigate('/contact')}>contact us</span>.</p>
                    <button className='h-[50px] w-full max-w-[200px] font-semibold bg-emerald-400 text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => navigate('/dashboard')}>Back to dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default Unsuccessful