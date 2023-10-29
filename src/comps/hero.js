import heroImg from '../images/heroImg.png';

const Hero = () => {
    return ( 
        <>
        <div className="px-16 py-10 flex text-[#121212]">
            <div className=" w-[70%] flex flex-col font-Outfit">
                <p className=" font-medium text-6xl leading-[80px]">Powering Africa's digital transformation with cloud solutions</p>
                <p className=" text-2xl w-[80%] font-normal leading-[30px]">Empower Your Business in Africa with Cloud Innovation.</p>
                <button 
                className=' text-white px-9 py-3 text-xl w-[231px] mt-8 rounded-[30px] bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8]'>
                    Get started today
                </button>
            </div>
            <div className=" w-[50%]  flex flex-col">
                <img src={ heroImg }
                className=' absolute right-0 w-[55%]'
                alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Hero;