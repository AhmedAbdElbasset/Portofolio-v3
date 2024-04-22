import React from 'react'
const About = () => {
  return (
    <div id='About' className='container flex flex-wrap pb-[80px]'>
      <div className='relative flex flex-col-reverse sm:flex-row '>
          <div className='text-white relative left-[5%]'>
              <div className='mx-auto w-[40%] sm:w-[30%] '>
                  <p className='text-[50px] font-bold before:absolute before:h-[2px] before:top-[65px] before:w-[120px] before:inline-block before:bg-main '>About</p>
                  <span className='relative left-[-50px] sm:left-[-30px] '>ahmedabdelbaset393ee@gmail.com</span>
              </div>
                  <p className=' w-[80%] sm:w-[60%] mt-[60px]'>
              I code, therefore I am
              <br />
              ''
              <br />
              I am a young enthusiast who is keen on IT and anything about it since
              my first steps to High School. During the past few years, I gained
              lots of experience in this field due to the strong desire of becoming
              an expert.
              ''
              <br />
              <br />
              “For me, web development is more than coding. It's a canvas with a
              blank page and I am the artist to paint it with colors of coding
              </p>
          </div>
        <div className='w-full sm:w-[600px] px-[40px]'>
          <img src="../../public/assets/Me.jpg" alt=""  className='w-full h-full rounded-md'/>
        </div>
      </div>
    </div>
  )
}

export default About
