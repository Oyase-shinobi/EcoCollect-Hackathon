import { ethers } from 'ethers';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import closeIcon from "../../assets/close.svg";
import eyesOpenIcon from '../../assets/eyeOpenIcon.svg';
import eyesIcon from '../../assets/eyesIcon.svg';
import tickIcon from '../../assets/tickIcon.svg';
import UserDashboardLayout from '../../components/dashboard_components/UserDashboardLayout';
import { useRecycleContract } from '../../context/RecycleContractProvider';
import { useTokenContract } from '../../context/TokenProvider';
import { DepositTransaction } from "../../data/DepositTransactionData";

// deposit plastic content
const DepositPlasticTab = ({ toggleClose }) => {
    const { account_category,  depositPlastic} = useRecycleContract();
    const [loading, setLoading] = useState(false);
    const [companyAddress, setCompanyAddress] = useState('');
    const [plasticWeight, setPlasticWeight] = useState('');
    const [isTermsChecked, setisTermsChecked] = useState(false)

    const DepositPlastic =  async() => {
        if (!companyAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input company address!',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
              })
        } else if (plasticWeight.length == 0){
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input plastic weight',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
              })
        }
        else if (!isTermsChecked) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Agree to Recylox Terms',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
              })
        } else {
            setLoading(true);
            const plastic_weight = Math.floor(Number(plasticWeight))
          await  depositPlastic(companyAddress, plastic_weight)
            setLoading(false);
            // if (isMethodCallSuccessful) {
            //     ` ${Swal.fire({
            //         icon: 'success',
            //         title: 'Success!',
            //         text: 'Plastic deposited successfully!',
            //       })}`
            // }
        }
    }

    return (
        <div className="bg-[#005232] w-full mx-auto flex flex-col justify-start text-white p-10">
            {/* close button */}
            <button className="flex flex-row justify-end" onClick={toggleClose}>
                <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
            </button>
            <h1 className="font-bold text-2xl my-8">Deposit Plastic</h1>
            {/* company name */}
            <label htmlFor="companyAddress">Company Address</label>
            <input type="text" name="companyAddress" id="companyAddress"
                   onChange={(fn) => setCompanyAddress(fn.target.value)}
                   className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-4"
            />
            {/* plastic weight */}
            <label htmlFor="depositPlastic">Plastic Weight (kg)</label>
            <input type="number" name="depositPlastic" id="depositPlastic"
                   onChange={(ln) => setPlasticWeight(ln.target.value.trim())}
                   className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-4"
            />
            <div className="flex">
                <input type="checkbox" name="depositPlastic" id="depositPlastic"
                       className="h-6 w-6 mr-1"
                       onChange={() => setisTermsChecked(!isTermsChecked)}
                       value={isTermsChecked}
                />
                <span className="mr-1">I am sure the details I provided are correct</span>
            </div>
            {/* submit button */}
            <button 
                className="w-[60%] border-2 border-white rounded-lg p-2 bg-[#006D44] my-6"
                onClick={DepositPlastic}
            >
                 {loading ? "Loading..."  : "Deposit Plastic" }
            </button>
        </div>
    );
};

// transaction tab content
const TransactionTab = ({ toggleClose }) => {

    const {pickerTransactionHistory} = useRecycleContract();

    // set toggle state

    return (<>
        <div className='bg-[#005232] w-full h-full flex flex-col justify-start text-white p-4'>
            {/* close button */}
            <button className='flex flex-row justify-end' onClick={toggleClose}>
                <img src={closeIcon} alt="close-icon" className='w-8 h-8' />
            </button>
            <h1 className='font-bold text-2xl my-8'>Transactions</h1>

{pickerTransactionHistory.map((item, index) => (
      <div  key={index} className="bg-[#ffffff] flex rounded-lg m-2 p-2 flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
          <div className="font-sans font-bold uppercase text-black text-[12px]">Total Value</div>
          <div className="text-green-800 text-[10px]">{ethers.utils.formatEther(item[4])}</div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
          <div className="font-sans font-bold uppercase text-black text-[12px]">TOTAL WEIGHT</div>
          <div className="text-green-800 text-[10px]">{parseInt(item[3])} KG</div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1">
          <div className="font-sans font-bold uppercase text-black text-[12px]">TRANSACTION ID</div>
          <div className="text-green-800 text-[10px]"><i>{parseInt(item[0])}</i></div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 items-center p-1 text-right">
          <div className="uppercase font-bold text-black p-2 text-xs"><i className="">X</i></div>
          {/* <div className="text-green-800 text-[8px]"><span><em>5th May 2020, 12:23</em></span></div> */}
      </div>
  </div>
))}
         
          
           
        </div>
    </>)
}

