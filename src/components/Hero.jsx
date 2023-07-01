import React from "react";
import Button from "./Button";
import HeroImg from "../assets/Hero 3D.png";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto columns-3xs mt-24 flex flex-wrap items-center justify-center gap-24">
        <div className="max-w-[462px]">
          <div className="text-6xl font-bold mb-7 mx-auto text-center md:text-start">
            Grow your<br></br>subscription<br></br>business
          </div>
          <div className="text-xl font-normal mb-12 text-center md:text-start">
            Outcome-centered products that reduce churn,<br></br> optimize
            pricing, and grow your subscription<br></br> business end-to-end.
          </div>
          <div className="text-center md:text-start">
            <Button bcolor="bg-violet-800" hcolor="bg-violet-950" />
          </div>
        </div>
        <div className="max-w-[70%]">
          <div className="">
            <img src={HeroImg} alt="Hero Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
