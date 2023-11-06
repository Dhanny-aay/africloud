import { useEffect } from "react";
import binance from "../images/binance.svg";
import bitcoin from "../images/bitcoin.svg";
import bitmex from "../images/bitmex.svg";
import coinbase from "../images/coinbase.svg";
import tether from "../images/tether.svg";
import { motion } from "framer-motion";

const Users = () => {
  
  return (
    <>
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, type:'tween' }}
    className="flex flex-col w-full justify-center items-center text-[#121212] py-[3em] px-4 md:px-8 lg:px-16">
      <p className="font-Outfit text-center font-medium text-xl md:text-2xl">
        Making Cloud Service Available For
      </p>
    </motion.div>
    </>
  );
};

export default Users;
