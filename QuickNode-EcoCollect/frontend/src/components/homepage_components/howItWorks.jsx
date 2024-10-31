import React from 'react'
import { howItworks } from '../../data/howItWorksData'

const HowItWorks = () => {
  return (
    <div className='container mx-auto bg-bg-color p-8 flex flex-col justify-center items-center font-montserrat'>
      {/* section title */}
      <h1 className='text-center text-[1.5rem] font-bold text-primary60 mb-20 mt-8 font-openSans '>HOW IT WORKS</h1>
      {
        howItworks.map((item, index) => 
        <div className='relative w-[80%] flex-col mx-auto mb-20 text-white justify-center items-center md:flex md:flex-row md:mb-10' key={index}>
            <div className='absolute font-openSans rounded-[50%] w-24 h-24 mx-auto -mb-10 left-[45%] -translate-x-1/2 bg-[#A9CE98] flex justify-center p-4 items-center  -top-10 md:left-0 md:w-32 md:h-32 md:mx-0 md:-mb-0 md:right-0 md:-top-2 md:-translate-x-0  '>
                <h1 className='text-[3rem] font-bold'>{index+1}</h1>
            </div>
            <div className='w-[90%] md:h-28 h-64 bg-primary40 rounded-[12px] md:pl-8 p-4 md:p-2 '>
                <h1 className='text-center font-bold text-[1rem] mt-14 md:mt-0'>{item.title}</h1>
                {item.desc.map((listItem, listIndex) => 
                <li className=' md:ml-20 text-[0.8rem]' key={listIndex}>{listItem}</li>

                )}
            </div>
        </div>
        )
      }
    </div>
  )
  }

export default HowItWorks
