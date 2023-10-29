import heroImg from '../images/heroImg.png';

const Hero = () => {
    return ( 
        <>
        <div className="px-4 text-center md:text-left md:px-16 py-10 flex flex-col md:flex-row text-[#121212]">
            <div className=" w-full md:w-[70%] flex items-center md:items-start flex-col font-Outfit">
                <p className=" font-medium text-4xl md:text-6xl md:leading-[80px]">Powering Africa's digital transformation with cloud solutions</p>
                <p className=" text-lg md:text-2xl md:w-[80%] font-normal mt-3 md:leading-[30px]">Empower Your Business in Africa with Cloud Innovation.</p>
                <button 
                className=' text-white px-9 py-3 text-xl w-[231px] mt-8 rounded-[30px] bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8]'>
                    Get started today
                </button>
            </div>
            <div className=" w-full md:w-[50%]  flex flex-col items-center">
                <img src={ heroImg }
                className=' md:absolute right-0 w-full mt-5 md:mt-0 md:w-[55%]'
                alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Hero;