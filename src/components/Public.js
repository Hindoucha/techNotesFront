import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../partials/Navbar'
import Copyright from '../partials/Copyright'

const Public = () => {
  const content =(
    <div>
      <Navbar />
      <div className="hero">
        <div className="h-container container">
          <div className="h-left">
            <div className='h-content'>
              <h2>Welcome to Dan D. repairs !</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, mollitia. Aperiam quas temporibus reprehenderit doloribus, odio repellat, sed, minima illum dolorem nisi tempore dignissimos! Dolor praesentium adipisci consequuntur laudantium magnam.</p>
              <div>
                <div>Dan D. rapairs.</div>
                <div>Dan california 16 EST.</div>
                <div>(555) 5555 555.</div>
              </div>
              <Link id="link" to='/login'><div className='btn'>login</div></Link>
            </div>
          </div>
          <div className="h-right">
            <img id="blob" src="/img/blob-haikei.svg" alt="" />
            <img id="robot" src="/img/android-animate.svg" alt="" />
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  )
  return content
}

export default Public