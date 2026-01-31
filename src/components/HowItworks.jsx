import React from "react";
import { FaUserEdit, FaShareAlt, FaCoffee } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import logo from "../assets/ecc_logo.png";
import workImage from "../assets/work.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create your chai page",
      desc: "Set up your profile with a photo, bio & set your chai price.",
      icon: <FaUserEdit className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Share with your fans",
      desc: "Send your custom page link to your audience and community.",
      icon: <FaShareAlt className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Get chai love & grow",
      desc: "Receive chai (payments) and build a loyal supporter base.",
      icon: <FaCoffee className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-8 bg-[#f5f1ee] text-center relative z-10 overflow-hidden">
      {/* Sub-heading */}
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        Easy as chai
      </p>

      {/* Main heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-chaiBrown mb-6">
        How It Works
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto mb-16 sm:mb-20 px-8 sm:px-0">
        Ek Cup Chai makes supporting creators fun and effortless. In just a few
        taps, your fans can send chai and show their appreciation.
      </p>

      

      {/* Responsive Image Section */}
      <div className="mt-5 px-2 sm:px-0 max-w-4xl mx-auto">
        <img src={workImage} alt="how-it-works" className="w-full h-auto"/>
      </div>
    </section>
  );
};

export default HowItWorks;