import React, { useEffect } from 'react'

const Contact = ({ setCurrentRoute }) => {
 
  useEffect(() => {
    setCurrentRoute('contact')
  }, [])

  return (
    <div>Contact</div>
  )
}

export default Contact