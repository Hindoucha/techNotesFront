import React from 'react'
import { Link } from 'react-router-dom'

const DashSidebar = () => {
  return (
    <div className="welcome-sidebar">
        <div className="sidebar-container">
          <Link to='/dash/notes'>Notes list</Link><br/>
          <Link to='/dash/users'>Users settings</Link><br/>
        </div>
    </div>
  )
}

export default DashSidebar