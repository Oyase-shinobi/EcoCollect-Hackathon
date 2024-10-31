/* eslint-disable react/prop-types */
import { ethers } from 'ethers';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import closeIcon from "../../assets/close.svg";
import eyesOpenIcon from '../../assets/eyeOpenIcon.svg';
import eyesIcon from '../../assets/eyesIcon.svg';
import tickIcon from '../../assets/tickIcon.svg';
import AdminDashboardLayout from '../../components/dashboard_components/AdminDashboardLayout';
import { useRecycleContract } from '../../context/RecycleContractProvider';
import { useTokenContract } from '../../context/TokenProvider';
import { AdminDashboardData } from '../../data/AdminDashboardData';

// mint token tab
const MintTokenTab = ({toggleClose}) => {

    const {mintTokens } = useTokenContract();
    const [loading, setLoading] = useState(false);
    const [recipientAddress, setRecipientAddress] = useState('');
    const [mintAmount, setmintAmount] = useState(0);
    const [isMintChecked, setisMintChecked] = useState(false)


    
    const mintToken = async () => {
        
        if (!recipientAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input recipient address',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
            })
        }
        else if (!mintAmount) {
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
        else if(!isMintChecked) {
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
            setLoading(true);
        const mint_amt = ethers.utils.parseEther(mintAmount)
        await mintTokens(recipientAddress, mint_amt);
        setLoading(false);
        }

    }
  return   <div className="h-full bg-[#005232] mx-auto flex flex-col justify-start text-white p-10 font-montserrat">
    {/* header */}
    <div className='relative'>
        {/* title */}
        <h1 className=' text-[1.5rem] font-[700] text-center'>Mint Token</h1>
        {/* close button */}
        <button className="absolute -right-4 -top-8" onClick={toggleClose}>
            <img src={closeIcon} alt="close-icon" className=" w-[25px] h-[25px]" />
        </button>
    </div>

    {/* body */}

            <div className='w-[75%] mx-auto mt-[2rem] flex flex-col'>
                {/* recipient's address */}
                <label htmlFor="recipientAddress" className=' mb-0  text-[16px] font-[600]'>Recipient's Address</label>
                <input type="text" name="recipientAddress" id="recipientAddress"
                    onChange={(adr) => setRecipientAddress(adr.target.value)}
                    className="outline-none border-b-2 border-b-white bg-[#005232] px-2 mt-0 mb-[2.5rem]"
                /> 
                {/* amount to transfer */}
                <label htmlFor="mintAmount" className=' text-[16px] font-[600] mb-0'>Amount</label>
                <input type="number" name="mintAmount" id="mintAmount"
                    onChange={(amt) => setmintAmount(amt.target.value)}
                    className="outline-none border-b-2 border-white bg-[#005232] px-2 mt-0"
                />
                {/* checkbox */}
                <div className="flex mt-[2.5rem]">
                    <label htmlFor="check_box"
                        onClick={() => setisMintChecked(!isMintChecked)}
                        className = {`relative h-6 w-6 p-[2px] mr-1 bg-[#158B5E] border-[2px] border-white transition duration-150 ease-in-out`}
                    >
                        {isMintChecked ? <img src={tickIcon} alt="tick-icon" className='absolute top-1 left-1 h-3 w-3' /> : ""}
                    </label>
                    
                    <span className=" w-[9rem]  ml-1 italic font-[400]  text-[0.8rem]">I am sure the details I provided are correct</span>
                </div>
                {/* submit button */}
                <button 
                    className="w-[5rem] border-2 border-white rounded-lg p-2 bg-[#158B5E] my-6 text-[0.7rem] font-[600]"
                    onClick={mintToken}
                >
                    {loading ? "Loading..." : "Mint Token"}
                </button>
            </div>
        {/* :
            <div className='h-full transition-all duration-500 '>
                <div className='w-[5rem] h-[5rem] mx-auto mt-[6rem] bg-white flex justify-center items-center rounded-full'>
                    <img src={tickGreenIcon} alt="succes-icon" className='w-[3.2rem] h-[3.2rem]' />
                </div>
                <h2 className='mt-[5.5rem] text-[1rem] font-[600] text-center'>Token Minted Successfully.</h2>
            </div>
    } */}
    </div>
}

