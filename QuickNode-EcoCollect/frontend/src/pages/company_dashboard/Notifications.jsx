import React, { useState } from "react";
import contest from "../../assets/contest.png";
import approved from "../../assets/approved.png";
import pending from "../../assets/pending.png";
import search from "../../assets/search.png";
import filter from "../../assets/filter.png";
import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout";

const Notifications = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <CompanyDashboardLayout active_link={'Notifications'} dashboard_content={
      <div className="w-[28rem] md:w-[36rem] lg:w-[47rem] h-[30rem] border-4 border-[#F8F9FB]-300">
        <div className="flex flex-col items-start justify-start px-3">
          <div className="flex gap-8 items-center mt-2 justify-between w-full">
            <div className="flex items-center gap-2">
              <div className="bg-primary60 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21">
                  <path
                    fill="none"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zM13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-roboto text-primary60">
                Notifications
              </h2>
            </div>
            <div className="flex items-center border border-primary60 rounded p-2 gap-2">
              <input
                type="text"
                className="text-[0.6rem] border-none"
                placeholder="Search company"></input>
              <button>
                <img src={search} alt="search"></img>
              </button>
            </div>
            <div className="flex justify-around space-x-2">
              <div className="flex items-center border border-primary60 rounded p-1">
                <input
                  type="text"
                  className="text-[0.6rem] border-none "
                  placeholder="filter"></input>
                <button>
                  <img src={filter} alt="search"></img>
                </button>
              </div>
              <div className="flex items-center border border-primary60 rounded p-1">
                <input
                  type="text"
                  className="text-[0.6rem] border-none "
                  placeholder="sort by status"></input>
                <button>
                  <img src={filter} alt="search"></img>
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#B14330] italic">
            You have one unread message
          </p>
          <div className=" w-[90%] mt-6 flex items-center gap-6 bg-[#006D44] px-2 py-3 rounded text-white">
            <img src={contest} alt="contest"></img>
            <div className="flex flex-col">
              <h3 className="text-lg font-roboto font-bold">Contest</h3>
              <p className="text-sm">
                Win 1000 Recoin. XtraGreen just started a contest for all
                interested pickers.
              </p>
            </div>
            {open ? (
              <button
                className="rounded bg-primary60 w-[10%] p-2 flex flex-col items-center"
                onClick={handleClick}>
                <p className="italic">Read less</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-up"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="rounded bg-primary60 w-[10%] p-2 flex flex-col items-center"
                onClick={handleClick}>
                <p className="italic">Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="w-[90%] mt-6 flex items-center gap-6 bg-[#006D44] px-2 py-3 rounded text-white">
            <img src={approved} alt="approved"></img>
            <div className="flex flex-col">
              <h3 className="text-lg font-roboto font-bold">Approved</h3>
              <p className="text-sm">
                Your transaction has been approved by Safe.ru and you have been
                credited 50 RC.
              </p>
            </div>
            {open ? (
              <button
                className="rounded bg-primary60 w-[10%] p-2 flex flex-col items-center"
                onClick={handleClick}>
                <p className="italic">Read less</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-up"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="rounded bg-primary60 w-[10%] p-2 flex flex-col items-center"
                onClick={handleClick}>
                <p className="italic">Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="w-[90%] mt-6 flex items-center gap-6 bg-[#006D44] px-2 py-3 rounded text-white">
            <img src={pending} alt="pending"></img>
            <div className="flex flex-col">
              <h3 className="text-lg font-roboto font-bold">Pending</h3>
              <p className="text-sm">
                You just made a pla1stic deposit to Safe.ru. Your transaction
                awaits approval
              </p>
            </div>
            {open ? (
              <button
                className="rounded bg-primary60 w-[10%] p-2 flex flex-col items-center"
                onClick={handleClick}>
                <p className="italic">Read less</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-up"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="rounded bg-primary60 w-[10%] p-2 flex flex-col items-center"
                onClick={handleClick}>
                <p className="italic">Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    }
    />
  );
};

export default Notifications;
