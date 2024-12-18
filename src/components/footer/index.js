import React from "react";
import Image from "next/legacy/image";
import logo from "../../Garden360Images/LogoWhiteBG.png";

const Index = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-between md:px-12">
        {/* First Div */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Image
            src={logo}
            alt="Company Logo"
            className="rounded"
            width={80}
            height={80}
          />
          <div className="mt-2 flex flex-col md:text-left text-center">
            <a className="text-sm my-1 text-gray-500">
              kuldeepmangla2002@gmail.com
            </a>
            <a className="text-sm my-1 text-gray-500">+919588771635</a>
            <p className="text-sm my-1 text-gray-500">
              ABV-IIITM, Gwalior, Madhya Pradesh, 474015
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="md:text-left text-center mb-4 md:mb-0 h-full">
          <h3 className="font-semibold">Store info</h3>
          <div className="mt-3 flex flex-col">
            <a
              href="/details/about"
              className="text-gray-500 mb-2 text-sm hover:text-gray-500 "
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-500 text-sm hover:text-gray-500 "
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Third Div */}
        <div className="md:text-left  text-center mb-4 md:mb-0">
          <h3 className="font-semibold text-black">Policies</h3>
          <ul className="text-gray-500 mt-3">
            <li className="text-sm mb-2 ">
              <a href="/details/return">Return &amp; Refund Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="/details/privacy">Privacy Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="/details/paymentpolicy">Payment Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="/details/shipping">Shipping Policy</a>
            </li>
            <li className="text-sm mb-2 ">
              <a href="/details/terms">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>

        {/* Fourth Div */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          {/* <div className="flex my-3">
            <img
              width="30"
              height="30"
              className="mr-2"
              src="https://img.icons8.com/ios/50/facebook--v1.png"
              alt="facebook--v1"
            />
            <img
              width="30"
              height="30"
              className="mr-2"
              src="https://img.icons8.com/ios/50/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </div> */}

          <a
            href="https://api.whatsapp.com/send?phone=919588771635&text=&source=&data="
            target="_blank"
            className="bg-green-500 my-2 text-white py-2 px-4 "
          >
            Chat on WhatsApp
          </a>
        </div>
        <div></div>
      </div>
      <div className="md:px-12 mt-3 flex flex-col justify-center items-center text-center sm:flex-row sm:justify-between">
        <div>
          <p className="text-gray-500 mt-4 ">©2023 Garden360</p>
        </div>
        <div className="flex items-center">
          <h3 className="text-black md:text-md text-xs mt-4 pr-3">
            Our payment partners:{" "}
          </h3>

          <div className="flex justify-center items-center mt-4">
            <div className="grid grid-cols-6 gap-3 items-center">
              <div className="bg-white px-0.5 md:px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/phone-pe.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="bg-white px-0.5 md:px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/google-pay-india.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="bg-white px-0.5 md:px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/000000/rupay.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="bg-white px-0.5 md:px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/visa.png"
                  alt="Payment Partner 1"
                />
              </div>
              {/* <div className="bg-white px-0.5 md:px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/mastercard.png"
                  alt="Payment Partner 1"
                />
              </div> */}
              <div className="bg-white px-0.5 md:px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/bhim.png"
                  alt="Payment Partner 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
