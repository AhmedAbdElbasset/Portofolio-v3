import { useState,useRef,useEffect } from "react"
import Elzero from '../../public/assets/Elzero.png'
import Dash from '../../public/assets/Dashboard.png'
import HardROck from '../../public/assets/HardRock.png'
import Moviex from '../../public/assets/Moviex.png'
import Por from '../../public/assets/Portofolio.png'
const sliderData=[
    {
        id:1,
        title:'elzero Project',
        img:Elzero,
        link:'https://ahmedabdelbasset.github.io/Elzero/',
        code:'https://ahmedabdelbasset.github.io/Elzero',
        used:'html css'

    },
    {
        id:2,
        title:'elzero dashboared',
        img:Dash,
        link:' https://ahmedabdelbasset.github.io/Elzero2',
        code:' https://ahmedabdelbasset.github.io/Elzero2/',
        used:'html css'

    },
    {
        id:3,
        title:'hard rock store',
        img:HardROck,
        link:'https://ahmedabdelbasset.github.io/Hard-Rock/',
        code:'https://ahmedabdelbasset.github.io/Hard-Rock',
        used:'html css react'

    },
    {
        id:4,
        title:'moviex store',
        img:Moviex,
        link:'https://ahmedabdelbasset.github.io/Moviex/',
        code:'https://ahmedabdelbasset.github.io/Moviex',
        used:'html css react framer motion'

    },
    {
        id:5,
        title:'Portofolio',
        img:Por,
        link:'https://ahmedabdelbasset.github.io/Portofolio/',
        code:'https://ahmedabdelbasset.github.io/Portofolio',
        used:'html css react '

    }
]
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import './Slider.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion,useScroll,useTransform } from "framer-motion"
// Import Swiper styles
const Portofolio = () => {
    const{scrollY}=useScroll()
    const PX = useTransform(scrollY,[1550,1800,2190,2200,2580],[1200,0,0,1200,0])
    const IX = useTransform(scrollY,[0,600],[600,0])
    const sale = useTransform(scrollY,[0,1500,1600],[0,2,1])
    return (
        <div id="Portofolio" className=" overflow-x-hidden w-full h-[154%] sm:h-[214%] md:h-[120%] text-white overflow-auto relative mt-[20px] sm:mt-[80px] ">
            <div className="container mx-auto">
                <motion.p style={{scale:sale}} className="main-head ml-[20%] sm:ml-[40%] before:w-[200px] pb-[50px]">Portofolio</motion.p>
                    <motion.div style={{x:PX}} className=" hidden md:flex">
                        <Swiper
                            centeredSlides={true}
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Autoplay,Pagination, Navigation]}
                            className="mySwiper"
                            >
                                {sliderData.map(slide=>(
                                    <SwiperSlide  key={slide.id} >
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img src={slide.img} alt="" />
                                            <span className="absolute w-full h-[91%] sm:h-[95%] inset-0 bg-black opacity-[0.7] hover:opacity-0 transition-all duration-500 cursor-pointer"/>
                                            <a href={slide.link} target="_blank" className="capitalize relative top-[-50px] sm:top-[-80px] text-[8px] sm:text-[15px] left-[2%]  sm:left-[5%] m border-collapse border-spacing-1 p-1 px-4  sm:p-3 sm:px-7 bg-black text-white rounded-[3px] sm:rounded-md z-10">view Project</a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </motion.div>
                    <motion.div style={{x:PX}} className="md:hidden grid gap-8 grid-cols-1 grid-rows-1 w-full h-full container " >

                        {sliderData.map(slide=>(<div className="relative" key={slide.id} >
                            <img src={slide.img} alt={slide.title} className="relative z-0 w-[90%] mx-auto" />
                            <span className=" inline-block ml-[5%] w-[90%] h-full absolute z-[1] top-0 bg-black opacity-[0.7] scale-[1] transition-all duration-500" />
                            <div className="z-10 absolute bottom-[10%] left-[10%] flex capitalize gap-4 ">
                                <a href={slide.link} className=" hover:text-main transition-all duration-500 border-[1px] px-[5px] text-[15px] py-[5px] rounded-md hover:scale-[1.1] hover:border-main " >view project</a>
                                <a href={slide.code} className=" hover:text-main transition-all duration-500 border-[1px] px-[5px] text-[15px] py-[5px] rounded-md hover:scale-[1.1] hover:border-main " >code</a>
                            </div>
                        </div>))}
                    </motion.div>
            </div>
        </div>
      );
}

export default Portofolio
