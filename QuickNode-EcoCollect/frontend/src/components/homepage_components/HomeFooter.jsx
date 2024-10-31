import Logo from "../logo";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/email.svg";

const HomeFooter = () => {
  return (
    <div className="container mx-auto w-full font-montserrat bg-primary40 text-white py-16">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:justify-between md:flex-row">
        {/* footer logo */}
        <div className=" w-32 h-32 items-center">
          <Link to={"/"}>
            <Logo fill="#fff" w="120" h="120" />
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center mt-8 md:mt-0">
          {/* footer Links */}
          <div className="flex flex-col mr-[1.5rem]">
            <p className="font-2 font-bold mb-4">Links</p>
            <Link to={"/"} className="font-2 mb-4 font-extralight">
              Home
            </Link>
            <Link to={"/about-us"} className="font-2 mb-4 font-extralight">
              About Us
            </Link>
            <Link to={"/how-it-works"} className="font-2 mb-4 font-extralight">
              How it works
            </Link>
          </div>

          {/* resources */}
          {/* <div className="flex flex-col">
            <p className="font-2 font-bold mb-4">Resources</p>
            <Link to={"/blog"} className="font-2 mb-4 font-extralight">
              Blog
            </Link>
            <Link to={"/white-paper"} className="font-2 mb-4 font-extralight">
              White Paper
            </Link>
            <Link to={"/privacy-policy"} className="font-2 mb-4 font-extralight">
              Privacy Policy
            </Link>
          </div> */}
        </div>

        {/* contact us */}
        <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:justify-start md:items-start">
          <p className="font-2 font-bold mb-4 w-full text-center md:text-left">Contact Us</p>
          <p className="font-2 mb-2 font-extralight">57, Allen Avenue</p>
          <p className="font-2 mb-4 font-extralight">Lagos, Nigeria.</p>
          <p className="font-2 font-extralight mb-4">info@byteX.com</p>
        </div>

        {/* subscribe */}
        <div className="flex flex-col justify-center items-center mt-8 md:mt-0 md:justify-start  md:items-start">
          <p className="font-2 font-bold mb-4 w-full text-center md:text-left">Subscribe</p>
          <p className="font-2 mb-4 font-extralight">Subscribe to our mailing list</p>
          {/* subscribe input box */}
          <div className="flex flex-row flex-wrap justify-center md:justify-start">
            <div className="flex flex-row border-b border-white">
              <img src={emailIcon} alt="email-icon" className="mr-2" />
              <input type="text" placeholder="Enter your email" className="outline-none bg-primary40" />
            </div>
            <button className="bg-white p-2 text-primary40">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
