import binance from '../images/binance.svg';
import bitcoin from '../images/bitcoin.svg';
import bitmex from '../images/bitmex.svg';
import coinbase from '../images/coinbase.svg';
import tether from '../images/tether.svg';

const Users = () => {
    return ( 
        <>
        <div className=" flex flex-col w-full justify-center items-center text-[#121212] py-[3em] px-4 md:px-16">
            <p className=" font-Outfit text-center font-medium text-xl md:text-2xl">Making Cloud Service Available For</p>
            <div className=" grid grid-cols-2 gap-[32px] md:flex items-center w-full py-8 justify-between">
                <img 
                src={ binance }
                className=''
                alt="" />

                <img 
                src={ coinbase }
                className=''
                alt="" />

                <img 
                src={ bitcoin }
                className=''
                alt="" />

                <img 
                src={ tether }
                className=''
                alt="" />

                <img 
                src={ bitmex }
                className=' hidden md:block'
                alt="" />
            </div>
            <img 
                src={ bitmex }
                className=' block md:hidden'
                alt="" />
        </div>
        </>
     );
}
 
export default Users;
<>
</>