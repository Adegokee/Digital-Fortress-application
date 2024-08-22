import React, { useState, useEffect } from 'react';
import './port.css'
import { ports } from '../../CourseImage';

const CounterComponent = ({ start, end }) => {
    const [number, setNumber] = useState(start);
  
    useEffect(() => {
      if (number === end) return; // Stop if the counter has reached the end
  
      const timer = setInterval(() => {
        setNumber(prevNumber => {
          if (start < end) {
            return prevNumber + 1;
          } else {
            return prevNumber - 1;
          }
        });
      }, 10); // Update every second
  
      return () => clearInterval(timer); // Clean up the interval on unmount or when changing
  
    }, [number, end, start]);
  
    return (
      <h2 className='text-[32px] font-semibold'>{number}</h2>
    );
  };
const Portfolio = () => {


  return (
   
    <div className='md:h-[288px] md:mt-0 mt-[70px]  w-full flex justify-center flex-wrap items-center md:pl-0'>
    {ports.map((x, index) => {
      const { name, img, number } = x;
      const endValue = 100; // Specify the endpoint you want the counter to reach
      
      return (
        <div key={index} className='flex items-center flex-col w-[328px] h-[160px] mr-[15px] port pt-5'>
          <div className='w-[30px]'>
            <img src={img} alt="" className='w-[100%]' />
          </div>
          <CounterComponent start={endValue} end={number} />
          <p>{name}</p>
        </div>
      );
    })}
  </div>
  )
}

export default Portfolio