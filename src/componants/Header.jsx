import { useRef,useEffect } from "react"
import { NavLink } from "react-router-dom"
const Header = () => {

  return (
    <header className='transition-all overflow-x-hidden duration-500 relative top-[10px] w-full sm:w-full  z-50 text-white'>
      
    <div className='container'>
        <ul className='mx-auto w-[80%] sm:w-[50%] flex flex-row justify-between items-center text-[15px] sm:text-[20px] sm:font-semibold '>
            <li><a herf="#" className=" transition-all">Home</a></li>
            <li><a  href="#About" className="transition-all">About</a></li>
            <li><a href="#Resmue" className="transition-all">Resmue</a></li>
            <li><a href="#Portofolio" className="transition-all">Portofolio</a></li>
        </ul>
    </div>
    </header>
  )
}

export default Header
