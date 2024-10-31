const AboutUsHero = () => {
  return (
    <div className="bg-[url('/src/assets/bag.png')] bg-no-repeat bg-cover bg-center w-full py-20 md:py-32 lg:py-[254px] relative flex flex-col items-center z-[0] px-5">
      {/* Dark overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#090808]/70 z-[1]"></div>

      {/* Main content */}
      <div className="relative z-[2] flex flex-col items-center text-center max-w-screen-xl mx-auto">
        <p className="text-white font-montserrat text-[18px] md:text-[30px] lg:text-[40px] font-semibold">
          About EcoCollect
        </p>
        <div className="h-1 w-[151px] bg-white mt-[13px] mb-8 lg:mb-[60px]"></div>

        <p className="text-white font-montserrat text-[28px] md:text-[44px] lg:text-[64px] font-bold max-w-[1122px] mb-[21px]">
          We Safeguard The Environment
        </p>

        <p className="text-white font-montserrat text-[16px] md:text-[26px] lg:text-[36px] font-bold max-w-[1000px] lg:max-w-[1219px] mx-auto leading-relaxed">
          At EcoCollect, we are revolutionizing the way we address the global plastic crisis. We incentivize individuals to take action by collecting waste plastics and reward them with tokens. By partnering with leading plastic recycling companies, we ensure that these collected plastics are repurposed and recycled, contributing to a sustainable future.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHero;
