import React from 'react'
import './style.css'

const Loading = () => {
  return (
    <div className='loadingAnim'>
      <div className="loading">
        <div className="circle cyan"></div>
        <div className="circle magenta"></div>
        <div className="circle yellow"></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Loading