import Ads from "../comps/ads";
import Banner from "../comps/banner";
import Carousel from "../comps/carousel";
import Faq from "../comps/faq";
import Features from "../comps/feature";
import Footer from "../comps/footer";
import Hero from "../comps/hero";
import Navbar from "../comps/navbar";
import Services from "../comps/services";
import Users from "../comps/users";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Users/>
        <Carousel/>
        <Services/>
        <Banner/>
        <Features/>
        <Faq/>
        <Ads/>
        <Footer/>
        </>
     );
}
 
export default Landing;