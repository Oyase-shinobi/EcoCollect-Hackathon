// import React from 'react'
import deposit from '../../assets/deposit.png';
import Vector from '../../assets/Vector.png';

const Deposit = () => {
  return (
    <div className='w-[28rem] md:w-[36rem] lg:w-[47rem] h-[30rem] mx-8 border-4 border-[#F8F9FB]-300 '>
      <div className='flex flex-row justify-between h-[26rem] '>
        <div className='relative flex flex-col justify-center w-[29rem] '>
          <div className='flex flex-row items-center w-[17rem] absolute top-6 left-10 justify-between'>
            <img
              src={Vector}
              alt='Deposit Image'
              className='w-[1.7rem] h-[1.7rem]'
            />
            <p className='text-[1rem] md:text-[1.5rem] lg:text-[2rem] w-[14rem] flex-start font-bold text-[#005232]'>
              Deposit Plastic
            </p>
          </div>
          <div className='mb-8 absolute left-5 top-28'>
            <label
              htmlFor='Company-Name'
              className='block mb-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] ml-6 font-medium text-[#005232] '
            >
              Company Name
            </label>
            <input
              type='text'
              className='border-b-2 w-[22rem] focus:outline-none border-[#005232] bg-transparent ml-6'
            />
          </div>
          <div className='mb-8 absolute bottom-28 left-5'>
            <label
              htmlFor='Company-Name'
              className='block mb-1 text-[1rem] md:text-[1rem] lg:text-[1.2rem] ml-6 font-medium text-[#005232] '
            >
              Plastic Weight (kg)
            </label>
            <input
              type='text'
              className='border-b-2 w-[22rem] focus:outline-none border-[#005232] bg-transparent ml-6'
            />
          </div>
          <div className='flex flex-row items-center  absolute bottom-24 left-6 '>
            <input
              className='h-[1.4rem] w-[4rem] border-solid border-[#005232]'
              type='checkbox'
              value=''
              aria-label='Checkbox for following text input'
            />
            <p className='text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] w-[19rem]  text-[#005232]'>
              I am sure the details i provide are correct
            </p>
          </div>
          <button className='rounded-full rounded-[6px]  w-[10rem] absolute bottom-1 left-10 py-2 px-6 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-medium text-[#fff] bg-[#005232]'>
            Deposit
          </button>
        </div>
        <div className='w-[10rem] md:w-[16rem] lg:w-[20rem] '>
          <img src={deposit} alt='Deposit Image' className='w-104 h-104' />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
