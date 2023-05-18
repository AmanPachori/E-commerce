import React from "react";
import Image from "next/legacy/image";
import logo from "../../Garden360Images/LogoWhiteBG.png";

const index = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-between  md:px-12">
        {/* First Div */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Image
            src={logo}
            alt="Company Logo"
            className=""
            width={70}
            height={70}
          />
          <div className="mt-2 flex flex-col">
            <a className="text-sm my-1 text-gray-500">
              greenloverscare@gmail.com
            </a>
            <a className="text-sm my-1 text-gray-500">+9193066308583</a>
            <p className="text-sm my-1 text-gray-500">
              ABV-IIITM, Gwalior, Madhya Pradesh, 474015
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="md:text-left mb-4 md:mb-0 h-full">
          <h3 className="font-semibold">Store info</h3>
          <div className="mt-3">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-500 ">
              Contact Us
            </a>
          </div>
        </div>

        {/* Third Div */}
        <div className=" md:text-left mb-4 md:mb-0">
          <h3 className="font-semibold text-black">Policies</h3>
          <ul className="text-gray-500 mt-3">
            <li className="text-sm mb-2 ">
              <a href="#">About Us</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="#">Return &amp; Refund Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="#">Payment Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="#">Shipping Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>

        {/* Fourth Div */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex my-3">
            <img
              width="40"
              height="40"
              className="mr-2"
              src="https://img.icons8.com/ios/50/facebook--v1.png"
              alt="facebook--v1"
            />
            <img
              width="40"
              height="40"
              className="mr-2"
              src="https://img.icons8.com/ios/50/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </div>

          <button className="bg-green-500 text-white py-2 px-4 ">
            Chat on WhatsApp
          </button>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default index;
