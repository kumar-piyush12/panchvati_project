import React from 'react'
import './Footer.css'
import { data } from '../../constants/'

const Footer = () => (
  <div className='footer_container'>
    <div className='footer'>
      {data.logo.map((logo) => (
        <img src={logo.logo} id='logo' alt='Logo' key={logo.logo} />
      ))}
      <div className='textset'>
        <h1 id='bitsian_initiative'>
          A BITSIAN Initiative to help local businessmen of Pilani
        </h1>
        <h2 id='batch'>Piyush Kumar (Batch of 21')</h2>
        <ul className='social_links'>
          <li>
            <a
              href='https://www.linkedin.com/in/piyush-kumar-4a82ab213/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/_piyush1612/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://wa.me/7319948704'
              target='_blank'
              rel='noopener noreferrer'
            >
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