// transfer reccoin tab
const TransferRecyloxTab = ({toggleClose, account_category}) => { 
     const {transferTokens} = useTokenContract();
const [loading, setLoading] = useState(false);
    const [recipientAddress, setRecipientAddress] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);
    const [isTransferChecked, setIsTransferChecked] = useState(false);

    const transferToken = async () => {

        if (!recipientAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input recipient address!',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
              })
        }
        else if (!transferAmount) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input transfer amount',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
              })
        } 
        else if(!isTransferChecked) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Agree to Recylox terms',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
              })
        }
        else {
            const transfer_amt = ethers.utils.parseEther(transferAmount);
            setLoading(true);
            await transferTokens(recipientAddress, transfer_amt);
            setLoading(false);
        }
    }
    
  return   <div className="bg-[#005232] w-full mx-auto flex flex-col justify-start text-white p-10">
    {/* header */}
    <div className='relative'>
        {/* title */}
        <h1 className='font-montserrat text-[1.5rem] font-[700] text-center my-8'>Transfer Recyclox</h1>
        {/* close button */}
        <button className="absolute right-0 -top-4" onClick={toggleClose}>
            <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
        </button>
    </div>
    {/* recipient's address */}
    <label htmlFor="recipientAddress" className='font-montserrat text-[16px] font-[600]'>Recipient's Address</label>
    <input type="text" name="recipientAddress" id="recipientAddress"
        onChange={(adr) => setRecipientAddress(adr.target.value)}
        className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2 mb-[2.5rem]"
    />
    {/* amount to transfer */}
    <label htmlFor="transferAmount" className='font-montserrat text-[16px] font-[600]'>Amount</label>
    <input type="number" name="transferAmount" id="transferAmount"
        onChange={(amt) => setTransferAmount(amt.target.value)}
        className="outline-none border-2 border-x-0 border-t-0 bg-[#005232] p-2"
    />
    {/* checkbox */}
    <div className="flex mt-[1.4rem]">
        <label htmlFor="check_box"
            onClick={() => setIsTransferChecked(!isTransferChecked)}
            className = {`relative h-6 w-6 p-[2px] mr-1 ${isTransferChecked ? 'bg-[#158B5E]' : ""} border-[2px] border-white transition duration-150 ease-in-out`}
        >
            {isTransferChecked ? <img src={tickIcon} alt="tick-icon" className='absolute top-1 left-1 h-3 w-3' /> : ""}
        </label>
        
        <span className="mr-1 italic font-[400] font-montserrat text-[0.8rem]">I am sure the details I provided are correct</span>
    </div>
    {/* submit button */}
    <button className="w-[60%] border-2 border-white rounded-lg p-2 bg-[#158B5E] my-6"
    onClick={transferToken}>
    {loading ? "Loading..." : "TRANSFER"}
    </button>
    </div>

}

const UserDashboard = () => {
    const { tokenHolderBalance ,picker_count, account_category} = useRecycleContract()
    {picker_count}

    // Component to Display for dashboard
    const [componentToDisplay, setComponentToDisplay] = useState(0);
    const [toggleBalance, setToggleBalance] = useState(false);
    const [balance, setBalance] = useState(0);

    // function to close nav content
    const toggleCLose = () => {
        setComponentToDisplay(0);
    };



    return (
        <UserDashboardLayout active_link={'Dashboard'} dashboard_content={
            <>
                <div className=' bg-white border-2 border-[#ECECEC]'>

                    {/* settings main content  */}
                    <div className='flex flex-row w-full'>

                        {/* settings content heade and nav items*/}
                        <div className='px-4 mt-10 w-full'>
                            {/* settings content header */}
                            <h2 className='text-[#71B453] italic font-montserrat font-[400] text-[1rem]'>Welcome back!</h2>
                            <div className='flex flex-row items-center my-6'>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9.5H2V16.5H5V9.5Z" fill="green"/>
                                    <path d="M11.5 9.5H8.5V16.5H11.5V9.5Z" fill="green"/>
                                    <path d="M20 18.5H0V21.5H20V18.5Z" fill="green"/>
                                    <path d="M18 9.5H15V16.5H18V9.5Z" fill="green"/>
                                    <path d="M10 0.5L0 5.5V7.5H20V5.5L10 0.5Z" fill="green"/>
                                </svg>
                                <h2 className='text-primary40 font-montserrat font-black text-[1.6rem] ml-4'>Balance</h2>
                                <img src={toggleBalance ? eyesOpenIcon : eyesIcon} alt="eyes-icon" className='h-4 w-4 ml-20 hover:cursor-pointer' onClick={()=>setToggleBalance(!toggleBalance) } />
                            </div>
                            <h1 className='text-[#0D4D00] text-[1.6rem] font-[700] font-montserrat my-4'>{toggleBalance ? ethers.utils.formatEther(tokenHolderBalance) : "XXXXX"}</h1>
                            {/* settings nav items */}
                            <ul className='w-full'>
                                {
                                    DepositTransaction.map((item, index) =>
                                        <Link to={item.user_a_link} key={index} 
                                            onClick={() => setComponentToDisplay(index+1)}
                                            className=' flex flex-row bg-[rgba(0, 109, 68, 0.01)] border-2 border-[#ECECEC] p-3 mb-4 items-center rounded-lg active:bg-[rgba(0, 109, 68, 0.33)]'>
                                            <img src={item.icon} alt={`${item.title} icon`} className='mr-4'/>
                                            <h1>{item.title}</h1>
                                        </Link>
                                    )
                                }
                            </ul>
                        </div>

                        {/* settings display nav content */}
                        <div className='w-full'>

                            {
                                componentToDisplay === 1 ? <DepositPlasticTab 
                                    toggleClose={toggleCLose}
                                /> 
                                : componentToDisplay === 2 ? <TransactionTab toggleClose={toggleCLose}/> 
                                : componentToDisplay === 3 ? <TransferRecyloxTab 
                                account_category={account_category}  toggleClose={toggleCLose}
                                /> 
                                : ""
                            }

                        </div>
                    </div>
                </div>
            </>
        }/>
    )
}

export default UserDashboard