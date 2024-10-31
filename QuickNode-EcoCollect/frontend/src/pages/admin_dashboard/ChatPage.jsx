// import React from 'react'

import AdminDashboardLayout from "../../components/dashboard_components/AdminDashboardLayout";

const ChatPage = () => {
  return (
   <AdminDashboardLayout active_link={'chat'} dashboard_content={
    <div className="bg-[#005232] w-[800px] h-[650px] relative">
    <div className="bg-[#ffffff] text-black w-96 h-[106px] rounded-br-[46px] rounded-t-[46px] absolute top-10 left-6">
      <p className="font-montserrat mt-2 ml-8 text-[14px] leading-6">
        Hello User! <br /> How may I help you today?
      </p>
      <p className="font-montserrat text-[#829779] mt-2 ml-8 text-[14px] italic">11:59AM</p>
    </div>
    <div className="bg-[#ffffff] text-black w-[600px] h-[136px] rounded-bl-[46px] rounded-t-[46px] absolute top-40 right-6">
      <p className="font-montserrat mt-2 ml-8 text-[14px] leading-7">
        Hi, support! <br />I have a pending transaction that hasn’t been
        approved since over two week. <br /> I’m afraid there’s a technical issue at
        Safe.ru.
      </p>
      <div className="flex items-center justify-between ">
      <p className="font-montserrat text-[#829779] mt-2 ml-8 text-[14px] italic">12:01PM</p>
      <img  src="../src/assets/check.png" alt="customer care" className="w-[16px] h-[12px] mr-6"  />
      </div>
    </div>
    <div className='absolute bottom-[154px] left-[180px]'>
      <img  src="../src/assets/heyYou.png"  alt="customer care" />
    </div>
    <div className="bg-[#ffffff] text-black w-[64px] h-[30px]  rounded-full absolute bottom-[114px] left-[240px]">
      <p className="font-montserrat text-[#829779] p-[4px] text-[14px] italic">12:09AM</p>
    </div>
    <div className="flex items-center justify-between gap-8 absolute bottom-[32px] left-[120px]">
    <div className="flex items-center justify-between bg-[#ECECEC] w-[300px] h-[60px] rounded-[24px] ">
    <img  src="../src/assets/Smiley.png" alt="customer care" className="w-[22px] h-[22px] ml-6"  />
      <img  src="../src/assets/AttachmentIcon.png" alt="customer care" className="w-[16px] h-[22px] mr-6"  />
      </div>
      <div className="bg-[#ffffff] w-[60px] h-[46px] rounded-[16px] ">
      <img  src="../src/assets/arrowUp.png" alt="customer care" className="w-[26px] h-[24px] mt-[16px] ml-[12px]  "  />
      </div>
    </div>
  </div>
   }/>
  );
};

export default ChatPage;
