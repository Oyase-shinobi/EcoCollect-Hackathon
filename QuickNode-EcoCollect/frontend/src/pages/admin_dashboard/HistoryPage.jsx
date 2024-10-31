import React from "react";
import AdminDashboardLayout from "../../components/dashboard_components/AdminDashboardLayout";

const HistoryPage = () => {
  return (
    <AdminDashboardLayout active_link={'History'} dashboard_content={
      <div className="w-3/4 bg-white h-full flex border-2 border-blue-200">
      <div className="w-3/4 p-4">
        <h1 className=" text-3xl font-black text-primary40 py-4">History</h1>
        <div className="m-4">
          <div className="m-2">
            <h2 className="text-base font-bold">Our Story</h2>
            <p className="text-sm">
              We have come a long way, from the era of handpicking and burning
              to this era of recycling to minimize the emission of carbon. We
              have developed numerous live applications currently in use and
              adopted globally. We aim to be evangelists in the blockchain
              industry, promoting the use of Web 3.0, which remains the safest
              place to earn cryptocurrencies.
            </p>
          </div>
          <div className="m-2">
            <h2 className=" text-base font-bold">Our Mission</h2>
            <p className=" text-sm ">
              We have come a long way, from the era of handpicking and burning
              to this era of recycling to minimize the emission of carbon. We
              have developed numerous live applications currently in use and
              adopted globally. We aim to be evangelists in the blockchain
              industry, promoting the use of Web 3.0, which remains the safest
              place to earn cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-primary60 flex flex-col justify-start">
        <button className="w-3/5 mx-auto py-2 bg-blue-300 text-white rounded-[20px] mt-8 hover:bg-blue-400">
          Careers
        </button>
      </div>
    </div>
    } />
  );
};

export default HistoryPage;
