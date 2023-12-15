import React, { useState } from "react";
import {
  GOOGLE_LOGO,
  JHON_SMITH,
  NEW_LOGO,
  TYPE_COMMAND,
} from "../utils/constant";

const Command = () => {
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const open = () => {
    setShow(!show);
  };
  const secondOpen = () => {
    setSecond(!second);
  };
  const thirdOpen = () => {
    setThird(!third);
  };

  return (
    <div className=" flex space-x-5">
      <div>
        <div
          onMouseEnter={open}
          onMouseLeave={open}
          className=" bg-violet-300 delay-150 w-96 h-80 rounded-2xl ml-20 cursor-pointer"
        >
          <div className="bg-white w-fit h-20 flex  border rounded-lg black px-2 mx-20">
            <div className=" bg-gray-200 mx-2 rounded-lg  m-2">
              <img src={GOOGLE_LOGO} alt="" className=" w-14  px-4 py-6" />
            </div>
            <div className=" my-5">
              <p className=" text-sm text-gray-600">Staples</p>
              <p className=" text-sm font-medium">Recept auto matched</p>
            </div>
          </div>
          <div className=" bg-gray-900 w-full text-white mt-48  rounded-2xl ">
            <h1 className="   text-2xl justify-center font-medium mx-4 ">
              Expense Management ^
            </h1>
            {show && (
              <p className=" text-gray-200 mx-2">
                Our Finance App Template is designed to help you manage your{" "}
                <span className=" font-semibold">finances effortlessly. </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          onMouseEnter={secondOpen}
          onMouseLeave={secondOpen}
          className="  bg-blue-200 w-96 h-80 rounded-2xl cursor-pointer"
        >
          <div className=" flex">
            <div className=" bg-white w-16 h-16 rotate-12  rounded-xl ml-20 ">
              <img src={NEW_LOGO} className=" rounded-lg  w-20" alt="" />
            </div>
            <div className=" bg-white w-16   h-16 rounded-xl ml-20  rotate-45">
              <p className=" px-6 py-4 text-2xl font-semibold">K</p>
            </div>
          </div>
          <div className=" mx-4  mt-10">
            <img src={TYPE_COMMAND} className="rounded-xl" alt="" />
          </div>
          <div className=" bg-gray-900 w-full text-white mt-4  rounded-2xl ">
            <h1 className="   text-2xl justify-center font-medium mx-4 ">
              Command+K
            </h1>
            {second && (
              <p className=" text-gray-200 mx-2">
                Our Finance App Template is designed to help you manage your{" "}
                <span className=" font-semibold">finances effortlessly. </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          onMouseEnter={thirdOpen}
          onMouseLeave={thirdOpen}
          className=" bg-cyan-100 w-96 h-80 rounded-2xl px-10 cursor-pointer"
        >
          <p className=" bg-white w-fit px-2 rounded-2xl my-4 mt-3 ml-56">
            3m ago
          </p>
          <img src={JHON_SMITH} className=" rounded-xl" alt="" />
          <div className=" bg-gray-900 w-full text-white mt-4  rounded-2xl ">
            <h1 className="   text-2xl justify-center font-medium mx-4 ">
              Financial Planner
            </h1>
            {third && (
              <p className=" text-gray-200 mx-2">
                Our Finance App Template is designed to help you manage your{" "}
                <span className=" font-semibold">finances effortlessly. </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Command;
