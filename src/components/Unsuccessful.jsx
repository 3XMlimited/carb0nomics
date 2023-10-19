import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const Unsuccessful = ({ setCurrentRoute }) => {
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentRoute('unsuccessful')
        document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <div className='h-fit min-h-full flex items-center justify-center'>
            <div className='h-fit min-h-screen w-full grid grid-cols-1 backdrop-blur-[2px]'>
                <div className='h-full w-full flex flex-col items-center justify-center p-[20px]'>
                    <Fade direction='up' cascade={true} damping={0.1} triggerOnce={true}>
                        <p className='text-[150px] text-center leading-normal lg:text-[100px] md:text-[60px]'>Oops!</p>
                        <p className='text-center leading-normal sm:text-sm'>Your payment was unsuccessful.</p>
                        <p className='text-center leading-normal mb-[30px] md:mb-[20px] sm:text-sm'>Please try again or <span className='text-blue-400 underline underline-offset-2 duration-200 cursor-pointer hover:underline-offset-4' onClick={() => navigate('/contact')}>contact us</span>.</p>
                        <button className='h-[50px] w-full max-w-[200px] px-[20px] font-semibold bg-emerald-400 text-center rounded-full cursor-pointer duration-300 hover:opacity-50 sm:text-sm' onClick={() => navigate('/dashboard')}>Back to dashboard</button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Unsuccessful