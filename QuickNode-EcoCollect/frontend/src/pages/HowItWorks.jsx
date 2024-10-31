import Header from "../components/navigation/Header";
import howItWorksImage from '../assets/how_it_works.png';
import HomeFooter from "../components/homepage_components/HomeFooter";
import Footer from "../components/footer";

const HowItWorks = () => {
  return (
    <>
      <Header />

      {/* Hero Section min-h-screen bg-gray-50 flex flex-col justify-center items-center py-16 */}
      <div className="flex flex-col items-center justify-center px-10 md:px-20 w-3/5 mt-16 md:mt-24 py-12 mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">
          HOW IT WORKS
        </h1>
        <h2 className="text-2xl font-semibold text-primary40 bg-white px-4 py-2 rounded-md mt-4 text-center">
          Recycling and Earning with EcoCollect
        </h2>

        {/* Centering Image with Text */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
          <img
            src={howItWorksImage}
            alt="how-it-works"
            className="h-72 w-80 rounded-lg shadow-lg"
          />
          <p className="text-lg text-center md:text-left leading-relaxed max-w-xl">
            Our organization promotes a flexible and stress-free process for participants to earn token rewards by following these steps:
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-[90%] md:w-[70%] mx-auto py-10 md:py-16">
        <ul className="list-decimal list-inside mt-8 space-y-6 text-lg">
          <li>
            <strong>Collect Waste Plastics:</strong> Anyone can participate by gathering plastic waste from their surroundings, including household plastics, packaging materials, and more.
          </li>
          <li>
            <strong>Deposit and Verify:</strong> After collecting sufficient waste, deposit it through our platform. Verification ensures fair compensation for authentic and quality plastics.
          </li>
          <li>
            <strong>Earn Tokens:</strong> After successful verification, you’ll be rewarded with tokens based on the weight and type of plastics deposited. These tokens can be used within our ecosystem or exchanged.
          </li>
          <li>
            <strong>Recycling Partnerships:</strong> We partner with plastic recycling companies that purchase and recycle the waste, minimizing environmental impact and reducing the need for new plastics.
          </li>
        </ul>
      </div>

      <HomeFooter />
      <Footer />
    </>
  );
};

export default HowItWorks;
