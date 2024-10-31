import { useState, useRef } from 'react';
import Logo from '../../components/logo';
import companyBg from '../../assets/company-bg.svg';
import { ElasticEmail } from './ElasticEmail';
import { useNavigate } from 'react-router-dom';

export const EmailVerification = () => {

  const navigate = useNavigate();

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [isLoading, setIsloading] = useState(false);


  const handleCodeChange = (index, event) => {
    const value = event.target.value;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    // Autofocus on the next input field
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputFocus = (index) => {
    // Clear input value on focus
    if (code[index] === '-') {
      const newCode = [...code];
      newCode[index] = '';

      setCode(newCode);
    }
  };

  const reload = () => {
    navigate('/authenticate')
  }

  const VerifyEmail = async () => {
    const email = "adewarainioluwa@gmail.com"
    const response = fetch(`https://api.elasticemail.com/v4/verifications/${email}`);
    const result = await response.json();
    if (result === "OK") {
      reload()
    }
  }
  

  return (
    <div className='w-[34rem] md:w-[62rem] lg:w-[82rem] flex flex-row justify-center'>
      <div>
        <div className='flex flex-row justify-center mt-4 '>
          <div className='relative'>
            <div className='w-[10rem] md:w-[22rem] lg:w-[29rem] min-h-[34rem] bg-[#F8F9FB] border border-primary40-700 justify-center'>
              <div className='flex flex-row mt-10 ml-10'>
                <div className='w-46 h-46 items-center '>
                  <Logo fill='#0D4D00' w='46' h='46' />
                </div>
                <p className='text-[1rem] md:text-[1rem] lg:text-[1.2rem] mt-2 ml-3 text-[#0D4D00]  text-center'>
                  Recylox
                </p>
              </div>
              <div className="ml-8 text-center">
                <h2 className='font-montserrat text-[1rem] md:text-[1rem] lg:text-[1.7rem] font-bold mt-2 ml-3 text-[#0D4D00]'>
                  Verify Email
                </h2>
              </div>
              <p className="font-openSans text-[14px] text-center items-center my-16">
                Enter the verification code we just sent to the email address you used to register for vaccination, kel**********@gmail.com.
                Please check your junk or spam folder if you can’t find it in your inbox.
              </p>
              <div className="flex justify-center">
                {Array.from({ length: 6 }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={code[index]}
                        onChange={(event) => handleCodeChange(index, event)}
                        onFocus={() => handleInputFocus(index)}
                        // className="text-center w-12 h-12 border border-gray-300 outline-none bg-transparent text-xl font-bold"
                        className="text-center w-12 h-12 outline-solid bg-transparent border-2 border-gray-300 focus:border-blue-500 text-xl font-bold mx-2"
                        ref={(inputRef) => {
                          inputRefs.current[index] = inputRef;
                        }}
                    />
                ))}
              </div>
              <p className="items-center text-center my-16">Didn't receive the code? <a href="#">Resend the code in 0:30</a> </p>
              <div className="text-center mb-16">
                <button className='rounded-full  bottom-6 left-36 p-2 text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#fff] bg-[#0D4D00]'
                onClick={VerifyEmail}
                >
                  Verify Email
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${companyBg})` }} className='w-[10rem] md:w-[16rem] lg:w-[21rem] min-h-[34rem] bg-[url(./assets/company-bg.svg)]  bg-contain md:bg-cover bg-right bg-no-repeat'></div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;