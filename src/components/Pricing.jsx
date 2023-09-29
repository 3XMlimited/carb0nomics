import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Pricing = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('pricing')
  }, [])

  // useEffect(() => {
  //   if (loginStatus.level !== 'FREE') {
  //     navigate('/dashboard')
  //   }
  // }, [loginStatus.level])

  return (
    <div>Pricing</div>
  )
}

export default Pricing