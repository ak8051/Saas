import React from "react";
import logo1 from "../assets/logo-1.svg";
import logo2 from "../assets/logo-2.svg";
import logo3 from "../assets/logo-3.svg";
import logo4 from "../assets/logo-4.svg";
import logo5 from "../assets/logo-5.svg";

const Banar = () => {
  return (
    <>
      <div className="container columns-3xs mx-auto flex items-center justify-between mt-48 gap-4">
        <div><img src={logo1} alt="LOGO" className="md:w-36"/></div>
        <div><img src={logo2} alt="LOGO" className="md:w-36"/></div>
        <div><img src={logo3} alt="LOGO" className="md:w-36"/></div>
        <div><img src={logo4} alt="LOGO" className="md:w-36"/></div>
        <div><img src={logo5} alt="LOGO" className="md:w-36"/></div>
      </div>
    </>
  );
};

export default Banar;
