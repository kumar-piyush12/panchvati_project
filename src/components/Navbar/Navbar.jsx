import React from 'react'
import './Navbar.css'
import { data } from '../../constants/'

const Navbar = () => (
  <div className='container'>
    <div className='navbar'>
      {data.logo.map((logo) => (
        <img src={logo.logo} id='prateek-logo' alt='logo' key={logo.logo} />
      ))}

      <div className='set'>
        <div className='phone-number'>
          <p id='phone-number'>A BITSIAN Initiative to help local businessmen of Pilani</p>
        </div>

        <div className='get-care-now'>
          <a
            href='https://forms.gle/cKhuNdMeBys4kGWB6'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button id='get-care-now'>Order Now</button>
          </a>
        </div>

        <div className='search'>
          <a
            href='https://www.linkedin.com/in/piyush-kumar-4a82ab213/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button id='search'>About Founder</button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
