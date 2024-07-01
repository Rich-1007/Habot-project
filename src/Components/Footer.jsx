import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <div className="bg-[#123557]   sm:py-10 sm:px-28 px-3 ">
       
       
       
       
        <div className=" border-y border-gray-500 w-full sm:h-52 flex sm:flex-row flex-col justify-between py-5 ">
          <div className="  flex sm:flex-row flex-col justify-evenly sm:w-1/2">
            <div className="flex justify-center flex-col items-start w-2/5 gap-1">
              <div >
                <img
                  src="public/Footer-logo-removebg-preview.png"
                  alt=""
                  className="object-contain"
                />
              </div>
              <span className="text-white text-sm font-thin">
            
                &#169; R Singhania
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-5 py-5 w-3/5">
              <div className="flex flex-col text-white gap-1">
                <span className="font-semibold pb-1">Company</span>
                <span className="hover:text-gray-200 text-sm  text-gray-400 cursor-pointer transition-all duration-500">
                  About
                </span>
                <span className="hover:text-gray-200 text-sm  text-gray-400 cursor-pointer transition-all duration-500">
                  FAQ
                </span>
              </div>

              <div className="flex flex-col text-white sm:gap-1 ">
                <span className="font-semibold pb-1">Terms</span>
                <span className="hover:text-gray-200 text-sm  text-gray-400 cursor-pointer transition-all duration-500">
                  Data privacy
                </span>
                <span className="hover:text-gray-200 text-sm  text-gray-400 cursor-pointer transition-all duration-500">
                  Terms
                </span>
                <span className="hover:text-gray-200 text-sm  text-gray-400 cursor-pointer transition-all duration-500">
                  Accessibility
                </span>
              </div>
              <div className="flex flex-col text-white gap-1">
                <span className="font-semibold pb-1">Related</span>
                <span className="hover:text-gray-200 text-sm text-gray-400 cursor-pointer transition-all duration-400">
                  Find Buyer
                </span>
                <span className="hover:text-gray-200 text-sm  text-gray-400 cursor-pointer transition-all duration-500">
                  Feedback
                </span>
              </div>
            </div>
          </div>

          <div className="    text-white flex flex-row  justify-end items-center sm:w-1/2 py-5 sm:py-0 gap-3">
            <div className="border rounded-full p-2">
              <TfiLinkedin size={25} />
            </div>
            <div className="border rounded-full p-2 flex ">
              <BiLogoTwitter size={25} />
            </div>
            <div className="border rounded-full p-2">
              <GrFacebookOption size={25} />
            </div>
            <div className="border rounded-full p-2">
              <FaInstagram size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
