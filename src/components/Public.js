import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../partials/Navbar'
import Copyright from '../partials/Copyright'

const Public = () => {
  const content =(
    <div className='public'>
      <Navbar />
      <div className="hero">
        <div className="h-container container">
          <div className="h-left">
            <div className='h-content'>
              <h2>Welcome to Dan D. repairs !</h2>
              <p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
              <address>
                <div>Dan D. Repairs</div>
                <div>555 Foo Drive</div>
                <div>Foo City, CA 12345</div>
                <div><a href="tel:+15555555555">(555) 555-5555</a></div>
              </address>
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