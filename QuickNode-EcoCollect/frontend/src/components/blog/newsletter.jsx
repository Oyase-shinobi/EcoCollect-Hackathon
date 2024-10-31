import  {MdOutlineEmail} from "react-icons/md"

const Newsletter = () => {
    return (
      <div className="container flex flex-col items-center bg-[#04A667] py-[38px] px-5 mx-auto">
        <p className="font-montserrat md:text-xl text-white font-bold text-center">Join Our Mailing List for Updates and Discounts!</p>
        <div className="w-full flex flex-col md:flex-row items-center gap-[14px] mt-10 max-w-[872px] md:flex-wrap">
          <div className="flex items-center gap-5 bg-white rounded-[10px] px-5 max-w-[656px] w-full">
            <MdOutlineEmail className="text-[#1B19192B]/20 text-2xl" />
            <input type="text" name="email" placeholder="Enter your email" className="h-[60px] md:h-[68px] w-full outline-none" />
          </div>
          <button className="rounded-[10px] h-[60px] md:h-[68px] cursor-pointer font-montserrat text-white bg-[#BA1B1B] py-2 px-4 text-sm md:text-base w-[202px]">Subscribe</button>
        </div>
      </div>
    );
}

export default Newsletter