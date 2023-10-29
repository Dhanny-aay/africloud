import logo from '../images/logo.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" py-8 px-16 flex justify-between items-center text-[#121212]">
            <span className="flex space-x-3 items-center">
                <img 
                src={ logo }
                 alt="" />
                <p className=' font-Outfit font-normal text-2xl'>AfriCloud</p>
            </span>
            <span className=' flex items-center space-x-6 font-Outfit text-base'>
                <p>Home</p>
                <p>Career</p>
                <p>Partners</p>
                <p>How we work</p>
                <p>Contact us</p>
                <p>About</p>
            </span>
            <span className=' flex items-center space-x-6 font-Outfit text-base'>
                <p>Login</p>
                <button 
                className=' text-white px-9 py-3 rounded-[30px] bg-gradient-to-r from-[#288DD1] via-[#3fd0e0] to-[#3FE0C8]'>
                    Register
                </button>
            </span>
        </div>
        </>
     );
}
 
export default Navbar;