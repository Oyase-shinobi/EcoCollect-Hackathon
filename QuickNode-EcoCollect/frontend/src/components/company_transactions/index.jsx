/* eslint-disable react/prop-types */
import { TbArrowsRightLeft } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdCheck, MdClose } from "react-icons/md";

const CompanyTransactions = () => {
  return (
    <div className="bg-white py-12 px-11">
      <div className="flex items-center gap-3">
        <TbArrowsRightLeft className="text-primary50 text-[29px]" />
        <p className="font-montserrat text-primary50 font-bold text-[35px]">Transactions</p>
      </div>
      <p className="leading-[64px] font-bold italic text-primaryLight">Welcome back. You have 1 transaction to verify.</p>

      <div className="flex justify-between">
        <div className="flex items-center w-full max-w-[382px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
          <input type="text" name="search" placeholder="Search Transactions" className="h-[60px] w-full outline-none placeholder:text-primary50/30 placeholder:font-bold" />
          <CgSearch className="text-primary50 text-[27px] cursor-pointer" />
        </div>
        <div className="flex items-center gap-[26px] w-full max-w-[430px]">
          <div className="flex items-center w-full bg-white border border-primary50 rounded-[10px] clip px-2.5">
            <input type="text" name="search" placeholder="Filter" className="h-[60px] w-full outline-none placeholder:text-primary50/30 placeholder:font-bold" />
            <TiArrowSortedDown className="text-primary50 cursor-pointer" />
          </div>
          <div className="flex items-center w-full bg-white border border-primary50 rounded-[10px] clip px-2.5">
            <input type="text" name="search" placeholder="Newest on top" className="h-[60px] w-full outline-none placeholder:text-primary50/30" />
            <TiArrowSortedDown className="text-primary50 cursor-pointer" />
          </div>
        </div>
      </div>

      <Transaction date="5TH MAY 2020, 12:23" refNum="0x00ab..........x0" origin="MAINLAND 1" totalWeight="250KG" totalVal="R500" status="pending" />
      <Transaction date="5TH MAY 2020, 12:23" refNum="0x00ab..........x0" origin="MAINLAND 1" totalWeight="250KG" totalVal="R500" status="approved" />
      <Transaction date="5TH MAY 2020, 12:23" refNum="0x00ab..........x0" origin="MAINLAND 1" totalWeight="250KG" totalVal="R500" status="approved" />
      <Transaction date="5TH MAY 2020, 12:23" refNum="0x00ab..........x0" origin="MAINLAND 1" totalWeight="250KG" totalVal="R500" status="approved" />

      {/* pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-montserrat text-black/25">2 out of 34</p>
        <div className="flex items-center gap-4 text-primaryLight font-semibold">
          <p className="cursor-pointer">Previous</p>
          <div className="flex items-center gap-4">
            <p className="font-bold text-primary50 cursor-pointer">1</p>
            <p className="font-light cursor-pointer">2</p>
            <p className="font-light cursor-pointer">3</p>
            <p className="font-bold">...</p>
          </div>
          <p className="cursor-pointer">Next</p>
        </div>
      </div>
    </div>
  );
};

const Transaction = ({ date, refNum, origin, totalWeight, totalVal, status }) => {
  return (
    <div className="flex items-center justify-between gap-5 w-full bg-white border border-primary50 rounded-[10px] clip px-2.5 py-4 mt-[30px]">
      <div className="w-fit flex flex-col items-center">
        <p className="text-[15px] font-semibold">DATE AND TIME</p>
        <p className="font-extrabold text-primary50 font-montserrat">{date}</p>
      </div>
      <div className="w-fit flex flex-col items-center">
        <p className="text-[15px] font-semibold">REFERENCE NUMBER</p>
        <p className="font-extrabold text-primary50 font-montserrat">{refNum}</p>
      </div>
      <div className="w-fit flex flex-col items-center">
        <p className="text-[15px] font-semibold">ORIGIN</p>
        <p className="font-extrabold text-primary50 font-montserrat">{origin}</p>
      </div>
      <div className="w-fit flex flex-col items-center">
        <p className="text-[15px] font-semibold">TOTAL WEIGHT</p>
        <p className="font-extrabold text-primary50 font-montserrat">{totalWeight}</p>
      </div>
      <div className="w-fit flex flex-col items-center">
        <p className="text-[15px] font-semibold">TOTAL VALUE</p>
        <p className="font-extrabold text-primary50 font-montserrat">{totalVal}</p>
      </div>
      {status !== "pending" ? (
        <div className="w-fit flex flex-col items-center">
          <p className="text-[15px] font-semibold">STATUS</p>
          <p className="font-extrabold text-primary50 font-montserrat">{status.toUpperCase()}</p>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="w-[55px] h-[49px] flex items-center justify-center bg-primary50 cursor-pointer">
            <MdCheck size={24} className="text-white" />
          </div>
          <div className="w-[55px] h-[49px] flex items-center justify-center bg-[#D14646] cursor-pointer">
            <MdClose size={24} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyTransactions;
