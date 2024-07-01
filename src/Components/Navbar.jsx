import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="sm:h-[86px] bg-[#ffffff] flex flex-row justify-between items-center sm:px-20 px-1 py-2 ">
        <div className="">
          <img
            src="public/Logo.png"
            alt=""
            className="sm:h-[86px] h-[50px] object-cover"
          />
        </div>

        <div className=" flex flex-row sm:gap-7 w-full sm:justify-end justify-evenly">
          <div className="text-gray-500 flex flex-row sm:gap-4 items-center gap-2">
            <span className="sm:text-base text-xs">Find Suppliers</span>

            <div className="flex flex-row items-center gap-1">
              <span className="sm:text-base text-xs">Find Service Tags</span>
              <FaChevronDown size={12} />
            </div>
          </div>

          <div className="text-[#00732F] border border-[#00732F] px-2 py-1 sm:px-7 sm:py-2 rounded-md flex sm:flex-row">
            <span className="font-semibold sm:text-base text-[9px]">
              Login /{" "}
            </span>
            <span className="font-semibold sm:text-base text-[9px]">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
