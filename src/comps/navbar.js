import logo from '../images/logo.svg';
import menu from '../images/menu.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" py-6 z-[99] px-4 md:px-8 lg:px-16 flex justify-between items-center fixed w-full bg-white top-0 text-[#121212]">
            <span className="flex space-x-3 items-center">
                <img 
                src={ logo }
                 alt="" />
                <p className=' font-Outfit font-normal text-2xl'>AfriCloud</p>
            </span>
            <img src={ menu } className=' flex md:hidden' alt="" />
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
                <img src={ menu } className=' md:flex lg:hidden hidden' alt="" />
            </span>
        </div>
        </>
     );
}
 
export default Navbar;