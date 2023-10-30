import one from '../images/one.svg';
import two from '../images/two.svg';
import three from '../images/three.svg';
import four from '../images/four.svg';
import more from '../images/more.svg';
import blag from '../images/blag.svg';

const Services = () => {
    return ( 
        <>
        <div className=" py-[3em] px-4 md:px-8 lg:px-16 w-full font-Outfit text-[#121212]">
            <p className=" font-medium text-3xl md:text-5xl text-center">Explore our services</p>
            <p className=" text-center lg:px-[15%] text-[#121212CC] text-lg py-3">Uni Cloud Africa is your trusted partner for cutting-edge cloud solutions that transform businesses across Africa. Our platform offers a comprehensive suite of cloud services designed to drive innovation, meet compliance, enhance scalability, and accelerate growth.</p>
            <div className=" py-12 flex md:flex-col lg:flex-row justify-between w-full">
                <div className=" w-full md:grid grid-cols-2 lg:block lg:w-1/2 h-[400px] font-Outfit text-[#121212] space-y-7 md:space-y-0 lg:space-y-7">

                    <div className=" w-full">
                        <span className=' flex lg:items-end space-x-3'>
                            <img 
                            src={ one }
                            alt="" />
                            <p className=' font-medium text-xl'>Infrastructure-as-a-Service (IaaS)</p>
                        </span>
                        <p className=' text-[#121212B2] md:w-[80%] mt-2'>We provide scalable and customisable virtualised infrastructure resources.</p>
                    </div>
                    
                    <div className=" w-full">
                        <span className=' flex lg:items-end space-x-3'>
                            <img 
                            src={ two }
                            alt="" />
                            <p className=' font-medium text-xl'>Data Storage and Backup</p>
                        </span>
                        <p className=' text-[#121212B2] md:w-[80%] mt-2'>We provide secure and reliable data storage options with redundancy and backup capabilities.</p>
                    </div>

                    <div className=" w-full">
                        <span className=' flex lg:items-end space-x-3'>
                            <img 
                            src={ three }
                            alt="" />
                            <p className=' font-medium text-xl'>Platform-as-a-Service (PaaS)</p>
                        </span>
                        <p className=' text-[#121212B2] md:w-[80%] mt-2'>We offer a platform for application development, deployment, and management.</p>
                    </div>

                    <div className=" w-full">
                        <span className=' flex lg:items-end space-x-3'>
                            <img 
                            src={ four }
                            alt="" />
                            <p className=' font-medium text-xl'>Multi-Cloud and Cloud Support</p>
                        </span>
                        <p className=' text-[#121212B2] md:w-[80%] mt-2'>We facilitate integration with other cloud platforms and on-premises infrastructure.</p>
                    </div>

                    <button className=' font-medium text-xl w-[195px] flex justify-between border-b border-black items-center'>
                        Learn more
                        <img src={ more } alt="" />
                    </button>

                </div>
                <div className=" w-1/2 h-[500px] bg-[#288DD11A] rounded-[30px] hidden lg:flex justify-center items-center">
                    <img src={ blag } alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;