import Header from "./Header";
import { motion } from "framer-motion";
import Insta from '../../public/assets/icons8-instagram-60.png'
import Git from '../../public/assets/icons8-github-60.png'
import Linked from '../../public/assets/icons8-linkedin-60.png'
import Face from '../../public/assets/icons8-facebook-60.png'
import BackGround from '../../public/assets/landing.jpg'

const Landing = () => {
  return (
    <div id="Landing" className={`" bg-landing relative top-0 w-full h-full md:w-full md:h-full bg-cover text-white mb-[80px]"`}>
      <div className="w-full h-[110%] md:w-full md:h-full absolute bg-black opacity-[0.9] sm:opacity-[0.5] z-1" />
      <div className="relative z-[5] top-[30%] px-[5%] capitalize font-light   md:text-[50px] tracking-[2px] ">
        <p>ahmed </p>
        <p className="font-black relative text-[60px] top-[-15px] max-w-max">
          abdelbasset
        </p>
        <p className="font-thin tracking-[7px] text-[20px] relative top-[-20px] max-w-max">
          frontend devaloper
        </p>
      </div>
      <div className="relative flex flex-row top-[270px] md:top-[250px] left-[5%] w-full max-w-max gap-[20px] ">
        <a href="#Resmue" className=" overflow-hidden relative after:duration-300 after:absolute after:w-full after:h-full after:top-0 after:left-[-100px] hover:after:left-0 after:bg-main transition-all duration-300 border-[1px] rounded-lg px-5 py-1 text-[20px] hover:text-white  ">
          <p className="relative z-20">Resmue</p>
        </a >
        <a href="#Portofolio" className="overflow-hidden relative after:duration-300 after:absolute after:w-full after:h-full after:top-0 after:left-[-150px] hover:after:left-0 after:bg-main transition-all duration-300  rounded-lg px-5 py-1 text-[20px] hover:text-white  ">
          <p className="relative z-[1]">Portofolio</p>
        </a >
      </div>
      <motion.div animate={{opacity:1,scale:[1,1.1,1]}} transition={{type:"tween",duration:0.5}} className="flex mx-auto z-30 max-w-max relative top-[52%] md:top-[45%] gap-5 transition-all duration-300 hover:bg-white bg-black px-5 md:px-7 py-2 rounded-md md:rounded-2xl">
        <a href="https://www.facebook.com/profile.php?id=100008099791606&locale=ar_AR" className=" w-[30px] md:w-[35px] transition-all duration-500 hover:scale-[1.2] hover:drop-shadow-2xl " ><img src={Face} alt="" /></a>
        <a href="https://www.instagram.com/" className=" w-[30px] md:w-[35px] transition-all duration-500 hover:scale-[1.2] hover:shadow-2xl"><img src={Insta} alt="" /></a>
        <a href="https://github.com/AhmedAbdElbasset" className=" w-[30px] md:w-[35px] transition-all duration-500 hover:scale-[1.2] hover:shadow-2xl"><img src={Git} alt="" /></a>
        <a href="https://www.linkedin.com/feed/" className=" w-[30px] md:w-[35px] transition-all duration-500 hover:scale-[1.2] hover:shadow-2xl"><img src={Linked} alt="" /></a>
      </motion.div>
    </div>
  );
};

export default Landing;
