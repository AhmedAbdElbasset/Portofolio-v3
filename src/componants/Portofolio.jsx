import { useState,useRef,useEffect } from "react"
import Elzero from '../../public/assets/Elzero.png'
import Dash from '../../public/assets/Dashboard.png'
import HardROck from '../../public/assets/HardRock.png'
import Moviex from '../../public/assets/Moviex.png'
const sliderData=[
    {
        id:1,
        title:'elzero Project',
        img:Elzero,
        link:'https://ahmedabdelbasset.github.io/Elzero/',
        skills:'html css'

    },
    {
        id:2,
        title:'elzero dashboared',
        img:Dash,
        link:' https://ahmedabdelbasset.github.io/Elzero2/',
        skills:'html css'

    },
    {
        id:3,
        title:'hard rock store',
        img:HardROck,
        link:'https://ahmedabdelbasset.github.io/Hard-Rock/',
        skills:'html css react'

    },
    {
        id:4,
        title:'moviex store',
        img:Moviex,
        link:'https://ahmedabdelbasset.github.io/Moviex/',
        skills:'html css react framer motion'

    }
]
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import './Slider.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
const Portofolio = () => {
    return (
        <div id="Portofolio" className="w-full h-[63%] sm:h-[120%] text-white overflow-auto relative mt-[20px] sm:mt-[80px] ">
            <div className="container mx-auto">
                <p className="main-head ml-[20%] sm:ml-[40%] before:w-[200px] pb-[50px]">Portofolio</p>
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
                                        <span className="absolute w-full h-[91%] sm:h-[96.2%] inset-0 bg-black opacity-[0.7] hover:opacity-0 transition-all duration-500 cursor-pointer"/>
                                        <a href={slide.link} target="_blank" className="capitalize relative top-[-50px] sm:top-[-80px] text-[8px] sm:text-[15px] left-[2%]  sm:left-[5%] m border-collapse border-spacing-1 p-1 px-4  sm:p-3 sm:px-7 bg-black text-white rounded-[3px] sm:rounded-md z-10">view Project</a>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
            </div>
        </div>
      );
}

export default Portofolio
