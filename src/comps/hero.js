import React, { useRef, useLayoutEffect } from 'react';
import { Power3 } from 'gsap';
import gsap from 'gsap/all';
import { motion } from 'framer-motion';

import heroImg from '../images/heroImg.svg';

const Hero = () => {
  const heroTextRef = useRef();
  const headingRef = useRef();
  const subheadingRef = useRef();
  const buttonRef = useRef();

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(Power3);

  //   const tl = gsap.timeline();

  //   tl.fromTo(
  //     heroTextRef.current,
  //     {
  //       y: 44,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: Power3.easeOut,
  //       duration: 0.5,
  //       delay:0.3,
  //       fps: 30,
  //     }
  //   );

  //   tl.fromTo(
  //     headingRef.current,
  //     {
  //       y: 44,
  //       opacity: 0,
  //       delay: 4,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: Power3.easeOut,
  //       fps: 30,
  //       duration: 1,
  //     },
  //     '-=0.5' // Start after the previous animation
  //   );

  //   tl.fromTo(
  //     subheadingRef.current,
  //     {
  //       y: 44,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: Power3.easeOut,
  //       fps: 30,
  //       duration: 1,
  //     },
  //     '-=0.5' // Start after the previous animation
  //   );

  //   tl.fromTo(
  //     buttonRef.current,
  //     {
  //       y: 44,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: Power3.easeOut,
  //       fps: 30,
  //       duration: 1,
  //     },
  //     '-=0.5' // Start after the previous animation
  //   );

  // }, []);

  return (
    <>
      <div className="px-4 mt-24 md:px-8 lg:px-16 text-center md:text-left py-10 flex flex-col md:flex-row text-[#121212]">
        <div ref={heroTextRef} className="w-full md:w-[70%] flex items-center md:items-start flex-col font-Outfit">
          <motion.p 
          initial={{y:44, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:0.5}}
          ref={headingRef} className="font-medium text-4xl lg:text-6xl lg:leading-[80px]">
            Powering Africa's digital transformation with cloud solutions
          </motion.p>
          <motion.p
          initial={{y:44, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:0.5, delay:0.5}}
          ref={subheadingRef} className="text-lg md:text-2xl md:w-[80%] font-normal mt-3 md:leading-[30px]">
            Empower Your Business in Africa with Cloud Innovation.
          </motion.p>
          <motion.button 
          initial={{y:44, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:0.8, delay:1}}
          ref={buttonRef} className="text-white px-9 py-3 text-xl w-[231px] mt-8 rounded-[30px] bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8]">
            Get started today
          </motion.button>
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <img src={heroImg} className="md:absolute right-0 w-full mt-5 md:mt-0 md:w-[60%] lg:w-[55%]" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;

