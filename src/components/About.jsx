import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from './Footer'
import about from '../assets/about.jpg'

const About = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('about')
  }, [])

  useEffect(() => {
    if (loginStatus.login === true) {
      navigate('/dashboard')
    }
  }, [loginStatus.login])

  return (
    <div className='h-[calc(100%-60px)] min-h-fit w-full bg-slate-100 flex flex-col'>
      {/* hero */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[200px] w-full max-w-[1024px] px-[20px] py-[40px] flex flex-col items-center gap-[40px]'>
          <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Carb0nomics walks towards to a carbon neutral future</p>
          <img src={about} alt="logo" className='h-[300px] w-full max-w-[600px] object-cover' />
        </div>
      </div>

      {/* vision */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[200px] w-full max-w-[1024px] px-[20px] py-[40px] flex flex-col items-center gap-[20px]'>
          <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Our Vision</p>
          <p className='text-center'>Through Carb0nomics we are committed to create a future where we can explore the human potential and transcend into the next generations, improving the quality of life for our communities, our nation, and the world. Where all energy is produced from sustainable sources and sustained by a public that understands and values the social, economic, and environmental benefits.</p>
        </div>
      </div>

      {/* mission */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[200px] w-full max-w-[1024px] px-[20px] py-[40px] flex flex-col items-center gap-[20px]'>
          <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Our Mission</p>
          <p className='text-center'>Lead the world to a carbon neutral environment, enhance society’s needs and do so in a sustainable way to manage the Earth’s resources responsibly.</p>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default About