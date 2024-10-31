import { writeContract } from '@wagmi/core';
import { ethers } from "ethers";
import { createContext, useCallback, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useAccount, useReadContracts } from "wagmi";
import { getConfig } from "../../wagmi";
import { ADMIN_ADDRESS, RECYCLE_TOKEN_CONTRACT } from "../utils";
import { recyloxABI } from "./recylox-abi";


export const TokenContext = createContext()
export const useTokenContract = () => useContext(TokenContext);
const TokenProvider = ({children}) => {
  const account = useAccount()
  const {data, error, isLoading, refetch} = useReadContracts({
    contracts: [
      {
        address: RECYCLE_TOKEN_CONTRACT,
        abi: recyloxABI,
        functionName: "name",
      },
      {
        address: RECYCLE_TOKEN_CONTRACT,
        abi: recyloxABI,
        functionName: "symbol",
      },
      {
        address: RECYCLE_TOKEN_CONTRACT,
        abi: recyloxABI,
        functionName: "decimals",
      },
      {
        address: RECYCLE_TOKEN_CONTRACT,
        abi: recyloxABI,
        functionName: "totalSupply",
      },
      {
        address: RECYCLE_TOKEN_CONTRACT,
        abi: recyloxABI,
        functionName: "balanceOf",
        args: [ADMIN_ADDRESS],
      },
    
    
    
    ],
   
  },)
  useEffect(() => {
    if(!account?.address) return
    refetch()
  }, [account?.address, refetch])
  

 const name  = data?.[0].result || ''
const symbol = data?.[1].result || ''
const decimals = data?.[2].result || 0
const totalSupply = data?.[3].result || 0
const accountBalance = data?.[4].result || 0

const transferTokens = useCallback(async (recipient, amount) => {

  try {
    console.log({
      recipient, amount})
    if (account?.address) {
      const result = await writeContract(
        
        getConfig(), {
          
        account: account?.address,
        connector:account?.connector,
        abi:recyloxABI,
        address: RECYCLE_TOKEN_CONTRACT,
        functionName: 'transfer',
        args: [
          recipient,
          ethers.utils.parseUnits(amount.toString())
        ],
      })
     
 
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Transfer ${parseInt(amount)} REC to ${recipient} successful!`,
        confirmButtonColor:"#006D44",
        preConfirm: () => {window.location.reload()},
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    } else {
 
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Contract is not initialized. Connect wallet to get started`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      throw new Error('Contract is not initialized.');
    }
  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Error transferring tokens: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    console.error('Error transferring tokens:', error);
  }
}, [account?.address, account?.connector])


const mint = useCallback(async (receipient, amount) => {

  try {
    if (account?.address) {
      const result = await writeContract(
        
        getConfig(), {
          
        account: account?.address,
        connector:account?.connector,
        abi:recyloxABI,
        
        address: RECYCLE_TOKEN_CONTRACT,
        functionName: 'mint',
        args: [
          receipient, amount
        ],
      })
     
 
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Minted ${ethers.utils.formatEther(amount)} REC to ${receipient} successful!`,
        confirmButtonColor:"#006D44",
        // preConfirm: () => {window.location.reload()},
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    } else {
 
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Contract is not initialized. Connect wallet to get started`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      throw new Error('Contract is not initialized.');
    }
  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Error minting tokens: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    console.error('Error minting tokens:', error);
  }
}, [account?.address, account?.connector])

const burnTokens = useCallback(async (amount) => {

  try {
    if (account?.address) {
      const result = await writeContract(
        
        getConfig(), {
          
        account: account?.address,
        connector:account?.connector,
        abi:recyloxABI,
        
        address: RECYCLE_TOKEN_CONTRACT,
        functionName: 'burn',
        args: [
          amount
        ],
      })
     
 
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Burnt ${ethers.utils.formatEther(amount)} REC successful!`,
        confirmButtonColor:"#006D44",
        // preConfirm: () => {window.location.reload()},
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    } else {
 
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Contract is not initialized. Connect wallet to get started`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      throw new Error('Contract is not initialized.');
    }
  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Error burning tokens: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    console.error('Error burning tokens:', error);
  }
}, [account?.address, account?.connector])

const approveTokens = useCallback(async (spender, amount) => {

  try {
    if (account?.address) {
      const result = await writeContract(
        
        getConfig(), {
          
        account: account?.address,
        connector:account?.connector,
        abi:recyloxABI,
        
        address: RECYCLE_TOKEN_CONTRACT,
        functionName: 'approve',
        args: [
          spender, amount
        ],
      })

      
     
 
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Approval of  ${ethers.utils.formatEther(amount)} REC for ${spender} successful!`,
        confirmButtonColor:"#006D44",
        // preConfirm: () => {window.location.reload()},
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      return result;
    } else {
 
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Contract is not initialized. Connect wallet to get started`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      throw new Error('Contract is not initialized.');
    }
  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Error Apporving spender: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    console.error('Error approving tokens:', error);
  }
}, [account?.address, account?.connector])

const transferFrom = useCallback(async (sender, recipient, amount) => {

  try {
    if (account?.address) {
      const result = await writeContract(
        
        getConfig(), {
          
        account: account?.address,
        connector:account?.connector,
        abi:recyloxABI,
        
        address: RECYCLE_TOKEN_CONTRACT,
        functionName: 'transferFrom',
        args: [
          sender, recipient, amount
        ],
      })
     
 
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Transfer of  ${ethers.utils.formatEther(amount)} REC from ${sender} to ${recipient} successful!`,
        confirmButtonColor:"#006D44",
        // preConfirm: () => {window.location.reload()},
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
    } else {
 
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Contract is not initialized. Connect wallet to get started`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      throw new Error('Contract is not initialized.');
    }
  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: `Error transferring token: ${error}`,
      confirmButtonColor:"#006D44",
      customClass: {
          icon: "font-montserrat",
          title: " font-montserrat text-[20px] text-[#000] font-[600]",
          text: "font-montserrat, text-[16px] text-[#000] font-[600]",
      }
    })
    console.error('Error transferring tokens:', error);
  }
}, [account?.address, account?.connector])

  return (
    <TokenContext.Provider value={{name, symbol, decimals, totalSupply, accountBalance,transferTokens, transferFrom, approveTokens, mintTokens:mint,  burnTokens,refetch}}>{children}</TokenContext.Provider>
  )
}

export default TokenProvider