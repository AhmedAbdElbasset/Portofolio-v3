import React from 'react'
import Me from '../../public/assets/Me.jpg'
import { motion,useScroll, useTransform } from 'framer-motion'
const About = () => {
  const{scrollY}=useScroll()
  const PX = useTransform(scrollY,[0,600],[-600,0])
  const IX = useTransform(scrollY,[0,600],[600,0])
  const PO = useTransform(scrollY,[0,500,600],[0,0.5,1])
  return (
    <div id='About' className=' overflow-hidden relative flex flex-wrap pb-[80px] mt-[20px] max-w-max'>
      <div className='container'>
      <div className=' relative flex flex-col-reverse sm:flex-row max-w-max '>
          <motion.div style={{x:PX,opacity:PO}} className='text-white relative pl-[5%] sm:left-[5%]'>
              <div className='mx-auto w-[40%] sm:w-[30%] '>
                  <p className='text-[50px] font-bold before:absolute before:h-[2px] before:top-[65px] before:w-[120px] before:inline-block before:bg-main max-w-max '>About</p>
                  <span className='relative left-[-50px] sm:left-[-30px] '>ahmedabdelbaset393ee@gmail.com</span>
              </div>
                  <p className=' w-[80%] sm:w-[60%] mt-[60px] max-w-max'>
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
          </motion.div>
        <motion.div style={{x:IX,opacity:PO}} className='w-full sm:w-[600px] px-[40px] max-w-max'>
          <img src={Me} alt=""  className='w-full h-full rounded-md'/>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default About
