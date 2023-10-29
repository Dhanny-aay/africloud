import archi from '../images/archi.svg';

const Banner = () => {
    return ( 
        <>
        <div className=" py-[3em] px-16 w-full font-Outfit text-[#fff]">
            <div className=" w-full h-[400px] rounded-[30px] bg-gradient-to-r from-[#288DD1CC] via-[#3fd0e0CC] to-[#3FE0C8CC] relative px-12 py-12">
                <p className=" font-medium text-[40px] leading-[48px] w-[60%]">Build and scale your websites effortlessly with UniCloud Africa’s servers</p>
                <p className=" text-xl font-normal mt-4 w-[70%]">Several digital agencies & large enterprises enjoy hassle-free managed website hosting with UniCloud Africa.</p>
                <button className=" absolute bottom-12 px-9 py-4 bg-[#fff] rounded-[30px] text-xl text-[#1e1e1e] mt-4">Get started now</button>
                <img src={ archi } className=' absolute right-0 bottom-0' alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Banner;