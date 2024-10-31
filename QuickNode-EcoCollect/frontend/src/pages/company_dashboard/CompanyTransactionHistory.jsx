import { ethers } from "ethers";
import { CgSearch } from "react-icons/cg";
import { TbArrowsRightLeft } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";
import copyIcon from '../../assets/copyIcon.svg';
import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";
import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRecycleContract } from "../../context/RecycleContractProvider";

const PaginatedContent = ({currentData}) => {

    const CopyText = (text) => {
        navigator.clipboard.writeText(text)
        Swal.fire({
            icon: 'success',
            title: 'Address Copied!',
            text: `Picker address: ${text}`,
            confirmButtonColor:"#006D44",
            customClass: {
                icon: "font-montserrat",
                title: " font-montserrat text-[20px] text-[#000] font-[600]",
                text: "font-montserrat, text-[16px] text-[#000] font-[600]",
            },
        })
      }
    
    return   <>
        {   
            currentData.map((transaction, index) => (
                <div
                key={index}>
                <table className="mt-8 min-w-full border border-primary40 rounded-[10px]">
                    <thead>
                    <tr className=" ">
                        <th className="px-2 py-1">
                        <span className="font-semibold">TRANSACTION ID</span>
                        </th>
                        <th className="px-2 py-1">
                        <span className="font-semibold">ADDRESS</span>
                        </th>
                        {/* <th className="px-2 py-1">
                        <span className="font-semibold">ORIGIN</span>
                        </th> */}
                        <th className="px-2 py-1">
                        <span className="font-semibold">TOTAL WEIGHT</span>
                        </th>
                        <th className="px-2 py-1">
                        <span className="font-semibold">TOTAL VALUE</span>
                        </th>
                        <th className="px-2 py-1">
                        <div className="flex justify-end">
                            <img
                            className={`h-7 w-7 p-2 ${transaction[5] == false ? "bg-red-700" : "bg-green-700"}`}
                            src={transaction[5] === false ? stateRed : stateGreen}
                            alt="State Icon Green"
                            />
                        </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="text-primary40 text-xs md:text-lg font-extrabold">
                        <td className="px-2 py-1 text-center ">{transaction[0].toString()}</td>
                        <td className="px-2 py-1 text-center flex flex-row justify-center">
                        {`${transaction[2].slice(0,5)}...${transaction[2].slice(transaction[2].length-5, transaction[2].length)}`}
                            <img src={copyIcon} alt="copy-address"  
                                className='ml-2 cursor-pointer'
                                onClick={() => CopyText(transaction[2])}
                            />
                    </td>
                        <td className="px-2 py-1 text-center ">{parseInt(transaction[3].toString())} KG </td>
                        <td className="px-2 py-1 text-center ">{parseInt(transaction[3].toString()) * ethers.utils.formatEther(transaction[4].toString())}</td>
                        <td className="px-2 py-1 items-end text-right">
                        <ul>
                            {/* <li className="text-xs font-bold text-gray-500">{transaction.date}</li> */}
                            <li
                            className={`font-extrabold ${transaction[5] === false ? "text-red-700" : "text-green-700"
                                }`}
                            >
                            {transaction[5].toString()}
                            </li>
                        </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            ))
        }
    </>
}

const PaginationControl = ({number_of_pages, current_page_no, set_current_page_no}) => {

    const array_of_page_number = Array.from(Array(number_of_pages + 1).keys()).slice(1);

    const next_page = () => {
        if (current_page_no !== number_of_pages) {
            set_current_page_no(current_page_no + 1)
        }
    }

    const previous_page = () => {
        if (current_page_no !== 1) {
            set_current_page_no (current_page_no -1)
        }
    }

    return <div className="flex items-center justify-between p-4 ">
        <p className="font-montserrat text-black/25">{current_page_no} out of {number_of_pages}</p>
        <div className="flex items-center gap-4 text-primaryLight font-semibold">
        <p className="cursor-pointer" onClick={previous_page}>Previous</p>
        <div className="flex items-center gap-4">
           
            {
                array_of_page_number.map((page_number, index) =>
                    <p className={`font-bold ${current_page_no == page_number ? 'text-primary50' : 'text-primaryLight'} cursor-pointer`}
                        onClick={() => set_current_page_no(page_number)}
                        key={index}
                    >
                        {page_number}
                    </p>
                )
            }
            {/* <p className="font-light cursor-pointer"
                    onClick={set_current_page_no(array_of_page_number[array_of_page_number.length - 1])}
            >
                {array_of_page_number[array_of_page_number.length - 1]}
            </p> */}
           
            
            
        </div>
        <p className="cursor-pointer" onClick={next_page}>Next</p>
        </div>
    </div>
}


const CompanyTransactionHistory = () => {

    const {companyTransactionHistory} = useRecycleContract();

    const [filterId, setFilterId] = useState('');
    
    const filteredTransactionData = companyTransactionHistory.filter((transaction) => {
 
        const transaction_id = transaction[0].toString();
        return transaction_id.includes(filterId)
    })

    const [TRANSACTION_PER_PAGE] = useState(4);
    const [current_page_no, set_current_page_no] = useState(1);
    const total_no_of_pages = Math.ceil(companyTransactionHistory.length / TRANSACTION_PER_PAGE);
    const last_page_index = current_page_no * TRANSACTION_PER_PAGE;
    const first_page_index = last_page_index - TRANSACTION_PER_PAGE;
    const current_transaction = filteredTransactionData.slice(first_page_index, last_page_index);

  return (
    <CompanyDashboardLayout active_link={"Transactions"}
      dashboard_content={
        <div className=" bg-white px-8">

          {/* Transactions title */}
            <div className="flex items-center gap-3">
                <TbArrowsRightLeft className="text-primary50 text-[29px]" />
                <p className="font-montserrat text-primary50 font-bold text-[35px]">Transactions</p>
            </div>
            <p className="leading-[64px] font-bold italic text-primaryLight">Welcome back. You have 1 transaction to verify.</p>
          
            {/* <div className="h-2 w-full"></div> */}
            <div className="flex justify-between">
                <div className="flex items-center w-full max-w-[382px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
                <input type="text" name="search" placeholder="Search Transactions" 
                    className="h-[60px] w-full outline-none placeholder:text-primary50/30 placeholder:font-bold"
                    onChange={(flt) => setFilterId(flt.target.value)}
                 />
                <CgSearch className="text-primary50 text-[27px] cursor-pointer" />
                </div>
                <div className="flex justify-end items-center gap-[26px] w-full max-w-[430px]">
                    <div className="flex items-center w-full max-w-[202px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
                        <input type="text" name="search" placeholder="Filter" className="h-[60px] w-full outline-none placeholder:text-primary50/30 placeholder:font-bold" />
                        <TiArrowSortedDown className="text-primary50 cursor-pointer" />
                    </div>
                    <div className="flex items-center w-full max-w-[151px] bg-white border border-primary50 rounded-[10px] clip px-2.5">
                        <input type="text" name="search" placeholder="Newest on top" className="h-[60px] w-full outline-none placeholder:text-primary50/30" />
                        <TiArrowSortedDown className="text-primary50 cursor-pointer" />
                    </div>
                </div>
            </div>
            <PaginatedContent  currentData={current_transaction}/>
            <PaginationControl
                number_of_pages={total_no_of_pages}
                current_page_no={current_page_no}
                set_current_page_no={set_current_page_no}
            />

        </div>
      }
    />

  );
};
export default CompanyTransactionHistory;