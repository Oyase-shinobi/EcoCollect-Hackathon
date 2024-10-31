import { useState } from "react"
import { MdOutlineCalendarMonth, MdSchedule, MdOutlineArrowForward } from "react-icons/md";
import { PropTypes } from "prop-types";


export const BlogSection1 = () => {
  return (
    <div className="w-full px-5 md:px-[64px] flex flex-col items-center max-w-[1371px] mx-auto pt-40 md:pt-20">
      <p className="text-primary40 text-xl md:text-[40px] font-montserrat font-bold max-w-[1156px] text-center leading-snug">Re:Cycle: Transforming Waste into a Sustainable Future</p>
      <div className="bg-[url('/src/assets/blogImage1.png')] bg-cover bg-center bg-no-repeat h-[381px] md:h-[581px] w-full max-w-[1371px] rounded-lg relative z-0 mt-[37px] mb-[100px] clip">
        <div className="absolute z-[1] bg-black/40 top-0 left-0 right-0 bottom-0"></div>
        <div className="absolute z-[2] flex flex-col gap-12 w-full max-w-4xl items-end px-[27px] bottom-[43px]">
          <p className="text-white text-xs md:text-xl font-montserrat font-bold">&#39;Sustainable&#39; condenser tumble dryers create hundreds of tons of waterborne microfiber pollution</p>
          <p className="text-white text-xs md:text-xl font-montserrat font-bold">A new study has revealed that drying laundry using a condenser tumble dryer leads to hundreds of tons of potentially harmful microfibers being released into waterways and oceans across the UK and Europe.</p>
        </div>
      </div>
      <div className="w-full">
        <p className="text-primary40 text-xl font-montserrat font-bold  mb-[51px]">Recent blog posts</p>
        <div className="w-full flex flex-col md:flex-row mb-36 gap-11">
          {/* main */}
          <div>
            <img src="/src/assets/blogPost.png" alt="blog thumbnail" className="w-full h-full max-h-[493px] object-cover rounded-[20px]" />
            <p className="font-montserrat text-black font-bold text-base mt-5 max-w-lg">Plastics recycling market set to grow big</p>
            <p className="font-montserrat text-black font-medium text-sm max-w-lg">According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade.</p>
            <div className="w-full flex flex-row justify-between max-w-lg mt-2 flex-wrap">
              <div className="flex items-center">
                <MdOutlineCalendarMonth color="#404943" size={20} />
                <p className="font-montserrat text-black font-semibold text-xs ml-4">May 20, 2023</p>
              </div>
              <div className="flex items-center">
                <MdSchedule color="#404943" size={20} />
                <p className="font-montserrat text-black font-semibold text-xs ml-4">Reading time: about 3 minutes</p>
              </div>
            </div>
          </div>
          {/* aside */}
          <div className="flex flex-col gap-14">
            <div>
              <img src="/src/assets/blogPost.png" alt="blog thumbnail" className="w-full max-w-[439px] max-h-[258px] h-full object-cover rounded-[20px]" />
              <p className="font-montserrat text-black font-bold text-base mt-5 max-w-[262px]">The Winners of the Plastics Recycling Awards Europe 2023</p>
            </div>
            <div>
              <img src="/src/assets/blogPost.png" alt="blog thumbnail" className="w-full max-w-[439px] max-h-[258px] h-full object-cover rounded-[20px]" />
              <p className="font-montserrat text-black font-bold text-base mt-5 max-w-[262px]">The Winners of the Plastics Recycling Awards Europe 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TitleBar = () => {
  return (
    <div className="w-full p-6 bg-primary40 text-center">
      <p className="text-center font-montserrat text-xl md:text-3xl font-bold text-white">All blog posts</p>
    </div>
  );
};

export const BlogSection2 = () => {
  return (
    <div className="w-full px-5 md:px-[64px] flex flex-col items-center max-w-[1371px] mx-auto py-[65px]">
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
        <BlogCard img="/src/assets/blogPost.png" alt="blog thumbnail" date="May 21, 2023" estimatedReadTime="2 minutes" title="Plastics recycling market set to grow big" desc="According to recent market research data, the plastics recycling market industry, is poised for major growth within the next decade." />
      </div>
    </div>
  );
};

const BlogCard = ({ img, alt, date, estimatedReadTime, title, desc }) => {
  return (
    <div className="w-full h-auto flex flex-col">
      <img src={img} alt={alt} className="w-full  h-full object-cover rounded-[5px]" />
      <div className="w-full flex flex-row justify-between mt-2 flex-wrap">
        <div className="flex items-center">
          <MdOutlineCalendarMonth color="#404943" size={20} />
          <p className="font-montserrat text-black font-semibold text-xs ml-4">{date}</p>
        </div>
        <div className="flex items-center">
          <MdSchedule color="#404943" size={20} />
          <p className="font-montserrat text-black font-semibold text-xs ml-4">Reading time: {estimatedReadTime}</p>
        </div>
      </div>
      <p className="font-montserrat text-black font-bold text-base my-4">{title}</p>
      <p className="font-montserrat text-black font-medium text-sm">{desc}</p>
    </div>
  );
};

export const BlogPagination = () => {
    const [page, setPage] = useState(1)

    return (
      <div className="w-full px-5 md:px-[64px] flex flex-col items-center max-w-[1371px] mx-auto my-12 md:my-[100px]">
        <div className="w-full flex flex-row justify-center md:justify-between items-center">
          <button className="hidden md:block rounded-[10px] cursor-pointer font-montserrat text-white bg-primary40 py-2 px-4 text-sm md:text-base w-[145px]">Previous</button>
          <div className="flex items-baseline gap-2">
            <Number index={1} page={page} onClick={() => setPage(1)} />
            <Number index={2} page={page} onClick={() => setPage(2)} />
            <Number index={3} page={page} onClick={() => setPage(3)} />
            <p className="ml-4">...</p>
          </div>
          <button className="hidden rounded-[10px] md:flex items-center gap-3 justify-center cursor-pointer font-montserrat text-white bg-primary40 py-2 px-4 text-sm md:text-base w-[145px]">
            Next
            <MdOutlineArrowForward color="white" />
          </button>
        </div>
      </div>
    );
};

const Number = ({ index,page }) => {

  return <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer font-montserrat text-sm md:text-base hover:text-white hover:bg-primary40 ${page === index ? "text-white bg-primary40" : "text-black bg-white"}`}>{index}</div>;
};

// prototypes
BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  estimatedReadTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

