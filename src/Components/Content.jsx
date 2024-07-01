import React from "react";
import { BsArrowRight, BsFillFileTextFill } from "react-icons/bs";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import { FaCircleCheck, FaCirclePlus, FaUser } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import { GoCheckCircleFill } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { HiPencil, HiUserAdd } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { LuPen } from "react-icons/lu";
import { PiClipboardTextFill, PiPencilSimpleBold } from "react-icons/pi";
import { Data, gridArr } from "../data";

const Content = () => {
  return (
    <>
      <div className="px-2 sm:px-0">
        <div className="w-full flex flex-col sm:px-20 sm:py-20  ">
          <div className="flex flex-col sm:flex-row py-14 ">
            <div className="sm:w-1/2  flex flex-col gap-5 py-5 sm:py-0 justify-start">
              <span className="text-4xl text-black font-bold">
                Ready to dive into
                <span className="text-indigo-900"> HABOT?</span>
              </span>
              <span className="text-sm text-gray-800">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams
              </span>
              <button className="font-bold flex flex-row justify-center items-center gap-4 text-white sm:w-1/3 rounded-md px-3 py-2 bg-green-600">
                Sign up Today !
                <BsArrowRight size={22} />
              </button>
            </div>

            <div className="flex flex-wrap sm:w-1/2  h-full justify-center   gap-4 sm:px-20 w-full">
              {Data.map((item, i) => (
                <div
                  key={i}
                  className="border-orange-500 border py-3 rounded-md text-sm sm:w-44 w-32 text-center"
                >
                  {item.city}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#072F57]  w-full rounded-sm sm:px-10 px-6 py-20 flex sm:flex-row flex-col">
            <div className="sm:w-1/2 overflow-hidden flex justify-center items-center rounded-md bg-[#072F57]">
              <iframe
                className="w-[450px] sm:h-[250px] h-[180px] rounded-lg"
                src="https://www.youtube.com/embed/IZLp-TZyDkQ"
                title="HABOT"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="sm:w-1/2 sm:px-10 py-8 flex flex-col">
              <div className="flex flex-row justify-evenly ">
                <div className="border-b-2 py-1 flex border-orange-600 w-1/2 justify-center">
                  <span className="font-bold text-orange-600 ">Buyer</span>
                </div>
                <div className="py-1">
                  <span className="font-bold text-white">Supplier</span>
                </div>
              </div>
              <div className="py-6 flex flex-col gap-2 text-white">
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <FaCircleCheck className="text-green-600 bg-white rounded-full font-bold text-lg" />
                  </div>
                  <span>Post your requirements.</span>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <FaCircleCheck className="text-green-600 bg-white rounded-full font-bold text-lg" />
                  </div>

                  <span>Sit back for multiple suppliers to contact you.</span>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <FaCircleCheck className="text-green-600 bg-white rounded-full font-bold text-lg" />
                  </div>

                  <span>
                    Choose among the suppliers based on the ratings and reviews.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E8FBFF] h-36 flex  justify-between sm:flex-row flex-col py-5 sm:py-0">
          <div className="sm:w-1/2 flex justify-center gap-1 items-center">
            <span className="font-bold text-2xl">Let Suppliers </span>
            <span className="font-bold text-2xl border-b-2 border-orange-600">
              Find You
            </span>
          </div>
          <div className="sm:w-1/2 flex justify-center items-center">
            <button className="bg-orange-600 text-white font-semibold rounded-sm px-7 py-1.5">
              Get Verified
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center py-10 sm:px-60 gap-3">
          <span className="font-bold text-2xl">How it works?</span>
          <span className="text-sm">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </span>
        </div>

        <div className="sm:px-28 flex flex-wrap justify-center py-5 sm:py-20 ">
          {gridArr.map((item, i) => (
            <div className={` h-52 w-80 bg-[${item.bg}]  `}>

              <div className=" sm:px-8 h-full w-full flex flex-col justify-center items-center gap-4 text-center">

              <img src={item.icon} alt="" className="object-contain h-16" />
              <span className="font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
