import binance from "../images/binance.svg";
import bitcoin from "../images/bitcoin.svg";
import bitmex from "../images/bitmex.svg";
import coinbase from "../images/coinbase.svg";
import tether from "../images/tether.svg";

import { useState } from "react";
import Slider from "react-slick";

const Users = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  });

  const images = [binance, coinbase, bitcoin, tether, bitmex];

  return (
    <>
    <div className="flex flex-col w-full justify-center items-center text-[#121212] py-[3em] px-4 md:px-8 lg:px-16">
      <p className="font-Outfit text-center font-medium text-xl md:text-2xl">
        Making Cloud Service Available For
      </p>
    </div>
    <div className=" px-4 md:px-8 lg:px-16 ">
    <div className="logos">
      <div className="logos-slide mr-[50%]">
        <img className="" src={ binance } alt="" />
        <img className="" src={ coinbase } alt="" />
        <img className="" src={ bitcoin } alt="" />
        <img className="" src={ tether } alt="" />
        <img className="" src={ bitmex } alt="" />
      </div>

      <div className="logos-slide">
        <img className="" src={ binance } alt="" />
        <img className="" src={ coinbase } alt="" />
        <img className="" src={ bitcoin } alt="" />
        <img className="" src={ tether } alt="" />
        <img className="" src={ bitmex } alt="" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Users;
