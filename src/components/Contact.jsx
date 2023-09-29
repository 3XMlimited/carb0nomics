import React, { useState, useEffect } from 'react'

import contact from '../assets/contact.png'
import Footer from './Footer'

const Contact = ({ setCurrentRoute }) => {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [finalBody, setFinalBody] = useState('')

  useEffect(() => {
    setCurrentRoute('contact')
  }, [])

  useEffect(() => {
    const temp = body.replaceAll(' ', '%20')
    setFinalBody(temp.replaceAll(/\n/g, '%0A'));
  }, [body])

  return (
    <>
      <div className='h-fit min-h-[calc(100%-60px)] flex items-center justify-center'>
        <div className='h-fit w-full max-w-[1024px] grid grid-cols-2 md:grid-cols-1'>
          <div className='h-full w-full p-[20px] flex flex-col justify-center gap-[10px]'>
              <p className='text-black text-3xl font-bold text-left leading-normal sm:text-xl'>Contact Us</p>
              <p className='text-black text-base font-normal text-left leading-normal sm:text-sm'>Get in touch and let us know how we can help by filling both of the fields below.</p>
              <input type="text" placeholder='Subject of your mail' value={subject} onChange={e => setSubject(e.target.value)} className='h-[50px] w-full bg-[#EEE] rounded-lg px-[10px] sm:text-sm' />
              <textarea name="" id="" cols="30" rows="5" placeholder='Your message for us' value={body} onChange={e => setBody(e.target.value)} className='min-h-[45px] max-h-[200px] w-full bg-[#EEE] rounded-lg p-[10px] sm:text-sm'></textarea>
              <a href={`mailto:contact@3xm.asia?subject=${subject}&body=${finalBody}`} className={`${(subject === '' || body === '') ? 'pointer-events-none bg-[#AAA]' : 'bg-blue-600'} h-[50px] w-full max-w-[250px] py-[5px] px-[10px] rounded-lg text-white text-base flex items-center justify-center duration-300 md:max-w-full`}>Send Email</a>
          </div>
          <div className='h-full w-full flex items-center justify-center md:hidden'>
              <img src={contact} alt="contact" className='w-full'/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact