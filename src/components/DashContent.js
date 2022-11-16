import React from 'react'

const DashContent = ({children}) => {
  return (
    <div className='dash'>
        <div className="dash-content-container">
          <div className="dash-content">
            {children}
          </div>
          </div>
    </div>
  )
}

export default DashContent