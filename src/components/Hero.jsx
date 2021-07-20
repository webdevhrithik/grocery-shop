import React from 'react';

import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';

const Hero = () => {
  return (
    <div className='container-fluid mt-5'>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active carimgs'>
            <img src={slide1} className='d-block w-100' alt='slide1' />
          </div>
          <div className='carousel-item carimgs'>
            <img src={slide2} className='d-block w-100' alt='slide2' />
          </div>
          <div className='carousel-item carimgs'>
            <img src={slide3} className='d-block w-100' alt='slide3' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
