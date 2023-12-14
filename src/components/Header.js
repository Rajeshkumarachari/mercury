import React from "react";
import {
  APP_STORE_LOGO,
  BG_COLOR,
  MERCURY_LOGO,
  PHONE_LOGO,
  USER1,
  USER2,
  USER3,
} from "../utils/constant";

const Header = () => {
  return (
    <div className="border m-2 rounded-3xl">
      <div className=" relative  z-20 mx-10 my-10 flex">
        <img src={MERCURY_LOGO} alt="logo" />
        <div className=" flex  ml-[400px] ">
          <p className=" mx-4 text-lg text-gray-600 px-3 py-[6px] rounded-3xl  cursor-pointer hover:bg-gray-100">
            Product
          </p>
          <p className=" mx-4 text-lg text-gray-600 px-3 py-[6px] rounded-3xl  cursor-pointer hover:bg-gray-100">
            Compare ^
          </p>
          <p className=" mx-4 text-lg text-gray-600 px-3 py-[6px] rounded-3xl  cursor-pointer hover:bg-gray-100">
            Pricing
          </p>
          <p className=" mx-4 text-lg text-gray-600 px-3 py-[6px] rounded-3xl  cursor-pointer hover:bg-gray-100">
            Contact
          </p>
        </div>
        <button className=" ml-20 border border-black px-4 py-2 bg-transparent rounded-3xl font-medium hover:bg-[#000000] hover:text-white ">
          Login
        </button>
        <button className="mx-3 bg-black text-white px-6 rounded-3xl">
          Let's Talk
        </button>
      </div>
      <div className=" flex">
        <div className=" mx-10 mt-20 w-1/2 ">
          <p className=" text-gray-500 text-lg border w-fit  px-4 py-3 rounded-3xl">
            Financal Management
          </p>
          <h1 className=" text-8xl font-semibold ">
            A simpler, smarter basic credit{" "}
            <span className=" text-cyan-500 ">card.</span>
          </h1>
          <p className=" text-lg text-neutral-500">
            Your powerful companion on the road to financial success! Explore
            personal budget management, investment opportunities.
          </p>
          <div className=" flex mt-7">
            <button className=" flex bg-black text-white px-5 py-3 rounded-3xl">
              <img src={APP_STORE_LOGO} className=" mr-2" alt="" />
              App Store
            </button>
            <img
              src={USER1}
              className="w-14 h-14 border rounded-full ml-5"
              alt=""
            />
            <img
              src={USER2}
              className="w-14 h-14 border rounded-full ml-[-10px] "
              alt=""
            />
            <img
              src={USER3}
              className="w-14 h-14 border rounded-full ml-[-8px]"
              alt=""
            />
            <div className=" ml-3 ">
              <p className=" text-xl font-semibold text-zinc-700">24k+</p>
              <p className=" text-zinc-500">Active User</p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 ">
          <img
            src={BG_COLOR}
            className=" mt-[-120px] w-[700px] ml-40  rounded-2xl relative  z-0 "
            alt=""
          />
          <img
            src={PHONE_LOGO}
            className=" relative mt-[-1000px] w-3/4 z-20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
