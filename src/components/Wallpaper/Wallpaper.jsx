import React from 'react'
import './Wallpaper.css'
import { data } from '../../constants/'

const Wallpaper = () => (
  <div className='image-container'>
    {data.wallpaper.map((wallpaper) => (
      <img
        src={wallpaper.wallpaper}
        className='full-width-image'
        alt='wallpaper'
        key={wallpaper.wallpaper}
      />
    ))}
    {/* Add your overlay text here */}
    <div className='overlay-text'>Since local businessmen of Pilani cannot afford to list their products online, I have taken an initiative to increase their customer-base.</div>
  </div>
)

export default Wallpaper
