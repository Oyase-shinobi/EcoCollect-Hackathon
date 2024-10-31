// import React from 'react'
import handInAboutPage from './../../assets/handInAboutPage.png';

const Purpose = () => {
  return (
    <div className="m-[auto] w-[900px] py-16">
      <div className="flex items-center justify-between gap-4">
        <div>
          
          <h3 className="mt-[20px]">
            <span className="bg-[#005232] p-[6px] rounded-[8px] text-white text-2xl w-[60px] h-[30px]">Purpose & Values</span>
          </h3>
        
          <div className="mt-[20px]">
          <ol className=' w-[500px]'>
            <li>
              <span className="text-[#005232] text-lg">
                Environmental Stewardship:
              </span>
              We are committed to protecting our planet and conserving its
              resources. By promoting recycling and reducing waste, we aim to
              minimize our ecological footprint and contribute to a sustainable
              future.
            </li>
            <li>
              <span className="text-[#005232] text-lg">Innovation:</span> We
              embrace innovation as a driving force behind our operations. By
              leveraging advanced technologies, we continuously seek new and
              efficient ways to enhance the recycling process and make it more
              accessible to everyone.
            </li>
            <li>
              <span className="text-[#005232] text-lg">Community Focus:</span> We
              believe in the power of communities to create lasting change.
              Through collaboration and engagement, we strive to build a strong
              network of individuals and organizations dedicated to recycling
              and environmental preservation.
            </li>
          </ol>
          </div>
        </div>
        <div>
          <img src={handInAboutPage} className='h-[380px] w-[300px]' alt="hand" />
        </div>
      </div>
    </div>
  );
};

export default Purpose;
