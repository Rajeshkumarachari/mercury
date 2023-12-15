import React from "react";
import { TEAM1, TEAM2, TEAM3, TEAM4, TEAM5 } from "../utils/constant";

const Reviews = () => {
  return (
    <div className=" mt-44 justify-center ">
      <p className=" justify-center flex  text-lg text-gray-500">
        The platform fueling today’s high-growth revenue teams
      </p>
      <div className="flex  space-x-8  mx-24">
        <img src={TEAM1} alt="" />
        <img src={TEAM2} alt="" />
        <img src={TEAM3} alt="" />
        <img src={TEAM4} alt="" />
        <img src={TEAM5} alt="" />
      </div>
      <div className=" flex justify-center  ">
        <button className=" border px-4 py-3  font-medium rounded-3xl hover:bg-slate-200 delay-150 text-gray-700">
          See Customer Reviews
        </button>
      </div>
      <div className=" flex justify-center mt-48">
        <p className=" text-6xl   font-semibold  w-[53%] ">
          Mercury Money Your Ultimate{" "}
          <span className=" text-blue-300"> Finance </span> Companion
        </p>
      </div>
      <div className=" flex justify-center my-5">
        <p className=" text-lg text-gray-500">
          Welcome to Mercury, your all-in-one finance management solution! Take
          control of <br /> your financial matters like never before with our
          powerful and user-friendly app.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
