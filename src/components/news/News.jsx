import React from 'react'

const News = () => {
  return (
    <div className='w-full bg-[#b10d15] h-[200px] md:h-[50vh] md:flex justify-center p-[50px] md:p-[100px]'>
            <div className='text-center  md:w-[650px]'>
                <h1 className='text-white text-[16px] md:text-[30px] font-semibold'>Join Our NewsLetter</h1>
                <p className='text-white md:mb-[8px]'>Subscribe to Digital Fortress Newsletter and never miss any update</p>
                <main>
                  <form action="" className='flex justify-center' >
                 <div className='md:w-[450px] w-[350px] bg-white relative h-[45px] rounded-md'>
                 <input type="text" placeholder='Enter Email Address' className='absolute left-0 w-full h-full rounded-md outline-none' />
                 </div>
                      <input type="Submit"  className='bg-[#ee3c48] text-white md:ml-[10px] md:w-[100px] w-[70px] rounded-md' />
                  </form>
                </main>
            </div>
    </div>
  )
}

export default News