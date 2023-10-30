import left from '../images/left.svg';
import right from '../images/right.svg';

const Ads = () => {
    return ( 
        <>
        <div className="  py-[3em] px-4 md:px-8 lg:px-16 w-full font-Outfit text-[#fff]">
            <div className=" w-full h-[300px] flex justify-center items-center text-center flex-col rounded-[30px] bg-gradient-to-r from-[#288DD1CC] via-[#3fd0e0CC] to-[#3FE0C8CC] relative space-y-4">
                <img 
                src={ left } 
                className='  absolute left-0 bottom-0'
                alt="" />

                <img 
                src={ right } 
                className='  absolute right-0 top-0'
                alt="" />

                <p className=' font-semibold text-5xl'>Start today</p>
                <p className=' font-normal text-xl'>Sign up now and you'll be up and running on Unicloud Africa in just minutes.</p>
                <button className=" px-9 py-4 bg-[#fff] rounded-[30px] text-base text-[#000] mt-4">Get started now</button>
            </div>
        </div>
        </>
     );
}
 
export default Ads;