import React from "react";
import EmpoweringImageBg from "../../assets/Empowering_image_bg.png";
import settingSVG from "../../assets/settingSVG.svg";
import lightSVG from "../../assets/lightSVG.svg";
import recycleSVG from "../../assets/recycleSVG.svg";
import DollarSVG from "../../assets/DollarSVG.svg";
import HandSVG from "../../assets/HandSVG.svg";
import Polygon_about from "../../assets/PolygonSVG.svg";

const Empowering = () => {
  const data = [
    {
      vector: settingSVG,
      topic: "Our Expertise",
      content:
        "With years of experience in the recycling industry, our team at EcoCollect possesses a deep understanding of waste management practices, recycling techniques, and market dynamics. We leverage this expertise to develop solutions that streamline recycling processes, improve efficiency, and maximize the impact of recycling efforts.",
    },
    {
      vector: lightSVG,
      topic: "I.R.A",
      content:
        "(Innovative Recycling Approach) We take a fresh approach to recycling by integrating technology and cryptocurrency into the traditional recycling ecosystem. Our platform provides users with a seamless and convenient way to recycle various materials, transforming it into a rewarding experience. Through our user-friendly mobile application, individuals can track their recycling progress, earn EcoCollect tokens, and contribute to a sustainable future.",
    },
    {
      vector: recycleSVG,
      topic: (
        <div className="text-center">
          <p>Environmental</p>
          <p>Impact</p>
        </div>
      ),
      content:
        "By recycling with EcoCollect, you become an active participant in reducing waste and preserving our environment. Each item you recycle translates into reduced landfill waste, decreased pollution, and conservation of natural resources. Through our advanced waste management techniques and partnerships with recycling facilities, we ensure that your efforts have a significant and measurable impact on our planet.",
    },
    {
      vector: DollarSVG,
      topic: (
        <div className="text-center">
          <p>Rewards &amp;</p>
          <p>Incentives</p>
        </div>
      ),
      content:
        "At EcoCollect, we believe in recognizing and incentivizing individuals for their recycling efforts. Every time you recycle, you earn EcoCollect tokens, our exclusive cryptocurrency. These tokens can be redeemed for various rewards, including discounts at partner stores, exclusive merchandise, and even charitable donations. By aligning economic benefits with environmental action, we motivate individuals to embrace recycling as a rewarding habit.",
    },
    {
      vector: HandSVG,
      topic: (
        <div className="text-center">
          <p>Trust &amp;</p>
          <p>Transparency</p>
        </div>
      ),
      content:
        "At EcoCollect, we prioritize trust and transparency in all our operations. We adhere to strict ethical and environmental standards, ensuring that your recyclables are processed responsibly and efficiently. Our blockchain-based system provides immutable records, guaranteeing the integrity of transactions and reinforcing trust between our users, partners, and our company.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-16">
      <h2 className="p-8 text-4xl md:text-5xl text-primary40 font-bold text-center">
        Empowering Change through Recycling
      </h2>
      
      <div
        className="w-4/5 bg-cover bg-no-repeat py-8"
        style={{
          backgroundImage: `url(${EmpoweringImageBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap ml-4 p-4 md:ml-0 md:p-0 mb-12"
          >
            {/* Vector Image and Title */}
            <div className="w-full md:w-1/5 flex flex-col items-center md:items-end justify-start mt-4">
              <div className="flex items-center bg-green-900 py-6 px-10 rounded-lg shadow-md">
                <img src={item.vector} alt="Vector" className="h-10 w-10 mr-4" />
                <div className="text-2xl text-white">{item.topic}</div>
              </div>
              <img
                src={Polygon_about}
                alt="polygonAboutUs"
                className="h-8 w-8 -mt-4"
              />
            </div>

            {/* Separator Line */}
            <ul className="hidden md:flex flex-col items-center justify-center ml-4 mr-8">
              <li className="w-2 h-2 rounded-full bg-primary40 m-6"></li>
            </ul>

            {/* Content Section */}
            <div className="mt-6 ml-4 flex flex-col justify-between w-full md:w-3/5">
              <p className="text-lg md:text-xl leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Empowering;
