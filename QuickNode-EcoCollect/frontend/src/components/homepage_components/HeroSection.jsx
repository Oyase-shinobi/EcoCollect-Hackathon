import React from "react";
import heroImage from "../../assets/home-bgg.png";
import MediumButton from "../buttons/mediumButton";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto h-full border-t-2 mt-20 bg-white font-montserrat">
        <div className="mt-10 md:mt-20 pb-20 mx-auto bg-herobg lg:bg-contain bg-no-repeat sm:bg-right">
          <div className=" flex flex-col lg:flex-row w-[90%] max-w-[90%] mx-auto justify-start items-center">
            <div className=" flex flex-col lg:w-[50%] text-center items-center lg:items-start lg:text-left">
              <h2 className=" text-3xl md:text-[45px] font-[800] md:leading-[90px] tracking-[1px]">
                ECOCOLLECT
              </h2>
              <h2 className=" text-4xl md:text-[60px] tracking-[1px] font-black text-[#006D44]">
                WASTE
              </h2>
              <p className="w-[275px] font-bold text-base md:text-[20px] tracking-[-0.5px] leading-[25px] mt-6">
                Turn Trash into Treasure: Recycle, Earn Rewards, and Save the
                Planet
              </p>
              <p className="text-sm md:text-[16px] leading-[25px] mt-5 font-semibold tracking-[-0.5px] lg:w-[420px] xl:w-[566px]">
                Ecocollect is a groundbreaking digital currency specifically
                designed to revolutionize the world of recycling. Built on the
                principles of blockchain technology.
              </p>
              <p className="text-sm md:text-[16px] leading-[25px] mt-5 font-semibold tracking-[-0.5px] lg:w-[420px] xl:w-[566px]">
                With Ecocollect, every time you recycle, you earn tokens that hold
                real-world value. These tokens can be redeemed for a variety of
                rewards, including discounts on eco-friendly products, access to
                exclusive events, or even exchanged for other cryptocurrencies
                or fiat currency.
              </p>
              <MediumButton text={"Learn more"} linkto={"/about-us"} />
            </div>

            <div className="lg:w-[50%]">
              <img src={heroImage} alt="home-img" className="lg:w-full xl:-w-[993px] mt-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
