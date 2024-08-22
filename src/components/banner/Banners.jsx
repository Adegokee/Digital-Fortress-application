'use client';
import React from 'react';
import './banner.css'
import Img from '../../assest/Hero.png';

const Banners = () => {
  return (
  

    <div className="myBanner w-full md:h-[100vh] h-[20vh] ">
      <img src={Img} alt="" className='w-[100%] h-[100%] object-cover'  />
    </div>


  )
}

export default Banners;
