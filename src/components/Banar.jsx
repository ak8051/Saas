import React from "react";
import logo1 from "../assets/logo-1.svg";
import logo2 from "../assets/logo-2.svg";
import logo3 from "../assets/logo-3.svg";
import logo4 from "../assets/logo-4.svg";
import logo5 from "../assets/logo-5.svg";

const Banar = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between mt-48">
        <img src={logo1} alt="LOGO" className="sm:w-24"/>
        <img src={logo2} alt="LOGO" className="sm:w-24"/>
        <img src={logo3} alt="LOGO" className="sm:w-24"/>
        <img src={logo4} alt="LOGO" className="sm:w-24"/>
        <img src={logo5} alt="LOGO" className="sm:w-24"/>
      </div>
    </>
  );
};

export default Banar;
