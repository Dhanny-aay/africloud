import arrowDown from '../images/arrow-down.svg';

const Faq = () => {
    return ( 
        <>
        <div className="py-[3em] px-16 w-full font-Outfit text-[#121212]">
            <p className=" font-medium text-5xl text-center">Frequently asked questions?</p>

            <span className=' w-full border-t border-[#1E1E1E1A] py-6 flex justify-between items-center mt-16'>
                <p className='text-xl font-normal'>How do I create an account on AfriCloud ?</p>
                <img 
                src={ arrowDown }
                alt="" />
            </span>

            <span className=' w-full border-y border-[#1E1E1E1A] py-6 flex justify-between items-center'>
                <p className='text-xl font-normal'>How can I contact your customer support?</p>
                <img 
                src={ arrowDown }
                alt="" />
            </span>

            <span className=' w-full border-y border-[#1E1E1E1A] py-6 flex justify-between items-center'>
                <p className='text-xl font-normal'>Is AfriCloud a safe platform?</p>
                <img 
                src={ arrowDown }
                alt="" />
            </span>

            <span className=' w-full border-y border-[#1E1E1E1A] py-6 flex justify-between items-center'>
                <p className='text-xl font-normal'>What types of cloud computing services are available?</p>
                <img 
                src={ arrowDown }
                alt="" />
            </span>

            <span className=' w-full  py-6 flex justify-between items-center'>
                <p className='text-xl font-normal'>What are the benefits of using cloud computing?</p>
                <img 
                src={ arrowDown }
                alt="" />
            </span>

        </div>
        </>
     );
}
 
export default Faq;