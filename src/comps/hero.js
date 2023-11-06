import { motion } from 'framer-motion';
import heroImg from '../images/heroImg.webp';

const Hero = () => {
  const isMobile = window.innerWidth <= 768; 

  return (
    <>
      <div className="px-4 mt-24 md:px-8 lg:px-16 text-center md:text-left py-10 flex flex-col md:flex-row text-[#121212]">
        <div className="w-full md:w-[70%] flex items-center md:items-start flex-col font-Outfit">
          <motion.p 
            initial={{ y: 44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-4xl lg:text-6xl lg:leading-[80px]"
          >
            Powering Africa's digital transformation with cloud solutions
          </motion.p>
          <motion.p
            initial={{ y: 44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-2xl md:w-[80%] font-normal mt-3 md:leading-[30px]"
          >
            Empower Your Business in Africa with Cloud Innovation.
          </motion.p>
          <motion.button 
            initial={{ y: 44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay:1 }} // Conditionally set the delay
            className="text-white px-9 py-3 text-xl w-[231px] mt-8 rounded-[30px] bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8]"
          >
            Get started today
          </motion.button>
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 1.8 : 1 }} // Conditionally set the delay
            src={heroImg} className="md:absolute right-0 w-[120%] mt-5 md:mt-0 lg:mt-5 md:w-[60%] lg:w-[50%]" alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
