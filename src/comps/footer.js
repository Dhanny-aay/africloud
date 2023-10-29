import logo from '../images/logo.svg';
import fb from '../images/fb.svg';
import twi from '../images/twi.svg';
import ig from '../images/ig.svg';
import whatsapp from '../images/whatsapp.svg';

const Footer = () => {
    return ( 
        <>
        <div className=" mt-[1.5em] py-[3em] px-16 w-full font-Outfit text-[#121212] bg-gradient-to-r from-[#288DD11A] to-[#3FE0C81A] flex items-start justify-between">

            <div className=" space-y-7">
                <span className=" flex items-center space-x-2">
                    <img 
                    src={ logo } 
                    className=''
                    alt="" />
                    <p className=' font-normal text-2xl'>AfriCloud</p>
                </span>
                <p className=' font-normal text-base'>Cloud solutions for Africa's future.</p>
                <span className=' flex items-center space-x-6'>
                    
                    <img 
                    src={ fb }
                    alt="" />

                    <img 
                    src={ twi }
                    alt="" />

                    <img 
                    src={ ig }
                    alt="" />

                    <img 
                    src={ whatsapp }
                    alt="" />
                </span>
            </div>

            <div className=' text-base '>
                <p className=' font-semibold mb-5'>Products</p>
                <span className=' font-normal space-y-3'>
                    <p>Features</p>
                    <p>Solutions</p>
                    <p>Integrations</p>
                    <p>Enterprise</p>
                    <p>Solutions</p>
                </span>
            </div>

            <div className=' text-base '>
                <p className=' font-semibold mb-5'>Resources</p>
                <span className=' font-normal space-y-3'>
                    <p>Partners</p>
                    <p>Community</p>
                    <p>Developers</p>
                    <p>App</p>
                    <p>Blog</p>
                </span>
            </div>

            <div className=' text-base '>
                <p className=' font-semibold mb-5'>Why Choose Us?</p>
                <span className=' font-normal space-y-3'>
                    <p>Channels</p>
                    <p>Scale</p>
                    <p>Watch the Demo</p>
                    <p>Our Competition</p>
                </span>
            </div>

            <div className=' text-base '>
                <p className=' font-semibold mb-5'>Company</p>
                <span className=' font-normal space-y-3'>
                    <p>About Us</p>
                    <p>News</p>
                    <p>Leadership</p>
                    <p>Media Kit</p>
                </span>
            </div>

        </div>
        <div className=' pb-[1.5em] w-full text-center text-[#A5ACBA] font-Outfit text-base font-normal bg-gradient-to-r from-[#288DD11A] to-[#3FE0C81A]'>
        © 2023 Unicloud Africa. All Rights Reserved.
        </div>
        </>
     );
}
 
export default Footer;