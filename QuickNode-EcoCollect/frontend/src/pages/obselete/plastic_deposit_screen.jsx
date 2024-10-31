// import React from "react";
import { plasticDeposit } from "../../data/plastic_deposit_data";

const PlasticDepositScreen = () => {
  return (
    <div className="mt-28 flex flex-col justify-center items-center">
      <h1 className="font-bold py-4 text-primary40 uppercase">
        Plastic Submission And Reward Form
      </h1>
      {plasticDeposit.map((item, index) => (
        <div key={index} className="flex flex-row ">
          <label
            className="mt-2 w-36  font-open-sans font-semibold text-dark-gray-800 text-19.2 leading-24"
            style={{ top: "calc(100% + 3rem)" }}
          >
            {item}
          </label>
          <input
            type="text"
            className="ml-2 mt-2  box-border bg-white border border-primary40"
            placeholder=""
            style={{ top: "calc(100% + 3rem)" }}
          />
        </div>
      ))}
      <h1 className="mb-4 mt-12 text-sm font-bold uppercase">
        Calculated Reward
      </h1>

      <button className="p-4 bg-primary40 mt-2 w-32  font-open-sans font-semibold text-white text-40 leading-64 flex items-center justify-center">
        1456.2 RC
      </button>
      <h1 className="mt-4 mb-12 font-open-sans font-normal text-light-on-background text-19.2 leading-24">
        Thank you, check in again another time.
      </h1>
    </div>
  );
};

export default PlasticDepositScreen;
