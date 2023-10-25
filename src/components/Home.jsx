import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { PiChartLineDownLight } from 'react-icons/pi'
import { ImCalculator } from 'react-icons/im'
import { Fade } from 'react-awesome-reveal'

import Footer from './Footer'
import dashboard from '../assets/dashboard.png'
import search from '../assets/search.png'
import actionplan from '../assets/actionplan.png'
import beis from '../assets/beis.png'
import ecoinvent from '../assets/ecoinvent.png'
import epa from '../assets/epa.png'
import exiobase from '../assets/exiobase.png'
import ghgProtocol from '../assets/ghgProtocol.png'
import glec from '../assets/glec.png'
import gem from '../assets/gem.png'
import westpac from '../assets/westpac.png'
import unfccc from '../assets/unfccc.png'
import vcs from '../assets/vcs.png'
import goldStandard from '../assets/goldStandard.png'
import ucr from '../assets/ucr.png'
import bioCarbon from '../assets/bioCarbon.png'
import globalCarbon from '../assets/globalCarbon.jpg'

const Home = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('home')
    document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })
  }, [])
  
  return (
    <div className='h-[calc(100%-80px)] min-h-fit w-full bg-slate-100 flex flex-col mobile:h-[calc(100%-60px)]'>
      {/* hero */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[600px] w-full max-w-[1200px] px-[20px] py-[80px] grid grid-cols-2 gap-[10px] xl:grid-cols-1 xl:gap-[40px] xl:py-[40px]'>
          <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
            <Fade direction='up' triggerOnce={true}>
              <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'><span className='text-emerald-400'>Carb0nomics:</span> Measure and Act on Your Carbon Impact</p>
              <p className='mb-[10px] xl:text-center'>Join the Green Revolution: Calculate and offset your carbon footprint</p>
              <button onClick={() => (loginStatus.login) ? navigate('/dashboard') : navigate('/login')} className='h-[50px] w-[200px] bg-emerald-400 text-white font-medium px-[10px] rounded-full shadow-lg duration-200 hover:opacity-50'>Get Started</button>
            </Fade>
          </div>
          <div className='h-full w-full flex items-center justify-center'>
            <Fade direction='up' triggerOnce={true}>
              <img src={dashboard} alt="dashboard" className='w-full' />
            </Fade>
          </div>
        </div>
      </div>

      {/* about */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit min-h-[600px] w-full max-w-[1200px] px-[20px] py-[80px] flex flex-col items-center justify-center gap-[40px] xl:py-[40px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center xxl:text-3xl sm:text-2xl'>Carb0nomics is your all-in-one climate solution</p>
          </Fade>
          <div className='h-fit w-full max-w-[1100px] grid grid-cols-3 gap-[20px] lg:grid-cols-1'>
            <Fade direction='up' cascade={true} damping={0.2} triggerOnce={true}>
              <div className='relative h-[400px] w-full p-[20px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-[20px] overflow-hidden lg:h-[300px]'>
                <div className='absolute h-[50px] w-[50px] top-0 left-0 flex items-center justify-center text-lg bg-slate-100 rounded-br-xl'>1</div>
                <ImCalculator color={'#34d399'} size={60}/>
                <p className='text-2xl font-semibold text-center'>Calculate Footprint</p>
                <p className='text-center'>Our AI calculates your carbon footprint better and quicker for you.</p>
              </div>
              <div className='relative h-[400px] w-full p-[20px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-[10px] overflow-hidden lg:h-[300px]'>
                <div className='absolute h-[50px] w-[50px] top-0 left-0 flex items-center justify-center text-lg bg-slate-100 rounded-br-xl'>2</div>
                <PiChartLineDownLight color={'#34d399'} size={60}/>
                <p className='text-2xl font-semibold text-center'>Emissions Reduction Plan</p>
                <p className='text-center'>Proactive reduction planning and simulations enable smarter decision-making.</p>
              </div>
              <div className='relative h-[400px] w-full p-[20px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-[10px] overflow-hidden lg:h-[300px]'>
                <div className='absolute h-[50px] w-[50px] top-0 left-0 flex items-center justify-center text-lg bg-slate-100 rounded-br-xl'>3</div>
                <HiOutlineSearch color={'#34d399'} size={60}/>
                <p className='text-2xl font-semibold text-center'>Find ESG Scores</p>
                <p className='text-center'>Explore how other companies are performing all around the world.</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* calculations */}
      <div className='h-fit w-full flex justify-center bg-[#fbf2eb]'>
        <div className='h-fit w-full max-w-[1200px] px-[20px] py-[80px] grid grid-cols-2 gap-[10px] xl:grid-cols-1  xl:py-[40px]'>
          <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
            <Fade direction='up' triggerOnce={true}>
              <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Aligned with global <span className='text-emerald-400'>standards</span></p>
              <p className='mb-[10px] xl:text-center'>Make compliance simple by utilising built-in alignment with global reporting standards and frameworks.</p>
            </Fade>
          </div>
          <div className='h-full w-full grid grid-cols-2 gap-[10px] sm:grid-cols-1'>
            <div className='h-fit w-full grid grid-rows-3 gap-[10px]'>
              <Fade direction='up' triggerOnce={true}>
                <div className='h-[100px] w-full bg-white rounded-lg flex items-center justify-center py-[10px] px-[20px] sm:h-[80px]'><img src={ghgProtocol} alt="ghgProtocol" className='h-[80%] w-full max-w-[200px] object-contain' /></div>
                <div className='h-[100px] w-full bg-white rounded-lg flex items-center justify-center py-[10px] px-[20px] sm:h-[80px]'><img src={exiobase} alt="exiobase" className='h-[80%] w-full max-w-[200px] object-contain' /></div>
                <div className='h-[100px] w-full bg-white rounded-lg flex items-center justify-center py-[10px] px-[20px] sm:h-[80px]'><img src={ecoinvent} alt="ecoivent" className='h-[80%] w-full max-w-[200px] object-contain' /></div>
              </Fade>
            </div>
            <div className='h-fit w-full grid grid-rows-3 gap-[10px]'>
              <Fade direction='up' triggerOnce={true}>
                <div className='h-[100px] w-full bg-white rounded-lg flex items-center justify-center py-[10px] px-[20px] sm:h-[80px]'><img src={epa} alt="epa" className='h-[80%] w-full max-w-[200px] object-contain' /></div>
                <div className='h-[100px] w-full bg-white rounded-lg flex items-center justify-center py-[10px] px-[20px] sm:h-[80px]'><img src={glec} alt="glec" className='h-[80%] w-full max-w-[200px] object-contain' /></div>
                <div className='h-[100px] w-full bg-white rounded-lg flex items-center justify-center py-[10px] px-[20px] sm:h-[80px]'><img src={beis} alt="beis" className='h-[80%] w-full max-w-[200px] object-contain' /></div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* partners */}
      <div className='h-fit w-full flex justify-center bg-white'>
        <div className='h-fit w-full max-w-[1200px] px-[20px] py-[80px] flex flex-col items-center gap-[10px] xl:py-[40px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold mb-[30px] xxl:text-3xl xl:text-center sm:text-2xl'>Certified Carbon Trading</p>
          </Fade>
          <Fade direction='up' triggerOnce={true}>
            <div className='h-fit w-fit grid grid-cols-5 gap-[10px] xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1'>
              <img src={gem} alt="gem" className='h-[100px] w-full max-w-[200px] object-contain' />
              <img src={westpac} alt="westpac" className='h-[100px] w-full max-w-[200px] object-contain xl:hidden' />
              <img src={unfccc} alt="unfccc" className='h-[100px] w-full max-w-[200px] object-contain' />
              <img src={vcs} alt="vcs" className='h-[100px] w-full max-w-[200px] object-contain' />
              <img src={goldStandard} alt="goldStandard" className='h-[100px] w-full max-w-[200px] object-contain' />
            </div>
            <div className='h-fit w-fit grid grid-cols-3 gap-[10px] xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1'>
              <img src={westpac} alt="westpac" className='h-[100px] w-full max-w-[200px] object-contain hidden xl:flex' />
              <img src={ucr} alt="ucr" className='h-[100px] w-full max-w-[200px] object-contain' />
              <img src={bioCarbon} alt="bioCarbon" className='h-[100px] w-full max-w-[200px] object-contain' />
              <img src={globalCarbon} alt="globalCarbon" className='h-[100px] w-full max-w-[200px] object-contain' />
            </div>
          </Fade>
        </div>
      </div>

      {/* break */}
      {/* <div className='h-fit w-full flex justify-center bg-emerald-100'>
        <div className='h-fit min-h-[100px] w-full max-w-[1200px] px-[20px] py-[80px] flex flex-col items-center justify-center gap-[20px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center xxl:text-3xl sm:text-2xl'><span className='text-emerald-500'>Easier</span> carbon management</p>
            <p className='text-center'>Carb0nomic focuses on achieving carbon neutrality faster without any sacrifices and need of consultants. Our easy-to-use UI requires no training for use.</p>
          </Fade>
        </div>
      </div> */}

      {/* features */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit w-full max-w-[1200px] px-[20px] py-[80px] flex flex-col items-center justify-center gap-[40px] xl:py-[40px]'>
          <div>
            <Fade direction='left' triggerOnce={true}>
              <p className='text-4xl font-bold text-center mb-[10px] xxl:text-3xl sm:text-2xl'>Powerful Features</p>
            </Fade>
            <Fade direction='right' triggerOnce={true}>
              <p className='mb-[10px] text-center'>Carb0nomic is packed with features to back you up.</p>
            </Fade>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 xl:gap-[40px]'>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
              <Fade direction='left' triggerOnce={true}>
                <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Accurate emissions measurement</p>
                <p className='mb-[10px] xl:text-center'>Carb0nomics help you achieve your climate goals through accurate measurement. To give you the best experience, we have developed a system thats easy to use and provides beautiful graphical presentations to all of your data.</p>
              </Fade>
            </div>
            <div className='h-fit w-full flex items-center justify-center'>
              <Fade direction='right' triggerOnce={true}>
                <img src={dashboard} alt="dashboard" className='min-h-full w-full object-contain' />
              </Fade>
            </div>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 xl:gap-[40px]'>
            <div className='h-fit w-full flex items-center justify-center xl:order-2'>
              <Fade direction='left' triggerOnce={true}>
                <img src={search} alt="search" className='min-h-full w-full object-contain' />
              </Fade>
            </div>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center xl:order-1'>
              <Fade direction='right' triggerOnce={true}>
                <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Explore ESG risk scores</p>
                <p className='mb-[10px] xl:text-center'>Carb0nomics provides you a powerful search engine to explore how other companies are performing all around the world throughout the years; in a beautiful yet powerful presentation.</p>
              </Fade>
            </div>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 xl:gap-[40px]'>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
              <Fade direction='left' triggerOnce={true}>
                <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>Smart Solutions for Sustainable Success</p>
                <p className='mb-[10px] xl:text-center'>Carb0nomics empowers businesses with a comprehensive platform to calculate reduction goals. Our AI-driven recommendations ensure faster progress towards sustainability, maximizing benefits while minimizing any potential drawbacks.</p>
              </Fade>
            </div>
            <div className='h-fit w-full flex items-center justify-center'>
              <Fade direction='right' triggerOnce={true}>
                <img src={actionplan} alt="actionplan" className='min-h-full w-full object-contain' />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* get started */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit min-h-[100px] w-full max-w-[1200px] px-[20px] py-[40px] flex flex-col items-center justify-center gap-[40px]'>
          <Fade direction='up' triggerOnce={true} className='w-full'>
            <div className='h-fit w-full flex items-center justify-between gap-[10px] bg-emerald-400 px-[40px] py-[60px] rounded-[40px] lg:flex-col'>
                <div>
                  <p className='text-3xl font-bold lg:text-center sm:text-2xl'>Start using Carb0nomics</p>
                  <p className='lg:text-center'>Let's achieve a carbon neutral future together.</p>
                </div>
                <button onClick={() => (loginStatus.login) ? navigate('/dashboard') : navigate('/login')} className='h-[50px] w-[200px] bg-slate-800 text-white font-medium px-[10px] rounded-full shadow-lg duration-200 hover:opacity-50 sm:w-full'>Get Started</button>
            </div>
          </Fade>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home