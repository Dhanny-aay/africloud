import Ads from "./comps/ads";
import Banner from "./comps/banner";
import Faq from "./comps/faq";
import Features from "./comps/feature";
import Footer from "./comps/footer";
import Hero from "./comps/hero";
import Navbar from "./comps/navbar";
import Services from "./comps/services";
import Users from "./comps/users";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Users/>
      <Services/>
      <Banner/>
      <Features/>
      <Faq/>
      <Ads/>
      <Footer/>
    </div>
  );
}

export default App;
