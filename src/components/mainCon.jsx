import React from "react";
import char1 from "../assets/Content Image 02.png";
import char2 from "../assets/Content Image.png";

const MainCon = () => {
  return (
    <>
      <div className="hidden md:block ">
        <div className="container mx-auto flex columns-auto justify-center items-center gap-40 mt-40 text-start">
          <div className="">
            <img src={char1} alt="" />
          </div>
          <div className="w-[556px] flex gap-y-7 flex-col">
            <div className="text-5xl font-bold">Subscription index</div>
            <div className="text-xl">
              A daily dataset to keep you up to date on subscription market
              trends and what's happening in your vertical.
            </div>
            <a href="#" className="text-indigo-700 font-bold">
              Learn more
            </a>
          </div>
        </div>

        <div className="container mx-auto flex columns-auto justify-center items-center gap-40 mt-20">
          <div className="w-[556px] flex gap-y-7 flex-col">
            <div className="text-5xl font-bold">In-depth metrics</div>
            <div className="text-xl">
              Accurate, real-time reporting at your fingertips. Getting data has
              never been easier.
            </div>
            <a href="#" className="text-indigo-700 font-bold">
              Learn more
            </a>
          </div>
          <div className="">
            <img src={char2} alt="" />
          </div>
        </div>
      </div>

      {/* mobile screen */}
      <div className="md:hidden container mx-auto flex justify-center items-center mt-40 text-center">
        <div className="w-[70%] flex flex-col-reverse">
          <div className="mt-7">
            <img src={char1} alt="" />
          </div>
          <div className="flex gap-y-7 flex-col">
            <div className="text-4xl font-bold">Subscription index</div>
            <div className="text-xl">
              A daily dataset to keep you up to date on subscription market
              trends and what's happening in your vertical.
            </div>
            <a href="#" className="text-indigo-700 font-bold">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden container mx-auto flex justify-center items-center mt-40 text-center">
        <div className="w-[70%] flex flex-col">
          <div className="flex gap-y-7 flex-col">
            <div className="text-5xl font-bold">In-depth metrics</div>
            <div className="text-xl">
              Accurate, real-time reporting at your fingertips. Getting data has
              never been easier.
            </div>
            <a href="#" className="text-indigo-700 font-bold">
              Learn more
            </a>
          </div>
          <div className="mt-7">
            <img src={char2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCon;
