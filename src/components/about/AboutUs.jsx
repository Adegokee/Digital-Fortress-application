import React from 'react'
import myHand from "../../assest/AI-Shutter.gif";
import './about.css'
const AboutUs = () => {
  return (
    <div className="aboutContainer md:flex z-50 justify-center items-center w-full md:h-[608px] h-[100%]"  >
        <div className='md:w-1/2 md:h-[404px]  w-full '>
            <img className='w-[100%] h-[100%] object-cover ' src={myHand} alt="" />
        </div>
              
        <div className='md:w-1/2 w-full md:p-5 p-[20px]'>
            <h1 style={{fontWeight:'600'}} className='text-[40px]'>About Us</h1> 
            <p  class="md:text-[24px]  text-[14px] text-[rgba(177,13,21,1)]"> Digital Fortress, the leading Global Talent Development  Corporation. </p>

            <p>Digital Fortress Institute is an ICT skills and talent development brand with decades of experience in the digital technology space and partnerships with top technology brands. Our vision is to develop a workforce capable of deploying current technology and techniques to solve industrial problems for us. This is why we exist.</p>

            <p className='text-[16px] mt-20px md:mt-[69px] font-semibold text-[rgba(177,13,21,1)]'><a href="">Read More <i class="bi bi-arrow-right"></i> </a></p>
        </div>

        

    </div>
  )
}

export default AboutUs