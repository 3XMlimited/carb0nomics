import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import Footer from './Footer'
import about from '../assets/about.jpg'

const About = ({ currentRoute, setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('about')
    document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div className='relative h-fit min-h-[calc(100%-80px)] w-full bg-slate-50 flex flex-col px-[20px] pt-[40px] gap-[40px] mobile:min-h-[calc(100%-60px)] md:gap-[20px]'>
      {/* hero */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit w-full flex flex-col items-center gap-[40px] md:gap-[20px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center xxl:text-3xl md:text-2xl sm:text-xl'>Carb0nomics walks towards to a carbon neutral future</p>
            <img src={about} alt="logo" className='h-[300px] w-full max-w-[600px] object-cover rounded-md shadow-2xl md:shadow-lg md:h-[200px] sm:h-[150px]' />
          </Fade>
        </div>
      </div>

      {/* vision */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit w-full max-w-[1024px] flex flex-col items-center gap-[20px] md:gap-[10px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center xxl:text-3xl md:text-2xl sm:text-xl'>Our Vision</p>
            <p className='text-justify text-base sm:text-sm'>Through Carb0nomics we are committed to create a future where we can explore the human potential and transcend into the next generations, improving the quality of life for our communities, our nation, and the world. Where all energy is produced from sustainable sources and sustained by a public that understands and values the social, economic, and environmental benefits.</p>
          </Fade>
        </div>
      </div>

      {/* mission */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit w-full max-w-[1024px] flex flex-col items-center gap-[20px] md:gap-[10px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center xxl:text-3xl md:text-2xl sm:text-xl'>Our Mission</p>
            <p className='text-justify text-base sm:text-sm'>Lead the world to a carbon neutral environment, enhance society’s needs and do so in a sustainable way to manage the Earth’s resources responsibly.</p>
          </Fade>
        </div>
      </div>

      {/* footer */}
      <Footer currentRoute={currentRoute}/>
    </div>
  )
}

export default About