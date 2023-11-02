import binance from '../images/binance.svg';
import bitcoin from '../images/bitcoin.svg';
import coinbase from '../images/coinbase.svg';
import tether from '../images/tether.svg';
import bitmex from '../images/bitmex.svg';

const Carousel = () => {

  return (
    <div className=" w-full px-4 md:px-8 lg:px-16 py-4">
       <div className='w-full overflow-x-scroll scrollbar-hide'>
        <div className='flex flex-row justify-between'>
            <img src={ binance } className=' mx-4 lg:mx-0' alt="" />
            <img src={ bitcoin } className=' mx-4 lg:mx-0' alt="" />
            <img src={ coinbase } className=' mx-4 lg:mx-0' alt="" />
            <img src={ tether } className=' mx-4 lg:mx-0' alt="" />
            <img src={ bitmex } className=' mx-4 lg:mx-0' alt="" />
        </div>
       </div>
    </div>
  );
};

export default Carousel;


// import React, { useRef, useEffect } from 'react';
// import { motion, useMotionValue, useTransform, useVelocity } from 'framer-motion';
// import { wrap } from '@motionone/utils';

// function Carousel({ children, baseVelocity = 100 }) {
//   const baseX = useMotionValue(0);
//   const scrollY = useMotionValue(0);
//   const scrollVelocity = useVelocity(scrollY);

//   const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef(1);

//   useEffect(() => {
//     const handleAnimationFrame = (time, delta) => {
//       let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//       if (velocityFactor.get() < 0) {
//         directionFactor.current = -1;
//       } else if (velocityFactor.get() > 0) {
//         directionFactor.current = 1;
//       }

//       moveBy += directionFactor.current * moveBy * velocityFactor.get();

//       baseX.set(baseX.get() + moveBy);
//       requestAnimationFrame(handleAnimationFrame);
//     };

//     requestAnimationFrame(handleAnimationFrame);
//   }, [baseX, baseVelocity, directionFactor, velocityFactor]);

//   return (
//     <div className="carousel">
//       <motion.div className="carousel-scroller flex" style={{ x }}>
//         <span><img src={ binance } alt="" /> </span>
//         <span><img src={ bitcoin } alt="" /></span>
//         <span><img src={ coinbase } alt="" /></span>
//         <span><img src={ tether } alt="" /></span>
//       </motion.div>
//     </div>
//   );
// }

// export default Carousel;
