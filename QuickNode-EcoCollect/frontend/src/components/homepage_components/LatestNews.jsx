import React from 'react'

// Import images
import clean_image from "../../assets/clean-image-1.svg";
import news_2 from "../../assets/news-2.svg";
import news_3 from "../../assets/news-3.svg";

const LatestNews = () => {
  const newsData = [
    {
      title: 'Plastics recycling market set to grow big',
      summary: 'According to recent market research data, the plastics recycling market \n' +
          'industry, is poised for major growth within the next decade.',
      imageUrl:  clean_image,
    },
    {
      title: 'The Winners of the Plastics Recycling Awards Europe 2023',
      imageUrl: news_2,
    },
    {
      title: 'Germany will force companies to pay for cleaning up single use plastic',
      imageUrl: news_3,
    },
  ];
  return <>
    {/* Start Latest News.. */}
    <div className="container my-24 px-6 mx-auto font-montserrat">
      {/* Section: Design Block */}
      <section className="mb-32 text-gray-800">
        <h2 className="text-[#0D4D00] uppercase text-[26px] font-extrabold mb-12 pb-4 text-center">
          Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-white p-4">
            <img src={newsData[0].imageUrl} alt={`News 1`} className="w-full rounded-2xl mb-4" />
            <h3 className="text-[26px]  font-montserrat font-extrabold">{newsData[0].title}</h3>
            <p className=" font-montserrat text-black-600 font-semibold text-[16]">{newsData[0].summary}</p>
            <p className=" font-montserrat text-black-600 font-semibold text-[16] py-4 mr-8">
              <span className="mr-10"><i className=""></i>May 20, 2023</span>
              <span className="mr-10">Reading Time: about 3 minutes</span>
            </p>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            {newsData.slice(1).map((news, index) => (
                <div key={index} className="bg-white p-4 flex flex-col">
                  <img src={news.imageUrl} alt={`News ${index + 2}`} className="w-full rounded-2xl mb-4" />
                  <h3 className="text-lg font-extrabold  font-montserrat">{news.title}</h3>
                </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
    {/* End latest News */}
  </>
}

export default LatestNews