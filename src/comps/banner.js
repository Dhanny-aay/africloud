import archi from '../images/archi.svg';

const Banner = () => {
    return ( 
        <>
        <div className=" mt-[6em] md:mt-0 py-[3em] px-4 md:px-8 lg:px-16 w-full font-Outfit text-[#fff]">
            <div className=" w-full h-[600px] md:h-[400px] rounded-[30px] bg-gradient-to-r from-[#288DD1CC] via-[#3fd0e0CC] to-[#3FE0C8CC] relative p-6 lg:p-12 z-10"> 
                <p className=" font-medium text-3xl z-[10] lg:text-[40px] lg:leading-[48px] md:w-[60%]">Build and scale your websites effortlessly with UniCloud Africa’s servers</p>
                <p className=" text-lg md:text-xl font-normal z-[10] mt-4 md:w-[70%]">Several digital agencies & large enterprises enjoy hassle-free managed website hosting with UniCloud Africa.</p>
                <button className=" absolute bottom-6 lg:bottom-12 px-9 py-4 bg-[#fff] rounded-[30px] text-base md:text-xl text-[#1e1e1e] mt-4">Get started now</button>
                <img src={ archi } className=' -z-[1] opacity-80 md:opacity-100 absolute right-0 bottom-0' alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Banner;