import binance from '../images/binance.svg';
import bitcoin from '../images/bitcoin.svg';
import coinbase from '../images/coinbase.svg';
import tether from '../images/tether.svg';
import bitmex from '../images/bitmex.svg';

const Carousel = () => {

  return (
    <div className=" w-full px-4 md:px-8 lg:px-16 py-8">
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
