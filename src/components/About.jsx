import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div>About</div>
  )
}

export default About