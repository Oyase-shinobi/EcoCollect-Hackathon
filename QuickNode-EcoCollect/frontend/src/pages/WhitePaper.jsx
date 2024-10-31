import Footer from "../components/footer";
import HomeFooter from "../components/homepage_components/HomeFooter";
import downloadIcon from "../assets/downloadIcon.svg";
import Header from "../components/navigation/Header";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from 'file-saver';

export const WhitePaper = () => {
  const handleDownload = () => {
    const input = document.getElementById("downloadable-area"); // Specify the ID of the element containing the content you want to download
   
    const downloadButton = input.querySelector('#download-button');
    if (downloadButton) {
      downloadButton.style.display = 'none'; // Hide the download button
    }

    html2canvas(input, {
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    })
  
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      const blob = pdf.output('blob');
      saveAs(blob, 'download.pdf');
      
      if (downloadButton) {
        downloadButton.style.display = ''; // Restore the download button's original display style
      }
    });
  };

  return (
    <>
      <div
        id="downloadable-area"
        className=" container mx-auto font-montserrat"
      >
        <Header />
        {/* header */}
        <div className=" bg-whitePaperHeroBg h-[26rem] flex flex-col justify-center items-center">
          <h1 className="h-[4rem] text-[2.5rem] font-[800] text-white">
            Recylox Whitepaper
          </h1>
          <h4 className="text-[1.25rem] font-[500] text-center mt-10 text-white">
            Revolutionizing Waste Management and Recycling through Crypto
            Rewards
          </h4>
        </div>

        {/* body */}
        <div className="w-[90%] mx-auto mt-16 leading-[2.8rem]">
          <h1 className="text-[1rem] font-[800]">Abstract</h1>
          <p className="text-[1rem] font-[400]">
            This whitepaper outlines the vision, architecture, and technical
            details of Recylox, a groundbreaking project that aims to transform
            waste management and recycling by leveraging blockchain technology
            and incentivizing users with Recylox crypto tokens. By gamifying and
            rewarding sustainable behavior, Recylox aims to create a positive
            impact on the environment while promoting a circular economy.
          </p>
          <ol className="pl-2 mt-8 list-decimal list-inside">
            <li>
              Introduction: Recylox is a decentralized blockchain-based platform
              that incentivizes individuals and organizations to participate
              actively in waste management and recycling initiatives. By issuing
              Recylox tokens, users are rewarded for adopting sustainable
              practices, promoting recycling, and minimizing waste generation.
              Recylox aims to harness the power of blockchain and
              cryptocurrencies to create a global network that fosters
              environmental responsibility and sustainable living.
            </li>
            <li>
              Problem Statement: The world faces a critical waste management
              crisis, with landfill space depleting rapidly and improper
              disposal causing significant harm to the environment. Furthermore,
              the lack of motivation and awareness among individuals to actively
              participate in recycling initiatives hinders progress towards a
              sustainable future. Recylox addresses these challenges by
              introducing a novel incentivization mechanism to reward
              individuals for their positive contributions to waste management.
            </li>
            <li>
              Recylox Architecture: 3.1 Blockchain Infrastructure: Recylox
              operates on a secure, scalable, and decentralized blockchain
              infrastructure. By leveraging the transparency and immutability of
              blockchain technology, Recylox ensures the integrity of
              transactions and the credibility of participants. This
              infrastructure is built upon a consensus mechanism, such as
              proof-of-stake or proof-of-authority, to maintain network security
              and efficiency.
            </li>
          </ol>

          <h2 className="text-[1rem] font-[800] mt-12">Smart Contracts:</h2>
          <p className="text-[1rem] font-[400]">
            Recylox utilizes smart contracts to automate the token distribution
            process and manage the reward system. These self-executing contracts
            ensure that users are fairly compensated for their waste management
            and recycling activities. Smart contracts also enable the seamless
            integration of Recylox with third-party applications, waste
            management systems, and recycling facilities
          </p>

          <h2 className=" text-center text-[1rem] font-[800] mt-12">
            Recylox Features:
          </h2>
          <h2 className="text-[1rem] font-[800]">User Wallets:</h2>
          <p className="text-[1rem] font-[400]">
            Every user participating in the Recylox ecosystem is assigned a
            digital wallet to securely store their Recylox tokens. This wallet
            also serves as a transactional interface for users to send, receive,
            and track their tokens. Additionally, the wallet provides a
            user-friendly dashboard displaying personal recycling statistics,
            rewards earned, and environmental impact.
          </p>
          <h1 className="text-[1rem] font-[800] mt-12">Rewards Mechanism:</h1>
          <p className="text-[1rem] font-[400]">
            Recylox rewards users with Recylox tokens based on their verified
            recycling activities. By collaborating with waste management
            entities, recycling facilities, and IoT sensors, Recylox establishes
            a robust data ecosystem to accurately measure and validate user
            contributions. Users earn tokens proportional to the volume and
            quality of recyclables they dispose of, encouraging active
            participation and responsible waste management.
          </p>

          <h1 className="text-[1rem] font-[800] mt-12">
            Marketplace Integration:
          </h1>
          <p className="text-[1rem] font-[400]">
            Recylox features a marketplace where users can redeem their Recylox
            tokens for sustainable products, services, or discounts offered by
            partner organizations. This integration with eco-friendly businesses
            not only provides users with tangible rewards but also supports the
            growth of a circular economy and encourages sustainable consumption
            patterns.
          </p>

          <h1 className="text-[1rem] font-[800] mt-12 text-center">
            Roadmap and Future Developments:
          </h1>
          <p className="text-[1rem] font-[400]">
            Recylox has an ambitious roadmap to expand its network, engage more
            users, and foster greater environmental impact. Key future
            developments include integrating Recylox with IoT devices to enhance
            data collection accuracy, partnering with municipalities to
            incentivize city-wide waste management initiatives, and
            collaborating with educational institutions to raise awareness about
            sustainable practices.
          </p>

          <h1 className="text-[1rem] font-[800] mt-12">Conclusion: </h1>
          <p className="text-[1rem] font-[400]">
            Recylox presents a transformative solution to address the global
            waste management crisis. By leveraging blockchain technology,
            Recylox creates a decentralized and transparent ecosystem that
            incentivizes individuals to actively participate in waste management
            and recycling activities. Together, we can build a sustainable
            future and contribute to the preservation of our planet.
          </p>

          <button
            id="download-button"
            onClick={handleDownload}
            className="w-[80%] mx-auto mt-20 mb-10 bg-[#006D44] flex flex-row justify-center items-center rounded-[30px]"
          >
            <p className="mr-4 text-white">Download Recylox Whitepaper</p>
            <img src={downloadIcon} alt="download-iocn" />
          </button>
        </div>
      </div>
      <HomeFooter />
      <Footer />
    </>
  );
};

export default WhitePaper;