// transfer token tab
const TransferTokenTab = ({toggleClose}) => {

    const { transferTokens } = useTokenContract();

    const [loading, setLoading] = useState(false);
    const [recipientAddress, setRecipientAddress] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);
    const [isTransferChecked, setisTransferChecked] = useState(false);

    const transferToken = async () => {

        if (!recipientAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input recipient address',
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
            setLoading(true);
            const transfer_amt = ethers.utils.parseEther(transferAmount)
           await transferTokens(recipientAddress, transfer_amt)
            setLoading(false);
        }
    }
    
    return   <div className="h-full bg-[#005232] mx-auto flex flex-col justify-start text-white p-10">
    {/* header */}
    <div className='relative'>
        {/* title */}
        <h1 className=' text-[1.5rem] font-[700] text-center'>Transfer Token</h1>
        {/* close button */}
        <button className="absolute -right-4 -top-8" onClick={toggleClose}>
            <img src={closeIcon} alt="close-icon" className=" w-[25px] h-[25px]" />
        </button>
    </div>

    {/* body */}

            <div className='w-[75%] mx-auto mt-[2rem] flex flex-col'>
                {/* recipient's address */}
                <label htmlFor="transferRecipientAddress" className=' mb-0  text-[16px] font-[600]'>Recipient's Address</label>
                <input type="text" name="transferRecipientAddress" id="transferRecipientAddress"
                    onChange={(tfr) => setRecipientAddress(tfr.target.value)}
                    className="outline-none border-b-2 border-b-white bg-[#005232] px-2 mt-0 mb-[2.5rem]"
                /> 
                {/* amount to transfer */}
                <label htmlFor="transferAmount" className=' text-[16px] font-[600] mb-0'>Amount</label>
                <input type="number" name="transferAmount" id="transferAmount"
                    onChange={(trfAmt) => setTransferAmount(trfAmt.target.value)}
                    className="outline-none border-b-2 border-white bg-[#005232] px-2 mt-0"
                />
                {/* checkbox */}
                <div className="flex mt-[2.5rem]">
                    <label htmlFor="check_box"
                        onClick={() => setisTransferChecked(!isTransferChecked)}
                        className = {`relative h-6 w-6 p-[2px] mr-1 bg-[#158B5E] border-[2px] border-white transition duration-150 ease-in-out`}
                    >
                        {isTransferChecked ? <img src={tickIcon} alt="tick-icon" className='absolute top-1 left-1 h-3 w-3' /> : ""}
                    </label>
                    
                    <span className=" w-[9rem]  ml-1 italic font-[400]  text-[0.8rem]">I am sure the details I provided are correct</span>
                </div>
                {/* submit button */}
                <button 
                    className="w-[10rem] border-2 border-white rounded-lg p-2 bg-[#158B5E] my-6 text-[0.7rem] font-[600]"
                    onClick={transferToken}
                >
                {loading ? "Loading..." : "Transfer Token"}
                </button>
            </div>
        {/* :
            <div className='h-full transition-all duration-500 '>
                <div className='w-[5rem] h-[5rem] mx-auto mt-[6rem] bg-white flex justify-center items-center rounded-full'>
                    <img src={tickGreenIcon} alt="succes-icon" className='w-[3.2rem] h-[3.2rem]' />
                </div>
                <h2 className='mt-[5.5rem] text-[1rem] font-[600] text-center'>Token transferred Successfully.</h2>
            </div>
    } */}
    </div>
}

