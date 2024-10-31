import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="container mx-auto font-montserrat">
      
      {/* border text content */}
      <div className="relative flex flex-col p-4 w-full justify-center bg-white md:flex-row">
        <p className=" text-sm font-neutral font-extralight text-center md:text-base">
          Copyright 2024 EcoCollect | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
