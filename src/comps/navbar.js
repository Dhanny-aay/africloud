import logo from '../images/logo.svg';
import menu from '../images/menu.svg';

const Navbar = () => {

    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    };

    return ( 
        <>
        <div id="overlay" className=" w-full bg-[#fff] backdrop-blur-xl p-6 flex justify-center items-center -translate-y-[500px] shadow transition-all duration-700 top-[78px] fixed z-[9999]">
            <div className="w-full flex flex-col justify-center items-center space-y-5">
                <div className=' w-full flex flex-row justify-between'>
                    <button className=' border border-[#EAEBF01A] py-3 w-[48%] text-[#121212] text-center font-Outfit font-normal rounded-[30px]'>Login</button>
                    <button className=' bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8] py-3 w-[48%] text-[#fff] text-center font-Outfit font-normal rounded-[30px]'>Register</button>
                </div>
                <p className=" font-normal cursor-pointer text-base text-[#121212] font-Outfit ">Home</p>
                <p className=" font-normal cursor-pointer text-base text-[#121212] font-Outfit ">Career</p>
                <p className=" font-normal cursor-pointer text-base text-[#121212] font-Outfit ">Partners</p>
                <p className=" font-normal cursor-pointer text-base text-[#121212] font-Outfit ">How we work</p>
                <p className=" font-normal cursor-pointer text-base text-[#121212] font-Outfit ">Contact us</p>
               <p className=" font-normal cursor-pointer text-base text-[#121212] font-Outfit ">About</p>
            </div>
        </div>
        <div className=" py-6 z-[99999] px-4 md:px-8 lg:px-16 flex justify-between items-center fixed w-full bg-white top-0 text-[#121212]">
            <span className="flex space-x-3 items-center">
                <img 
                src={ logo }
                 alt="" />
                <p className=' font-Outfit font-medium text-2xl'>AfriCloud</p>
            </span>
            <div onClick={ overlay } className="menu-icon md:hidden">
                <input className="menu-icon__cheeckbox" type="checkbox" />
                <div className=' lg:hidden'>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <span className='hidden lg:flex items-center space-x-6 font-Outfit text-base'>
                <p>Home</p>
                <p>Career</p>
                <p>Partners</p>
                <p>How we work</p>
                <p>Contact us</p>
                <p>About</p>
            </span>
            <span className='hidden md:flex items-center space-x-6 font-Outfit text-base'>
                <p>Login</p>
                <button 
                className=' text-white px-9 py-3 rounded-[30px] bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8]'>
                    Register
                </button>
                <div onClick={ overlay } className="menu-icon md:flex lg:hidden hidden">
                    <input className="menu-icon__cheeckbox" type="checkbox" />
                    <div className=' lg:hidden'>
                        <span></span>
                        <span></span>
                    </div>
            </div>
            </span>
        </div>
        </>
     );
}
 
export default Navbar;