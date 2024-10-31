import companyIcon from '../../assets/companyGreen.svg'
import search from '../../assets/search.svg'
import AdminDashboardLayout from '../../components/dashboard_components/AdminDashboardLayout'
import { CompanyData } from '../../data/CompanyData'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useRecycleContract } from '../../context/RecycleContractProvider'

const PaginatedContent = ({currentData}) => {
    return <table className='w-full mt-10 '>
    <tbody>
    {
       currentData.map((item, index) =>
        <tr className='w-full h-[4rem] text-[16px] justify-start align-bottom border-b-2 border-[#005232]' key={index} >
             <td className='text-[#005232] w-2/3'>{item.companyAddress}</td>
            <td className='text-[#005232] w-1/3'>{item.name}</td>
            <td className={`italic w-1/3 ${item.active == "active" ? 'text-[#005232]' : 'text-[#A5DAEF]'}`}>{item.active? "active" : "inactive"}</td>
          
        </tr>
        )
    }
     </tbody>
 </table>
}

const PaginationComponent = ({numberOfPages, current_page, set_current_page}) => {

    const page_number = Array.from(Array(numberOfPages + 1).keys()).slice(1);

    const next_page = () => {
        if(current_page !== numberOfPages){
            set_current_page(current_page +1)
        }
    }

    const previous_page = () => {
        if(current_page !== 1) {
            set_current_page(current_page -1)
        }
    }

    return <nav>
          {/* navigation buttons */}
        <div className='flex flex-row justify-between mt-4'>
            {/* back button */}
            <button 
                className='w-[8.2rem] h-[3.75rem] rounded-[0.9rem] italic bg-[#F2FAF7] text-[#005232]'
                onClick={previous_page}
            >Back
            </button>

           {/* page buttons */}
            {
                page_number.map(index => 
                    <button key={index} onClick={() => set_current_page(index)} 
                        className={`${current_page === index ? 'w-[8.2rem] h-[3.75rem] rounded-[0.9rem] italic bg-[#F2FAF7] text-[#005232]' : ""}`}
                    >
                        {index}
                    </button>
                )
            
            }
            {/* next button */}
            <button 
                className='w-[8.2rem] h-[3.75rem] rounded-[0.9rem] italic bg-[#F2FAF7] text-[#005232]'
                onClick={next_page}
            >Next</button>
        </div>
    </nav>
    
}

const Companies = () => {
    const {companies:CompanyData} = useRecycleContract()
    // const DATA_PER_PAGE = 6;

    // fetch and save data using useEffect and setCompanyData
    const [ DATA_PER_PAGE] = useState(6)
    const [companyData, setCompanyData] = useState([]);
    const [current_page_no, set_current_page] = useState(1);

    const number_of_pages = Math.ceil(CompanyData.length / DATA_PER_PAGE)
    const last_record_index = current_page_no * DATA_PER_PAGE;
    const first_record_index = last_record_index - DATA_PER_PAGE;
    const current_data = CompanyData.slice(first_record_index, last_record_index);
    
  return (
    <AdminDashboardLayout active_link={'Companies'} dashboard_content={
        <div className='bg-white p-8'>
            {/* header */}
            <div className='flex flex-row justify-between items-center '>
                <div className='flex flex-row'>
                    <img src={companyIcon} alt="company-icon" />
                    <h2 className='text-[2.2rem] text-primary60 font-montserrat font-[700] ml-8'>Companies</h2>
                </div>
                <div className="flex items-center h-[30px] border border-primary60 rounded-[10px] px-2 py-1 gap-2 bg-white">
                    <input
                        type="text"
                        className=" text-[0.75rem] italic font-montserrat font-[200] border-none outline-none py-1"
                        placeholder="Search company"
                    />
                    <img src={search} alt="search-icon" className='h-[12px] w-[12px]'/>
                </div>
                <input
                    type="text"
                    className=" h-[30px] text-[0.75rem] italic font-montserrat font-[200] px-2 py-1 border border-primary60 rounded-[10px] outline-none"
                    placeholder="filter">
                </input>
                <input
                    type="text"
                    className=" h-[30px] text-[0.75rem] italic font-montserrat font-[200] px-2 py-1 border border-primary60 rounded-[10px]  outline-none"
                    placeholder="sort by status">
                </input>

            </div>
           
            <PaginatedContent currentData={current_data} />

            <PaginationComponent 
                numberOfPages = {number_of_pages}
                current_page = {current_page_no}
                set_current_page = {set_current_page}
            />
        </div>
      }
    />
  )
}

export default Companies