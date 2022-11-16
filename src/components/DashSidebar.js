import React from 'react'

const DashSidebar = ({children}) => {
  return (
    <div className="sidebar">
        <div className="sidebar-container">
          {children}
        </div>
    </div>
  )
}

export default DashSidebar