import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { PiChartLineDownLight } from 'react-icons/pi'
import { ImCalculator } from 'react-icons/im'
import { FaPlus, FaMinus } from 'react-icons/fa'
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

const Home = ({ currentRoute, setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('home')
    document.getElementById('global-container').scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const faqItems = [
    {
      question: "What is Carb0nomics?",
      answer: "Carb0nomics is your all-in-one, user-friendly climate solution designed to accurately calculate and track your carbon emissions, empowering you to develop proactive reduction strategies effortlessly."
    },
    {
      question: "How accurate are emission measurements?",
      answer: "We follow global standards for measuring your emissions, without shortcuts. With help of our calculations and AI managed system, you will have the most accurate results."
    },
    {
      question: "What sets Carb0nomics apart from others on the market?",
      answer: "Carb0nomics offers simplicity, automation, no-code integrations, and provides an activity-based approach meaning the calculations are done by co2e tonnage and not by how much money was spent on the activity that led to emissions."
    },
    {
      question: "Can I measure Scope 1, 2, and 3 emissions?",
      answer: "Yes."
    },
    {
      question: "Would I need to hire a team to measure emissions?",
      answer: "No, the software is easy to use and can be operated without any specific technical knowledge."
    },
    {
      question: "How can I measure emissions on your platform?",
      answer: "Just enter the data and the system will calculate everything automatically for you."
    },
    {
      question: "Can I see the progress on the way to becoming net-zero?",
      answer: "Yes, you can track your company’s progress in the dashboard."
    },
    {
      question: "Can you help me to create a plan to effectively reduce emissions for good?",
      answer: "Yes, by leveraging the data you provide, our intelligent AI system will suggest a range of effective action plans tailored specifically to your needs."
    },
  ]

  const FAQcomponent = (faq) => {
    const [clicked, setClicked] = useState(false)
    const faqRef = useRef()

    return (
      <div className='h-fit w-full py-[20px] border-b border-b-gray-300 flex flex-col gap-[10px] cursor-pointer' onClick={() => setClicked(!clicked)}>
        <div className='h-fit w-full grid grid-cols-[1fr_30px] items-center gap-[10px]'>
          <p className='text-xl font-medium leading-normal md:text-lg sm:text-base'>{faq.question}</p>
          <div className={`relative h-full w-full flex items-center justify-center duration-500 ${clicked ? 'rotate-180' : 'rotate-0'}`}>
            <FaPlus size={20} className={`fill-slate-800 absolute duration-500 ${clicked ? 'opacity-0' : 'opacity-100'}`}/>
            <FaMinus size={20} className={`fill-slate-800 absolute duration-500 ${clicked ? 'opacity-100' : 'opacity-0'}`}/>
          </div>
        </div>
        <div className='w-full leading-relaxed text-slate-600 duration-500 overflow-hidden sm:text-sm' style={{ height: clicked ? faqRef.current.scrollHeight : '0px' }} ref={faqRef}>{faq.answer}</div>
      </div>
    )
  }
  
  return (
    <div className='h-fit min-h-[calc(100%-80px)] w-full bg-slate-100 flex flex-col mobile:min-h-[calc(100%-60px)]'>
      {/* hero */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit min-h-[600px] w-full max-w-[1200px] px-[20px] py-[80px] grid grid-cols-2 gap-[10px] xl:min-h-fit xl:flex xl:flex-col xl:items-center xl:gap-[40px] xl:py-[40px] md:gap-[20px]'>
          <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
            <Fade direction='up' triggerOnce={true}>
              <p className='text-4xl font-bold xxl:text-3xl xl:text-center md:text-2xl sm:text-xl'><span className='text-emerald-400'>Carb0nomics:</span> Measure and Act on Your Carbon Impact</p>
              <p className='text-lg mb-[10px] xl:text-center md:text-base sm:text-sm'>Join the Green Revolution: Calculate and offset your carbon footprint</p>
              <button onClick={() => (loginStatus.login) ? navigate('/dashboard') : navigate('/login')} className='h-[50px] w-[200px] bg-emerald-400 text-white font-medium px-[10px] rounded-full shadow-lg duration-200 hover:opacity-50 sm:h-[40px] sm:text-sm'>Get Started</button>
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
        <div className='h-fit min-h-[600px] w-full max-w-[1200px] px-[20px] py-[80px] flex flex-col items-center justify-center gap-[40px] xl:py-[40px] lg:gap-[20px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center xxl:text-3xl md:text-2xl sm:text-xl'>Carb0nomics is your all-in-one climate solution</p>
          </Fade>
          <div className='h-fit w-full max-w-[1100px] grid grid-cols-3 gap-[20px] lg:grid-cols-1'>
            <Fade direction='up' cascade={true} damping={0.2} triggerOnce={true}>
              <div className='relative h-[400px] w-full p-[20px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-[20px] overflow-hidden lg:h-[250px] sm:p-[10px] sm:gap-[10px]'>
                <div className='absolute h-[50px] w-[50px] top-0 left-0 flex items-center justify-center text-lg bg-slate-100 rounded-br-xl'>1</div>
                <ImCalculator color={'#34d399'} className='text-[60px] sm:text-[40px]'/>
                <p className='text-2xl font-semibold text-center md:text-xl sm:text-lg'>Calculate Footprint</p>
                <p className='text-center sm:text-sm'>Our AI calculates your carbon footprint better and quicker for you.</p>
              </div>
              <div className='relative h-[400px] w-full p-[20px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-[10px] overflow-hidden lg:h-[250px] sm:p-[10px] sm:gap-[10px]'>
                <div className='absolute h-[50px] w-[50px] top-0 left-0 flex items-center justify-center text-lg bg-slate-100 rounded-br-xl'>2</div>
                <PiChartLineDownLight color={'#34d399'} className='text-[60px] sm:text-[40px]'/>
                <p className='text-2xl font-semibold text-center md:text-xl sm:text-lg'>Emissions Reduction Plan</p>
                <p className='text-center sm:text-sm'>Proactive reduction planning and simulations enable smarter decision-making.</p>
              </div>
              <div className='relative h-[400px] w-full p-[20px] bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-[10px] overflow-hidden lg:h-[250px] sm:p-[10px] sm:gap-[10px]'>
                <div className='absolute h-[50px] w-[50px] top-0 left-0 flex items-center justify-center text-lg bg-slate-100 rounded-br-xl'>3</div>
                <HiOutlineSearch color={'#34d399'} className='text-[60px] sm:text-[40px]'/>
                <p className='text-2xl font-semibold text-center md:text-xl sm:text-lg'>Find ESG Scores</p>
                <p className='text-center sm:text-sm'>Explore how other companies are performing all around the world.</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* calculations */}
      <div className='h-fit w-full flex justify-center bg-[#fbf2eb]'>
        <div className='h-fit w-full max-w-[1200px] px-[20px] py-[80px] grid grid-cols-2 gap-[10px] xl:grid-cols-1 xl:py-[40px]'>
          <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center'>
            <Fade direction='up' triggerOnce={true}>
              <p className='text-4xl font-bold xxl:text-3xl xl:text-center md:text-2xl sm:text-xl'>Aligned with global <span className='text-emerald-400'>standards</span></p>
              <p className='mb-[10px] xl:text-center sm:text-sm'>Make compliance simple by utilising built-in alignment with global reporting standards and frameworks.</p>
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
            <p className='text-4xl font-bold mb-[30px] xxl:text-3xl xxl:mb-[10px] xl:text-center md:text-2xl md:mb-0 sm:text-xl'>Certified Carbon Trading</p>
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

      {/* features */}
      <div className='h-fit w-full flex justify-center bg-slate-100'>
        <div className='h-fit w-full max-w-[1200px] px-[20px] py-[80px] flex flex-col items-center justify-center gap-[40px] xl:py-[40px] sm:gap-[20px]'>
          <div className='w-full'>
            <Fade direction='left' triggerOnce={true}>
              <p className='text-4xl font-bold text-center leading-normal xxl:text-3xl md:text-left md:text-2xl sm:text-xl'>Powerful Features</p>
            </Fade>
            <Fade direction='right' triggerOnce={true}>
              <p className='text-center leading-relaxed md:text-left sm:text-sm'>Packed with powerful features to back you up.</p>
            </Fade>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 sm:gap-[10px]'>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center sm:gap-0'>
              <Fade direction='left' triggerOnce={true} className='w-full'>
                <p className='text-3xl font-semibold leading-tight xxl:text-2xl xl:text-center lg:text-left md:text-xl sm:text-lg'>Accurate emissions measurement</p>
                <p className='leading-relaxed xl:text-center lg:text-left sm:text-sm'>Carb0nomics help you achieve your climate goals through accurate measurement. To give you the best experience, we have developed a system thats easy to use and provides beautiful graphical presentations to all of your data.</p>
              </Fade>
            </div>
            <div className='h-fit w-full flex items-center justify-center'>
              <Fade direction='right' triggerOnce={true}>
                <img src={dashboard} alt="dashboard" className='min-h-full w-full object-contain' />
              </Fade>
            </div>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 sm:gap-[10px]'>
            <div className='h-fit w-full flex items-center justify-center xl:order-2'>
              <Fade direction='left' triggerOnce={true}>
                <img src={search} alt="search" className='min-h-full w-full object-contain' />
              </Fade>
            </div>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center xl:order-1 sm:gap-0'>
              <Fade direction='right' triggerOnce={true} className='w-full'>
                <p className='text-3xl font-bold leading-tight xxl:text-2xl xl:text-center lg:text-left md:text-xl sm:text-lg'>Explore ESG risk scores</p>
                <p className='leading-relaxed xl:text-center lg:text-left sm:text-sm'>Carb0nomics provides you a powerful search engine to explore how other companies are performing all around the world throughout the years; in a beautiful yet powerful presentation.</p>
              </Fade>
            </div>
          </div>
          <div className='h-fit w-full grid grid-cols-2 gap-[20px] xl:grid-cols-1 sm:gap-[10px]'>
            <div className='h-full w-full flex flex-col justify-center gap-[10px] xl:items-center sm:gap-0'>
              <Fade direction='left' triggerOnce={true} className='w-full'>
                <p className='text-3xl font-bold leading-tight xxl:text-2xl xl:text-center lg:text-left md:text-xl sm:text-lg'>Smart Solutions for Sustainable Success</p>
                <p className='leading-relaxed xl:text-center lg:text-left sm:text-sm'>Carb0nomics empowers businesses with a comprehensive platform to calculate reduction goals. Our AI-driven recommendations ensure faster progress towards sustainability, maximizing benefits while minimizing any potential drawbacks.</p>
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
      
      {/* faq */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit w-full max-w-[800px] px-[20px] py-[40px] flex flex-col items-center justify-center gap-[10px]'>
          <Fade direction='up' triggerOnce={true}>
            <p className='text-4xl font-bold text-center leading-normal xxl:text-3xl md:text-left md:text-2xl sm:text-xl'>FAQ</p>
            {/* <p className='text-4xl font-bold xxl:text-3xl xl:text-center sm:text-2xl'>FAQ</p> */}
          </Fade>
          {faqItems.map((e, i) => (
            <div className='h-fit w-full' key={i}>
              <Fade direction='up' triggerOnce={true}>
                {FAQcomponent(e)}
              </Fade>
            </div>
          ))}
        </div>
      </div>

      {/* get started */}
      <div className='h-fit w-full flex justify-center bg-slate-50'>
        <div className='h-fit min-h-[100px] w-full max-w-[1000px] px-[20px] pb-[40px] flex flex-col items-center justify-center gap-[40px] xl:max-w-[500px]'>
          <Fade direction='up' triggerOnce={true} className='w-full'>
            <div className='h-fit w-full grid grid-cols-2 gap-[10px] bg-slate-800 px-[40px] py-[60px] rounded-[40px] overflow-hidden xl:flex xl:flex-col xl:gap-[20px] sm:px-[20px] sm:py-[40px]'>
              <div className='h-fit min-h-[300px] w-full flex flex-col justify-center xl:min-h-fit'>
                <p className='text-3xl font-bold text-white leading-tight xl:text-2xl sm:text-xl'>Start using Carb0nomics</p>
                <p className='text-slate-300 mb-[20px] sm:text-sm'>Let's achieve a carbon neutral future together.</p>
                <button onClick={() => (loginStatus.login) ? navigate('/dashboard') : navigate('/login')} className='h-[50px] w-[200px] bg-emerald-400 text-slate-800 font-medium px-[20px] rounded-full shadow-lg duration-200 hover:bg-white sm:h-[40px] sm:w-fit sm:text-sm'>Get Started</button>
              </div>
              <div className='h-[300px] w-full flex justify-end xl:h-fit xl:justify-center'>
                <div className='h-full w-fit rounded-lg overflow-hidden xl:h-fit xl:w-full'>
                  <img src={dashboard} alt="dashboard" className='h-full xl:h-fit xl:w-full' />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* footer */}
      <Footer currentRoute={currentRoute}/>
    </div>
  )
}

export default Home