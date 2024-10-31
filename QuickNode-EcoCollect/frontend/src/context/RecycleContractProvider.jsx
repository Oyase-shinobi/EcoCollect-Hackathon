import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useAccount, useReadContracts } from "wagmi";
import { ADMIN_ADDRESS, RECYCLE_CONTRACT, RECYCLE_TOKEN_CONTRACT } from "../utils";
import { recyloxABI } from "./recylox-abi";
import { writeContract, readContract } from '@wagmi/core'
import { recycleABI } from "./recycle-abi";
import { getConfig } from "../../wagmi";
import Swal from "sweetalert2";
import { useTokenContract } from "./TokenProvider";
import { ethers } from "ethers";


export const RecycleContractContext = createContext()
export const useRecycleContract = () => useContext(RecycleContractContext);
const RecycleContractProvider = ({children}) => {

  const account = useAccount()
  const {approveTokens} = useTokenContract()
  // const [companyTransactionHistory, setCompanyTransactionHistory] = useState([])
  // const [pickerTransactionHistory, setPickerTransactionHistory] = useState([])



  const {data, error, isLoading,  refetch} = useReadContracts(
    {
      config: getConfig(),
    contracts: [
      {
        address: RECYCLE_CONTRACT,
        abi: recycleABI,
        functionName: "getRegisteredPickerCount",
      },
      {
        address: RECYCLE_CONTRACT,
        abi: recycleABI,
        functionName: "getRegisteredCompanyCount",
      },
      {
        address: RECYCLE_TOKEN_CONTRACT,
        abi: recyloxABI,
        functionName: "balanceOf",
        args: [account?.address],

      },
      
      {
        address: RECYCLE_CONTRACT,
        abi: recycleABI,
        functionName: "totalTransactions",
      },
      {
        address: RECYCLE_CONTRACT,
        abi: recycleABI,
        functionName: "getPicker",
        args:[account?.address]
      },
      {
        address: RECYCLE_CONTRACT,
        abi: recycleABI,
        functionName: "getCompany",
        args:[account?.address]
      },

      {
        address: RECYCLE_CONTRACT,
        abi: recycleABI,
        functionName: "getAllCompanies",
       
      }
    
    
    
    ],
   
  },)
  useEffect(() => {
    if(!account?.address) return
    refetch()
  }, [account?.address, refetch])
  
 const picker_count  = data?.[0].result || 0
const company_count = data?.[1].result || 0
const tokenHolderBalance = data?.[2].result || 0
const totalTransaction = data?.[3].result || 0
const picker = data?.[4].result || null
const company = data?.[5].result || null
const companies = data?.[6].result || []
let account_category =  account?.address?.toLocaleLowerCase() === ADMIN_ADDRESS?.toLocaleLowerCase()? "admin":""

if(picker && picker?.pickerAddress?.toLowerCase() === account?.address?.toLowerCase()){
  account_category = "picker"
}
if(company && company?.companyAddress?.toLowerCase() === account?.address?.toLowerCase()){
  account_category = "company"
}
let pickerTransactionHistory = []
let companyTransactionHistory = []
if (data && !error){
  for (let index = 0; index < totalTransaction; index++) {
 readContract(getConfig(), {
      abi: recycleABI,
      address: RECYCLE_CONTRACT,
      functionName: 'transactions',
      args: [index],
    }).then((result) => {
      const company_address = result[1].toLowerCase();
        const picker_address = result[2].toLowerCase();

        if (company_address === account?.address?.toLocaleLowerCase() ) {
        companyTransactionHistory.push(result);
        }
        if (picker_address === account?.address?.toLocaleLowerCase()) {
          pickerTransactionHistory.push(result)
        }
     

    }).catch((error) => {
      console.error('Failed to fetch transaction details:', error);
    })
    
  }  // ends transaction loop

}

const payPicker = useCallback(async (transactionId) => {
  try {

    const transactionToPayFor = await readContract(getConfig(), {
      abi: recycleABI,
      address: RECYCLE_CONTRACT,
      functionName: 'transactions',
      args: [transactionId],
    })

  const weight = BigInt(transactionToPayFor[3])
  const price = BigInt(transactionToPayFor[4])
  const amount = BigInt((weight * price))

 const res = await approveTokens(RECYCLE_CONTRACT, ethers.utils.parseUnits(amount.toString()))

    const result = await writeContract( 
      getConfig(), {
      account: account?.address,
      connector:account?.connector,
      abi:recycleABI,
      address: RECYCLE_CONTRACT,
      functionName: 'payPicker',
      args: [
        parseInt(transactionId)
      ],
    })
  
    console.log('Picker paid successfully!');
    // Additional logic or UI updates after successful payment
 
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Payment successful!',
      confirmButtonColor:"#006D44",
      // preConfirm: () => {window.location.reload()},
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    return result
  } catch (error) {
    console.error('Failed to pay picker:', error);

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Failed to pay picker: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })

    return;
  }
}, [account?.address, account?.connector])

const depositPlastic = useCallback(async (companyAddress, weight) => {
  try {
    const result = await writeContract( 
      getConfig(), {
      account: account?.address,
      connector:account?.connector,
      abi:recycleABI,
      address: RECYCLE_CONTRACT,
      functionName: 'depositPlastic',
      args: [
        companyAddress, weight
      ],
    })

    
    console.log('Plastic deposited successfully!');
    // Additional logic or UI updates after successful deposit
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Plastic deposited successfully!',
      confirmButtonColor:"#006D44",
      // preConfirm: () => {window.location.reload()},
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    return result
  } catch (error) {
    console.error('Failed to deposit plastic:', error);

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Failed to validate plastic: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
  }
}, [account?.address, account?.connector])

const validatePlastic = useCallback(async (transactionId) => {
  try {
    const result = await writeContract( 
      getConfig(), {
      account: account?.address,
      connector:account?.connector,
      abi:recycleABI,
      address: RECYCLE_CONTRACT,
      functionName: 'validatePlastic',
      args: [
        parseInt(transactionId)
      ],
    })
  
    console.log('Plastic validated successfully!');
    // Additional logic or UI updates after successful payment
 
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Picker validated successfully!',
      confirmButtonColor:"#006D44",
      // preConfirm: () => {window.location.reload()},
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    return result
  } catch (error) {
    console.error('Failed to validate picker:', error);

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Failed to validate plastic: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    return;
  }
}, [account?.address, account?.connector])


  return (
    <RecycleContractContext.Provider value={{
      companyTransactionHistory,
      pickerTransactionHistory,
      account_category,
      picker_count,
      company_count,
      tokenHolderBalance,
      totalTransaction,
      companies,
      payPicker,
      validatePlastic,
      depositPlastic
    }}>{children}</RecycleContractContext.Provider>
  )
}

export default RecycleContractProvider