import { useState } from 'react'
import { useTokenContract } from '../context/TokenProvider'

const Test = () => {

  const {transferTokens} = useTokenContract()
  const [loading, setloading] = useState(false)

  const [userAddress, setUserAddress] = useState('')
  const [tokenAmt, setTokenAmt] = useState(0)

  const TransferToken = () => {
    if (loading) {
      alert ("loading...")
    } else{
      transferTokens(userAddress, tokenAmt)
    }
  }

  return (
    <div className='max-w-[500px] mx-auto p-4 border-2 border-solid mt-20 border-[#fff] flex flex-col justify-center items-center'>
        <input type="text" value={userAddress} placeholder="input address" className='my-2 p-2 w-[80%] rounded-lg outline-none'  onChange={(adr) => setUserAddress(adr.target.value)} /> <br />
        <input type="number" value={tokenAmt} placeholder="input amt" className='mb-4 p-2 w-[80%] rounded-lg outline-none'  onChange={(amt) => setTokenAmt(amt.target.value)} /> <br />
        <button onClick={TransferToken}  className='p-4 bg-primary40 my-4 rounded-lg text-white'>Transfer</button>
    </div>
  )
}

export default Test