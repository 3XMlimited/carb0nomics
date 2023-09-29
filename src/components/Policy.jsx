import React, { useEffect } from 'react'

const Policy = ({ setCurrentRoute }) => {

  useEffect(() => {
    setCurrentRoute('policy')
  }, [])

  return (
    <div>Policy</div>
  )
}

export default Policy