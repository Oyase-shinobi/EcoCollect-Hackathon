import { writeContract } from '@wagmi/core';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAccount } from "wagmi";
import { getConfig } from "../../../wagmi";
import Logo from "../../components/logo";
import RegistrationHeader from "../../components/navigation/RegistrationHeader";
import { recycleABI } from "../../context/recycle-abi";
import { useRecycleContract } from "../../context/RecycleContractProvider";
import { RECYCLE_CONTRACT } from "../../utils";
const UserRegPage = () => {

  const { account_category }  =  useRecycleContract();
    const [loading, setLoading] = useState(false);
  const account = useAccount();
  const navigate = useNavigate()
  const connectedAccount = account?.address




  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isTermsChecked, setIsTermsChecked] = useState(false)


  useEffect(()=>{
    
    console.log("account category => ", account_category);
  }, [])

  const RegisterPicker = async() => {

    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = (email) => {
      return email_regex.test(email);
    }

    const validEmail = isValidEmail(userEmail);

    if (account_category) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Address already registered!',
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    } 
    else if(!connectedAccount) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Connect wallet to continue',
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    }
    else if (!userName) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Input user name',
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    } else if(!validEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Input valid email',
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
        text: 'Agree to EcoCollect Terms',
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      });
    }
     else {
      try {
        setLoading(true);
      const result = await writeContract(
        
        getConfig(), {
          
        account: account?.address,
        connector:account?.connector,
        abi:recycleABI,
        
        address: RECYCLE_CONTRACT,
        functionName: 'registerPicker',
        args: [
          userName, userEmail
        ],
      })


        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Picker created successfully!',
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
            navigate('/user-dashboard')      

    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occured during registeration',
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    
  } finally{
    setLoading(false)
  }

  }
  }
  return (
    <div className='container mx-auto'>
      <RegistrationHeader/>
      {/* <div className='my-20 w-[34rem] md:w-[62rem] lg:w-[82rem] flex flex-row justify-center'> */}
      <div className='my-20  flex flex-row justify-center'>
      <div>
        <p className='text-[1rem] md:text-[2rem] lg:text-[3.7rem] font-bold text-center'>
          User Registration Page
        </p>
        <div className='flex flex-row justify-center mt-4'>
          <div className='relative'>
            {/* <div className='w-[10rem] md:w-[22rem] lg:w-[29rem] min-h-[34rem] bg-[#F8F9FB] border border-primary40-700'> */}
            <div className='w-[10rem] md:w-[22rem] lg:min-w-[29rem] min-h-[34rem] bg-[#F8F9FB] border border-primary40-700'>
              <div className='flex flex-row mt-10 ml-10'>
                <div className='w-12 h-12 items-center '>
                  <Logo/>
                </div>
                <p className='text-[1rem] md:text-[1rem] lg:text-[1.2rem] mt-2 ml-3 text-[#0D4D00]  text-center'>
                Ecocollect
                </p>
              </div>
              <div className='ml-8'>
                <h2 className='text-[1rem] md:text-[1rem] lg:text-[1.7rem] font-bold mt-2 ml-3 text-[#0D4D00]'>
                  Registration Form
                </h2>
              </div>
              <div className='flex flex-col items-center  absolute left-16 top-40'>
                <div className='mb-6'>
                  <label
                    htmlFor='company-name'
                    className='block mb-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#0D4D00] text-left'
                  >
                  Name
                  </label>
                  <input
                    type='text'
                    className='border-b-2 w-[14rem] focus:outline-none border-[#0D4D00] bg-transparent'
                    onChange={(nme) => setUserName(nme.target.value.trim())}
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='Minimum-Weight-Requirement'
                    className='block mb-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#0D4D00] text-left'
                  >
                    Email Address
                  </label>
                  <input
                    type='text'
                    className='border-b-2 w-[14rem] focus:outline-none border-[#0D4D00] bg-transparent'
                    onChange={(eml) => setUserEmail(eml.target.value.trim())}
                  />
                </div>
              
              </div>
              <div className='flex flex-row items-center absolute bottom-36 left-10 flex-start'>
                <input
                  className='h-[1.4rem] w-[4rem] border-solid border-[#0D4D00]'
                  type='checkbox'
                  onChange={() => setIsTermsChecked(!isTermsChecked)}
                  value={isTermsChecked}
                  aria-label='Checkbox for following text input'
                />
                <p className='text-[0.5rem] md:text-[0.7rem] lg:text-[0.7rem] mt-2 w-[14rem]  text-[#0D4D00]'>
                  I agree to the terms of the EcoCollect Subscriber Agreement and
                  the Privacy Policy
                </p>
              </div>
           
              <button className='rounded-[6px] absolute bottom-20 left-16 py-1 px-6 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-medium text-[#fff] bg-[#0D4D00]'
                onClick={RegisterPicker}
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </div>
          <div className='w-[10rem] md:w-[16rem] lg:w-[21rem] min-h-[34rem] bg-[url(src/assets/company-bg.svg)]  bg-contain md:bg-cover bg-right bg-no-repeat'></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserRegPage