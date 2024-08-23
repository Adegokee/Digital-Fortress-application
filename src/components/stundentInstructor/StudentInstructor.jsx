import React from 'react'
import './studentInstruction.css'
import myImage from "../../assest/imagevideo.png"

const StudentInstructor = () => {
  return (
    <div className='student_instructor_container'>
        <main className='mylist'>
            <span className='font-bold cursor-pointer teacher'>Techer</span>
            <span className='font-bold cursor-pointer student'>Student</span>
        </main>
        <div className='student_instructor_container_video'>
            
        </div>
       <a href="" className='mt-[10px] bg-[rgba(177,13,21,1)] md:w-[368px] text-center py-[8px] rounded-md text-white px-[20px] text-[15px] '>Get in touch</a>

    </div>
  )
}

export default StudentInstructor