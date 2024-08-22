import React,{useEffect, useState} from 'react';
import './course.css'
import { myImage } from '../CourseImage';
const Courses = () => {
  return (
    <div className='courseContainer mt-[50px] md:mt-[100px]'>
        <main className="w-full courses">
            <h1 className='text-center md:text-[42px] font-semibold'>Courses Offered</h1>
            <p className='text-center font-semibold text-[16px] text-[rgba(177,13,21,1)]'>What we delivered to our Clients</p>
        </main>

        <div className='flex-wrap justify-center cardContainer md:flex'>
    {myImage.map((x, index) => (
  //     <div key={index} className="cardImage m-[10px] relative overflow-hidden group">
  //     <div className="absolute inset-0 transition-opacity duration-300 bg-gray-800 opacity-0 group-hover:opacity-30"></div>
  //     <img src={x.img} alt="" className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
  // </div>
  //      <div key={index} className="cardImage m-[10px] relative overflow-hidden  group">
  //      <div className="absolute inset-0 transition-all transition-opacity duration-300 ease-in-out bg-gray-800 bg-opacity-0 group-hover:bg-opacity-30"></div>
  //      <img src={x.img} alt="" className="relative z-10 transition-transform duration-300 0 group-hover:scale-110" />
       
  //  </div>
   <div key={index} className=" cardImage m-[10px] relative  overflow-hidden group">
   <img src={x.img}  alt="myImage" class="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:opacity-120 group-hover:grayscale" />
   <div className="absolute inset-0 transition-all duration-300 ease-in-out bg-gray-800 bg-opacity-0 group-hover:bg-opacity-10"></div>
 </div>
 
   
    ))}
</div>
    </div>
  )
}

export default Courses