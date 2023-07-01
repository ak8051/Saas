import React, { useState } from "react";
import Button from "./Button";
import Logo from "../assets/Logo Color.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mx-auto flex justify-between items-center pt-7 w-9/12">
        <div className="flex items-center min-w-max">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>
        <div className="hidden md:flex md:justify-between md:w-auto items-center">
          <div className="text-center">
            <a href="#" className="ml-8">
              Home
            </a>
            <a href="#" className="ml-8">
              Features
            </a>
            <a href="#" className="ml-8">
              Pricing
            </a>
            <a href="#" className="ml-8">
              Blog
            </a>
          </div>
          <div className="ml-36">
            <Button bcolor="bg-orange-400" hcolor="bg-orange-600">
              Get Started
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12H5C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H19C19.5523 10 20 10.4477 20 11C20 11.5523 19.5523 12 19 12ZM19 16H5C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16ZM19 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H5ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center mt-2 py-2 px-4 bg-white shadow">
            <a
              href="#"
              className="block mt-2 text-gray-600 hover:text-gray-800"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-2 text-gray-600 hover:text-gray-800"
            >
              Features
            </a>
            <a
              href="#"
              className="block mt-2 text-gray-600 hover:text-gray-800"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block mt-2 text-gray-600 hover:text-gray-800"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
