import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="h-96 overflow-hidden">
            <img
              src="public/BackGround-Image.png"
              alt=""
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute h-full w-full top-0  flex flex-col justify-center items-center">
            <span className="font-bold text-5xl text-white">
              Are You a Supplier?
            </span>
            <span className="text-white text-4xl">
              Explore Matching Opportunities.
            </span>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row bg-white items-center gap-1 px-4">
                <PiBag size={15} className="text-orange-600" />

                <input
                  type="text"
                  placeholder="Search your required service here"
                />
              </div>
              <div className="flex flex-row bg-white items-center gap-1 px-4">
              <FaLocationDot size={15} className="text-orange-600" />
                <input
                  type="text"
                  placeholder="Search your desired location here"
                />
              </div>
              <button className="bg-[#00732F] text-white px-4 py-1 rounded-md">
                Search
              </button>
            </div>
            <div className="flex gap-2">
                <span className="font-bold text-white">Are you a buyer?</span>
                <span className="text-white">Click here if you are looking to post a requirements</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
