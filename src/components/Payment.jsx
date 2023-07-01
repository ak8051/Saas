import React from "react";

const Payment = () => {
  return (
    <>
      <div className="container mx-auto w-9/12 mt-36">
        <div className="flex columns-3xs justify-between items-center h-[65px]">
          <div className="text-6xl font-bold w-[536px]">
            Get the right plan for future product.
          </div>
          <div className="flex justify-center items-center text-center bg-slate-100 w-[344px] h-[65px] rounded-[10px]">
            <div className="bg-indigo-600 w-1/2 py-4 rounded-[10px] text-white font-bold">
              Yearly
            </div>
            <div className="w-1/2 font-bold">Monthly</div>
          </div>
        </div>

        <div className="flex columns-3xs justify-between mt-20">
          <div className="bg-gray-100 rounded-xl inline-block flex flex-col justify-between items-center text-center w-[330px] h-[441px] ">
            <div className="text-lg font-normal">Starter</div>
            <div className="text-6xl font-bold">Free</div>
            <div className="text-lg font-normal">
              <div>1 Website</div>
              <div>5 GB Hosting</div>
              <div>Limited Support</div>
            </div>
            <div className="w-72 h-16 bg-white text-blue-600 flex items-center justify-center mx-auto">
              Get Started
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl inline-block flex flex-col justify-between items-center text-center w-[330px] h-[441px] ">
            <div className="text-lg font-normal">Premium</div>
            <div className="text-6xl font-bold">$29</div>
            <div className="text-lg font-normal">
              <div>10 Website</div>
              <div>15 GB Hosting</div>
              <div>Premium Support</div>
            </div>
            <div className="w-72 h-16 bg-white text-blue-600 flex items-center justify-center mx-auto">
              Get Started
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl inline-block flex flex-col justify-between items-center text-center w-[330px] h-[441px] ">
            <div className="text-lg font-normal">Enterprise</div>
            <div className="text-6xl font-bold">$49</div>
            <div className="text-lg font-normal">
              <div>Unlimited Website</div>
              <div>50 GB Hosting</div>
              <div>Premium Support</div>
            </div>
            <div className="w-72 h-16 bg-white text-blue-600 flex items-center justify-center mx-auto">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
