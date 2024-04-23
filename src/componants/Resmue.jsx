import React from 'react'
import HTML from '../../public/assets/icons8-html-100.png'
import Css from '../../public/assets/icons8-css-100.png'
import Js from '../../public/assets/icons8-js-100.png'
import Tail from '../../public/assets/icons8-tailwind-css-96.png'
import react from '../../public/assets/icons8-react-60.png'
const Resmue = () => {
  return (
    <div id='Resmue' className=' bg-resume w-full h-[110%] md:w-full md:h-full bg-cover bg-no-repeat after:absolute after:w-full after:h-[120%] after:md:w-full md:after:h-full after:bg-black after:opacity-[0.9] after:z-0 '>
        <div className='pt-[80px] absolute w-full z-10'>
            <div className='container'>
                <div className=' flex flex-col  sm:justify-between lg:justify-around sm:flex-row w-full h-full items-center'>
                    <div className=' w-full sm:w-[30%] h-full sm:h-[30%] flex flex-col text-white'>
                        <p className='main-p max-w-max'>Software skills</p>
                        <span className='main'/>
                        <div className=' relative left-[10%]  mt-[20px] max-w-max'>
                            <div className='flex mt-[10px]'>
                                <img src={HTML} alt="" className='small'/>
                                <p className='text-[15px] font-normal relative top-[10px] left-[5%] after:w-[160px] after:relative after:top-[-4px] after:left-[5%] after:h-[2px] after:inline-block after:bg-white '>HTML</p>
                                <span className='before:w-[10px] before:h-[10px] before:rounded-[50%] before:flex before:bg-white before:relative before:top-[36%] after:flex after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-[50%] after:relative after:top-[3px] after:left-[-5px] after:border-[1px] border-white' />
                            </div>
                            <div className='flex mt-[20px]'>
                                <img src={Css}    alt="" className='small' />
                                <p className='text-[15px] font-normal relative top-[10px] left-[5%] after:w-[170px] after:relative after:top-[-4px] after:left-[5%] after:h-[2px] after:inline-block after:bg-white '>Css</p>
                                <span className='before:w-[10px] before:h-[10px] before:rounded-[50%] before:flex before:bg-white before:relative before:top-[36%] after:flex after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-[50%] after:relative after:top-[3px] after:left-[-5px] after:border-[1px] border-white' />
                            </div>
                            <div className='flex mt-[20px]'>
                                <img src={Js}    lt="" className='small' />
                                <p className='text-[15px] font-normal relative top-[10px] left-[5%] after:w-[180px] after:relative after:top-[-4px] after:left-[5%] after:h-[2px] after:inline-block after:bg-white '>Js</p>
                                <span className='before:w-[10px] before:h-[10px] before:rounded-[50%] before:flex before:bg-white before:relative before:top-[36%] after:flex after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-[50%] after:relative after:top-[3px] after:left-[-5px] after:border-[1px] border-white' />
                            </div>
                            <div className='flex mt-[20px]'>
                                <img src={react}     alt="" className='small'/>
                                <p className='text-[15px] font-normal relative top-[10px] left-[5%] after:w-[160px] after:relative after:top-[-4px] after:left-[5%] after:h-[2px] after:inline-block after:bg-white '>React</p>
                                <span className='before:w-[10px] before:h-[10px] before:rounded-[50%] before:flex before:bg-white before:relative before:top-[36%] after:flex after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-[50%] after:relative after:top-[3px] after:left-[-5px] after:border-[1px] border-white' />
                            </div>
                            <div className='flex mt-[20px]'>
                                <img src={Tail}   className='small' />
                                <p className='text-[15px] font-normal relative top-[10px] left-[5%] after:w-[150px] after:relative after:top-[-4px] after:left-[5%] after:h-[2px] after:inline-block after:bg-white '>Tailwind</p>
                                <span className='before:w-[10px] before:h-[10px] before:rounded-[50%] before:flex before:bg-white before:relative before:left-[-200%] before:top-[36%] after:flex after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-[50%] after:relative after:top-[3px] after:left-[-225%] after:border-[1px] border-white' />
                            </div>
                        </div>
                    </div>
                    <div className='text-white relative left-[-70px] sm:left-0 py-[50px] h-[120%] sm:py-0  '>
                        <div className='pb-[30px]' >
                            <p className='main-p '>languages</p>
                            <span className='main w-[130px]'/>
                            <div className='mt-[20px]  ml-[20px] left-[-5px] relative x'>
                            <p className='ml-[10px] text-[25px] inline-block'>Arabic</p>
                            <p className='ml-[20px]  text-[25px] inline-block'>English</p>
                            </div>
                            
                        </div>
                        <div className='pb-[30px]'>
                            <p className='main-p'>experience</p>
                            <span className='main w-[130px]'/>
                            <p className='capitalize relative  text-white ml-[35px] mt-[15px] text-[25px]'>fresh</p>
                        </div>
                        <div className='pb-[30px]' >
                            <p className='main-p'>education</p>
                            <span className='main w-[125px]'/>
                            <p className='text-white ml-[25px] mt-[15px] text-[25px]'>Faculty of Science</p>
                            <span className='text-white text-[15px] font-thin ml-[25px] tracking-[1px] capitalize'>helwan university</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resmue
