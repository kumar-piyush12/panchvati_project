import React, { useState } from 'react'
import './Items.css'
import { data } from '../../constants/'

const Items = () => {
  // State to track the current image index for each plant
  const [currentIndex, setCurrentIndex] = useState({
    tulsi: 0,
    escobaria: 0,
    kalanchoe: 0,
    laxmi_kamal: 5,
    snake: 0,
    money: 3,
    bunnyears: 3,
    stonecrop: 1,
    bunnyears_yellow: 0,
    supplera: 0,
    guldavari: 2,
  })

  // Function to handle next button click
  const handleNext = (plant) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      [plant]: (prevState[plant] + 1) % data.grids[plant].length, // Go to next image, loop back to first
    }))
  }

  // Function to handle previous button click
  const handlePrev = (plant) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      [plant]:
        (prevState[plant] - 1 + data.grids[plant].length) %
        data.grids[plant].length, // Go to previous image, loop back to last
    }))
  }

  return (
    <div className='grid'>
      {/* Tulsi section */}
      <div className='horizontal'>
        <img src={data.grids.tulsi[currentIndex.tulsi]} alt='tulsi' />
        <div className='button-container'>
          <button onClick={() => handlePrev('tulsi')}>&#8592;</button>
          <button onClick={() => handleNext('tulsi')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Tulsi
        </a>
        <div className='description'>INR 139</div>
      </div>

      {/* laxmi_kamal section */}
      <div className='horizontal'>
        <img
          src={data.grids.laxmi_kamal[currentIndex.laxmi_kamal]}
          alt='laxmi_kamal'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('laxmi_kamal')}>&#8592;</button>
          <button onClick={() => handleNext('laxmi_kamal')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Laxmi Kamal
        </a>
        <div className='description'>INR 139</div>
      </div>

      {/* supplera section */}
      <div className='horizontal'>
        <img src={data.grids.supplera[currentIndex.supplera]} alt='supplera' />
        <div className='button-container'>
          <button onClick={() => handlePrev('supplera')}>&#8592;</button>
          <button onClick={() => handleNext('supplera')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Supplera
        </a>
        <div className='description'>INR 299</div>
      </div>
      {/* escobaria section */}

      <div className='horizontal'>
        <img
          src={data.grids.escobaria[currentIndex.escobaria]}
          alt='escobaria'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('escobaria')}>&#8592;</button>
          <button onClick={() => handleNext('escobaria')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Escobaria
        </a>
        <div className='description'>INR 139</div>
      </div>

      {/* bunnyears_yellow section */}
      <div className='horizontal'>
        <img
          src={data.grids.bunnyears_yellow[currentIndex.bunnyears_yellow]}
          alt='bunnyears_yellow'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('bunnyears_yellow')}>
            &#8592;
          </button>
          <button onClick={() => handleNext('bunnyears_yellow')}>
            &#8594;
          </button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Bunny Ears-Yellow
        </a>
        <div className='description'>INR 149</div>
      </div>

      {/* stonecrop section */}
      <div className='horizontal'>
        <img
          src={data.grids.stonecrop[currentIndex.stonecrop]}
          alt='stonecrop'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('stonecrop')}>&#8592;</button>
          <button onClick={() => handleNext('stonecrop')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Stone-crop
        </a>
        <div className='description'>INR 139</div>
      </div>

      {/* snake Plant section */}
      <div className='horizontal'>
        <img src={data.grids.snake[currentIndex.snake]} alt='snake Plant' />
        <div className='button-container'>
          <button onClick={() => handlePrev('snake')}>&#8592;</button>
          <button onClick={() => handleNext('snake')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Snake Plant
        </a>
        <div className='description'>INR 149</div>
      </div>

      {/* Kalanchoe section */}
      <div className='horizontal'>
        <img
          src={data.grids.kalanchoe[currentIndex.kalanchoe]}
          alt='kalanchoe'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('kalanchoe')}>&#8592;</button>
          <button onClick={() => handleNext('kalanchoe')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Kalanchoe
        </a>
        <div className='description'>INR 249</div>
      </div>

      {/* bunnyears section */}
      <div className='horizontal'>
        <img
          src={data.grids.bunnyears[currentIndex.bunnyears]}
          alt='bunnyears'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('bunnyears')}>&#8592;</button>
          <button onClick={() => handleNext('bunnyears')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Bunny Ears-White
        </a>
        <div className='description'>INR 149</div>
      </div>

      {/* money section */}
      <div className='horizontal'>
        <img src={data.grids.money[currentIndex.money]} alt='money' />
        <div className='button-container'>
          <button onClick={() => handlePrev('money')}>&#8592;</button>
          <button onClick={() => handleNext('money')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Money Plant
        </a>
        <div className='description'>INR 149</div>
      </div>

      {/* guldavari section */}
      <div className='horizontal'>
        <img
          src={data.grids.guldavari[currentIndex.guldavari]}
          alt='guldavari'
        />
        <div className='button-container'>
          <button onClick={() => handlePrev('guldavari')}>&#8592;</button>
          <button onClick={() => handleNext('guldavari')}>&#8594;</button>
        </div>
        <a
          href='https://forms.gle/cKhuNdMeBys4kGWB6'
          target='_blank'
          rel='noopener noreferrer'
          className='head'
        >
          Guldavari
        </a>
        <div className='description'>INR 149</div>
      </div>
    </div>
  )
}

export default Items
