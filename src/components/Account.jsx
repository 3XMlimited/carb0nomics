import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = ({ setCurrentRoute, loginStatus, setLoginStatus }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setCurrentRoute('account')
  }, [])

  useEffect(() => {
    if (loginStatus.login === false) {
      navigate('/')
    }
  }, [loginStatus.login])

  return (
    <div>account</div>
  )
}

export default Account