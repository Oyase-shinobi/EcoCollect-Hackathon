const Vision = () => {
  return (
    <div className="flex flex-col items-center bg-white gap-4 py-8">
      {/* OUR VISION Section */}
      <p className="font-bold text-2xl md:text-3xl font-montserrat bg-white text-primary40 py-2 px-6 md:px-12 rounded-md text-center">
        OUR VISION
      </p>
      <p className="text-lg md:text-xl text-gray-700 w-[85%] md:w-[70%] leading-relaxed mt-2 mb-6 font-openSans text-center">
        We envision a world where waste plastics are no longer seen as a problem
        but rather as a valuable resource. Our goal is to empower individuals to
        actively participate in the recycling process, creating a positive
        impact on the environment while also benefiting from their efforts. By
        utilizing blockchain technology, we provide a transparent and secure
        platform that connects waste collectors with recycling companies,
        creating a circular economy that promotes sustainability.
      </p>

      {/* Commitment to Sustainability Section */}
      <p className="font-bold text-2xl md:text-3xl font-montserrat bg-white text-primary40 py-2 px-6 md:px-12 rounded-md text-center">
        Our Commitment to Sustainability
      </p>
      <p className="text-lg md:text-xl text-gray-700 w-[85%] md:w-[70%] leading-relaxed mt-2 mb-6 font-openSans text-center">
        We are deeply committed to fostering sustainability and reducing plastic
        pollution. By incentivizing waste collection and recycling through our
        platform, we aim to promote the responsible disposal of waste plastics,
        preventing them from polluting the environment and encouraging the
        adoption of sustainable practices, thus reducing reliance on virgin
        plastics.
      </p>
    </div>
  );
};

export default Vision;
