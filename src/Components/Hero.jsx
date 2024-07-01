import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";

const Hero = () => {
  return (
  
      
        <div className="h-96 overflow-hidden relative bg">
          <div className="">
            <div className="absolute inset-0 hero-bg-layer" />
          </div>

          <div className=" w-full  sm:w-max font-Poppins absolute left-1/2 -translate-x-1/2 h-full  flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center  items-center ">
            <div className="text-center px-1">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white">
                Are You a Supplier?
              </h1>
              <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                Explore Matching Opportunities.
              </span>
            </div>
            <div className="w-full flex flex-col justify-center md:flex-row gap-2 px-4 sm:px-0 ">
              <div className="grow flex flex-row py-2 bg-white items-center gap-2 px-2 rounded-md">
                <PiBag size={15} className="text-orange-600" />

                <input
                  type="text"
                  className="w-full outline-none placeholder:text-sm"
                  placeholder="Search your required service here"
                />
              </div>
              <div className="grow flex flex-row py-2 items-center gap-2 bg-white px-2 rounded-md">
                <FaLocationDot size={15} className="text-orange-600" />
                <input
                  type="text"
                  className="w-full outline-none placeholder:text-sm"
                  
                  placeholder="Search your desired location here"
                />
              </div>
              <button className=" border border-[#00732F] bg-[#00732F] w-28 text-white px-4 py-3 border-none rounded-md self-stretch">
                Search
              </button>
            </div>
            <div className="px-2">
              <span className="font-bold text-white">Are you a buyer? &nbsp;</span>
              <span className="text-white underline">
                Click here if you are looking to post a requirements
              </span>
            </div>
          </div>
        </div>
      
    
  );
};

export default Hero;