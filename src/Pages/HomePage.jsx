import Landing from '../componants/Landing'
import Header from '../componants/Header'
import About from '../componants/About'
import Resmue from '../componants/Resmue'
import Portofolio from '../componants/Portofolio'
const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Landing/>
      <About/>
      <Resmue/>
      <div className="w-full h-[80px] bg-main text-white flex justify-around mt-[80px] ">
        <div className="relative top-[15px] sm:top-[5px]">
          <p className='text-[16px] sm:text-[23px] font-bold capitalize'>want work to with me</p>
          <span className='capitalize text-[10px] font-thin sm:tracking-[1px] sm:text-[16px]'>always feel free to contact & hire me</span>
        </div>
        <a href="https://www.linkedin.com/feed/" target='_blank ' className='relative my-auto bg-white p-2 sm:p-3 text-main capitalize rounded-[5px] font-medium transition-all duration-500 hover:drop-shadow-lg hover:scale-[1.1] '>hire me</a>
      </div>
      <Portofolio/>
    </div>
  )
}

export default HomePage
