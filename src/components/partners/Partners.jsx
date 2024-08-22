import React, {useState} from 'react'
import './partners.css'
import { partnersImg } from '../../CourseImage'


const Partners = () => {
    const[active, setActive] = useState('mycolor')
  return (
    <div className="w-full md:pt-[80px] h-[489px] md:mt-[30px] mt-[60px] partnersContainers bg-[rgb(255,250,250)]">
        <main className='justify-center md:flex mt-7 mb-[30px] hidden'>
        <h1 onClick={() => setActive(!active)} className={`${active ? 'mycolor' : ''} text-[20px] md:text-[40px] leading-[48.76px] text-center`}>Partners</h1>
        <h1 onClick={() => setActive(!active)} className={`${active ? '' : 'mycolor'} text-[20px] md:text-[40px] leading-[48.76px] text-center md:ml-[30px]`}>Clients</h1>
        </main>

       <div className='flex-wrap justify-center  md:flex w-[100%] px-[33%] md:px-0'>
       {partnersImg.map((x) => (
            <div className='md:w-[206px] w-[100%] h-[47px] mb-[5px] md:m-[16px]'>
               <img src={x.img} alt=""  className='md:w-[100%] w-[100px] h-[100%] object-contain'/> 
            </div>
        ))}
    
       </div> 
   
    </div>
  )
}

export default Partners