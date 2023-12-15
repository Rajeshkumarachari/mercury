import React from "react";
import { TIME, TOTAL_RATING } from "../utils/constant";

const Finance = () => {
  return (
    <div className=" mt-36 flex">
      <div className=" ml-10 w-1/2 border">
        <p className=" border w-fit px-4 py-2 rounded-3xl">
          Mercury Finance App
        </p>
        <h1 className=" text-6xl font-semibold">
          Achieve Your <br />
          Savings Goals with <br />{" "}
          <span className=" text-blue-500">Smart Tools</span>{" "}
        </h1>
        <p className=" text-lg mt-6">
          Achieve your savings goals with the help of our smart tools. Set
          specific targets, create savings plans, and track your progress.
        </p>
        <div className=" flex">
          <div className=" flex mt-10">
            <div className=" bg-blue-600 w-5 px-1 h-5 py- text-white rounded-full  mr-3">
              ✓
            </div>
            <div>
              <p>
                Spend up to <span className=" font-semibold">$40,000 </span> per
                more
              </p>
            </div>
          </div>
          <div className=" flex mx-4 mt-10">
            <div className=" bg-blue-600 w-5 px-1 h-5 py- text-white rounded-full mr-3 mx- ">
              ✓
            </div>
            <div>
              <p>Competitive interest rates</p>
            </div>
          </div>
        </div>
        <div className=" flex my-3 mt-10">
          <button className=" bg-black text-white px-4 rounded-3xl">
            Get a Demo
          </button>
          <button className=" border px-4 py-2 mx-4 rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
      <div className=" w-1/2 border">
        <div className=" relative bg-gray-100 w-80 h-full rounded-3xl mx-3 z-0"></div>
        <div className=" relative  mt-[-400px] ml-12 ">
          <img
            className="rounded-3xl z-20 shadow-md"
            src={TOTAL_RATING}
            alt=""
          />
        </div>
        <div className=" relative z-10 mt-[40px] ml-32  rounded-2xl ">
          <img className=" rounded-3xl shadow-md" src={TIME} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Finance;
