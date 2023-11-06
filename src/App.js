import Landing from "./pages/lading";
import bigLogo from './images/bigLogo.svg';
import bigger from './images/bigger.webp';
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);

    setTimeout( () => {
      setLoading(false);
    }, 3000)

  },[])

  return (
    <>
      {
        loading ?
        <div className=" flex w-full h-[100vh] justify-center items-center">
            <img src= { bigger } className=" w-16 md:w-[100px]" alt="" />
            <p className=" font-Outfit text-4xl md:text-[60px] font-normal text-[#121212]">AfriCloud</p>
        </div>
        :
        <Landing/>
      }
      
    </>
  );
}

export default App;