// delegate token
const DelegateTokenTab = ({toggleClose}) => {

    const {transferFrom,} = useTokenContract()

    const [loading, setLoading] = useState(false);
    const [senderAddress, setSenderAddress] = useState('');
    const [recipientAddress, setRecipient] = useState('');
    const [maxAmount, setMaxAmount] = useState(0);
    const [isApprovalChecked, setisApprovalChecked] = useState(false);

    const TransferFrom =  async() => {

        if (!senderAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input approver address',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
            })
        }
        else if (!recipientAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input delegate address',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
            })
        }
        else if (!maxAmount) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input maximum amount',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
            })
        } 
        else if(!isApprovalChecked) {
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
            setLoading(true)
            const max_amt = ethers.utils.parseEther(maxAmount)
            await transferFrom(senderAddress, recipientAddress, max_amt)
            setLoading(false)
        }
    }

    return  <div className="h-full bg-[#005232] mx-auto flex flex-col justify-start text-white p-10">
    {/* header */}
    <div className='relative'>
        {/* title */}
        <h1 className=' text-[1.5rem] font-[700] text-center'>Delegate Token</h1>
        {/* close button */}
        <button className="absolute -right-4 -top-8" onClick={toggleClose}>
            <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
        </button>
    </div>
        <p className='  text-[13px] font-[400] italic'>NB: This function allows you to permit an 
            address to transfer on your behalf.  
            Ensure to check the details before you approve.
        </p>
     {/* body */}
  
            <div className='w-[75%] mx-auto mt-[2rem] flex flex-col'>
                {/* approver's address */}
                <label htmlFor="approverAddress" className=' mb-0  text-[16px] font-[600]'>Sender Address</label>
                <input type="text" name="approverAddress" id="approverAddress"
                    onChange={(apr) => setSenderAddress(apr.target.value)}
                    className="outline-none border-b-2 border-b-white bg-[#005232] px-2 mt-0 mb-[2.5rem]"
                /> 
                {/* delegate's address */}
                <label htmlFor="delegateAddress" className=' mb-0  text-[16px] font-[600]'>Recipient Address</label>
                <input type="text" name="delegateAddress" id="delegateAddress"
                    onChange={(apr) => setRecipient(apr.target.value)}
                    className="outline-none border-b-2 border-b-white bg-[#005232] px-2 mt-0 mb-[2.5rem]"
                /> 
                {/* amount to transfer */}
                <label htmlFor="maxAmount" className=' text-[16px] font-[600] mb-0'>Amount</label>
                <input type="number" name="maxAmount" id="maxAmount"
                    onChange={(maxAmt) => setMaxAmount(maxAmt.target.value)}
                    className="outline-none border-b-2 border-white bg-[#005232] px-2 mt-0"
                />
                {/* checkbox */}
                <div className="flex mt-[2.5rem]">
                    <label htmlFor="check_box"
                        onClick={() => setisApprovalChecked(!isApprovalChecked)}
                        className = {`relative h-6 w-6 p-[2px] mr-1 bg-[#158B5E] border-[2px] border-white transition duration-150 ease-in-out`}
                    >
                        {isApprovalChecked ? <img src={tickIcon} alt="tick-icon" className='absolute top-1 left-1 h-3 w-3' /> : ""}
                    </label>
                    
                    <span className=" w-[9rem]  ml-1 italic font-[400]  text-[0.8rem]">I am sure the details I provided are correct</span>
                </div>
                {/* submit button */}
                <button 
                    className="w-[10rem] border-2 border-white rounded-lg p-2 bg-[#158B5E] my-6 text-[0.7rem] font-[600]"
                    onClick={TransferFrom}
                >
                    {loading ? "Loading..." : "Approve Token"}
                </button>
            </div>
        {/* :
            <div className='h-full transition-all duration-500 '>
                <div className='w-[5rem] h-[5rem] mx-auto mt-[6rem] bg-white flex justify-center items-center rounded-full'>
                    <img src={tickGreenIcon} alt="succes-icon" className='w-[3.2rem] h-[3.2rem]' />
                </div>
                <h2 className='mt-[5.5rem] text-[1rem] font-[600] text-center'>Delegate Approval Successfully.</h2>
            </div>
    } */}
    </div>
}

// burn token
const BurnToken = ({toggleClose}) => {

    const { burnTokens} = useTokenContract();

    const [loading, setLoading] = useState(false);
    const [burnAmount, setBurnAmount] = useState(0);
    const [isBurnChecked, setisBurnChecked] = useState(false);

    const burnToken = async() => {
        if (!burnAmount) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Input amount to burn',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
            })
        } 
        else if(!isBurnChecked) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'You need to agree that the details proivided are correct',
                confirmButtonColor:"#006D44",
                customClass: {
                    icon: "font-montserrat",
                    title: " font-montserrat text-[20px] text-[#000] font-[600]",
                    text: "font-montserrat, text-[16px] text-[#000] font-[600]",
                }
            })
        }
        else {
            setLoading(true)
            const burn_amt = ethers.utils.parseEther(burnAmount)
           await burnTokens(burn_amt)
            setLoading(false)
        }
    }

    return   <div className="h-full bg-[#005232] mx-auto flex flex-col justify-start text-white p-10">
    {/* header */}
    <div className='relative'>
        {/* title */}
        <h1 className=' text-[1.5rem] font-[700] text-center'>Burn Token</h1>
        {/* close button */}
        <button className="absolute -right-4 -top-8" onClick={toggleClose}>
            <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
        </button>
    </div>
     {/* body */}

            <div className='w-[75%] mx-auto mt-[2rem] flex flex-col'>
            
                {/* amount to Burn */}
                <label htmlFor="burnAmount" className=' text-[16px] font-[600] mb-0'>Amount</label>
                <input type="number" name="burnAmount" id="burnAmount"
                    onChange={(burnAmt) => setBurnAmount(burnAmt.target.value)}
                    className="outline-none border-b-2 border-white bg-[#005232] px-2 mt-0"
                />
                {/* checkbox */}
                <div className="flex mt-[2.5rem]">
                    <label htmlFor="check_box"
                        onClick={() => setisBurnChecked(!isBurnChecked)}
                        className = {`relative h-6 w-6 p-[2px] mr-1 bg-[#158B5E] border-[2px] border-white transition duration-150 ease-in-out`}
                    >
                        {isBurnChecked ? <img src={tickIcon} alt="tick-icon" className='absolute top-1 left-1 h-3 w-3' /> : ""}
                    </label>
                    
                    <span className=" w-[9rem]  ml-1 italic font-[400]  text-[0.8rem]">I am sure the details I provided are correct</span>
                </div>
                {/* submit button */}
                <button 
                    className="w-[10rem] border-2 border-white rounded-lg p-2 bg-[#158B5E] my-6 text-[0.7rem] font-[600]"
                    onClick={burnToken}
                >
                    {loading ? "Loading..." : "Burn Token"}
                </button>
            </div>
        {/* :
            <div className='h-full transition-all duration-500 '>
                <div className='w-[5rem] h-[5rem] mx-auto mt-[6rem] bg-white flex justify-center items-center rounded-full'>
                    <img src={tickGreenIcon} alt="succes-icon" className='w-[3.2rem] h-[3.2rem]' />
                </div>
                <h2 className='mt-[5.5rem] text-[1rem] font-[600] text-center'>Token Burnt Successfully!</h2>
            </div>
    } */}
    </div>
}

