import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../partials/Navbar'
const Login = () => {
  return (
    <div className='login'>
      <Navbar/>
      <div className="l-content">
        <div className="card">
          <div className='card-title'>Login</div>
          <div className="inputs">
            <label htmlFor="username">username</label><br/>
            <input type="text" name="username" required/><br/>
            <label htmlFor="password">password</label><br/>
            <input type="password" name="password" required/><br/>
            <Link id="link" to="/dash"><div className="btn">login</div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login