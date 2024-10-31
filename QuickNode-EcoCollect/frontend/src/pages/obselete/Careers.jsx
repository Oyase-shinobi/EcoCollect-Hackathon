import React from "react";
import careers_img from "../assets/careers_img.svg";

const Careers = () => {
  return (
    <div className="w-4/5 bg-white h-full flex border-2 border-blue-200">
      <div className="w-3/4 p-4">
        <h1 className="text-6xl flex font-bold text-green-600 py-4">
          <img src={careers_img} alt="careers_img" className="h-16 w-16 mr-4 mt-2 text-green-600" />
          Careers
        </h1>
        <div className="m-4">
          <div className="m-2">
            <h2 className="text-4xl font-bold">Senior Defi Analyst</h2>
            <p className="text-4xl">
              We have come a long way, from the era of handpicking and burning
              to this era of recycling to minimize the emission of carbon. We
              have been able to d
            </p>
          </div>

          <div className="m-2">
            <h2 className="text-4xl font-bold">
              Junior Smart Contract Developer
            </h2>
            <p className="text-4xl">
              We came up with this so that we can be an evangelist in the
              blockchain industry to encourage the use of Web 3.0, which is
              still the safest place to earn your cryptocurrencies.
            </p>
          </div>

          <div className="m-2">
            <h2 className="text-4xl font-bold">Senior Web3.0 Marketer</h2>
            <p className="text-4xl">
              We came up with this so that we can be an evangelist in the
              blockchain industry to encourage the use of Web 3.0, which is
              still the safest place to earn your cryptocurrencies.
            </p>
          </div>
          <div className="flex justify-end pr-4">
            <button className="py-4 px-10 bg-green-500 text-white rounded-lg text-2xl hover:bg-green-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-green-600"></div>
    </div>
  );
};

export default Careers;