const AdminDashboard = () => {

    const { accountBalance } = useTokenContract();
    

    const {picker_count,company_count} = useRecycleContract()

    // Component to Display for dashboard
    const [componentToDisplay, setComponentToDisplay] = useState(0);
    const [toggleBalance, setToggleBalance] = useState(false);
    const [balance, setBalance] = useState(0)

    // function to close nav content
    const toggleCLose = () => {
        setComponentToDisplay(0);
    };

    const ToggleBalance = () => {
    
            setToggleBalance(!toggleBalance)
            const account_balance = ethers.utils.formatEther(accountBalance);
            setBalance(parseInt(account_balance).toFixed(2));

        
    }

    return (
        <AdminDashboardLayout active_link={'Dashboard'} dashboard_content={

            <div className='container mx-auto w-full bg-white border-2 border-[#ECECEC]  flex flex-row'>

                {/* settings content heade and nav items*/}
                <div className='px-4 mt-10 w-full'>
                    {/* settings content header */}
                    <h2 className='text-[#71B453] italic  font-[400] text-[1rem]'>Welcome back!</h2>
                    <div className='flex flex-row items-center my-6'>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9.5H2V16.5H5V9.5Z" fill="green"/>
                            <path d="M11.5 9.5H8.5V16.5H11.5V9.5Z" fill="green"/>
                            <path d="M20 18.5H0V21.5H20V18.5Z" fill="green"/>
                            <path d="M18 9.5H15V16.5H18V9.5Z" fill="green"/>
                            <path d="M10 0.5L0 5.5V7.5H20V5.5L10 0.5Z" fill="green"/>
                        </svg>
                        <h2 className='text-primary40  font-black text-[1.6rem] ml-4'>Balance</h2>
                        <img src={toggleBalance ? eyesIcon : eyesOpenIcon} alt="eyes-icon" className='h-4 w-4 ml-20 hover:cursor-pointer' onClick={ToggleBalance} />
                    </div>
                    <h1 className='text-[#0D4D00] text-[1.6rem] font-[700]  my-4'>{!toggleBalance ? "XXXXX"  : balance }</h1>
                    <div className='w-[22.5rem] text-black text-[1rem] flex flex-row p-2 mt-10 bg-[#d9d9d975]'>
                        <p className=' font-[500]'>Total Number of Registered Companies:</p>
                        <p className='font-[700] ml-2'>{ company_count.toString()}</p>
                    </div>
                    <div className='w-[22.5rem] text-black text-[1rem]  flex flex-row p-2 mt-4 mb-8 bg-[#d9d9d975]'>
                        <p className='font-[500]'>Total Number of Registered Pickers:</p>
                        <p className='font-[700] ml-2'>{picker_count.toString()}</p>
                    </div>
                    {/* settings nav items */}
                    <ul className='w-full h-full'>
                        {
                            AdminDashboardData.map((item, index) =>
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
                        componentToDisplay === 1 ? <MintTokenTab 
                            toggleClose={toggleCLose} 
                        /> 
                        : componentToDisplay === 2 ? <TransferTokenTab 
                            toggleClose={toggleCLose}
                        /> 
                        : componentToDisplay === 3 ? <DelegateTokenTab 
                            toggleClose={toggleCLose}
                        /> 
                        : componentToDisplay === 4 ? <BurnToken 
                        /> 
                        : ""
                    }

                </div>
            </div>
            
        }/>
    )
}

export default AdminDashboard