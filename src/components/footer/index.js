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
            className="rounded"
            width={80}
            height={80}
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
        <div className=" md:text-left mb-4 md:mb-0">
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
            href="https://api.whatsapp.com/send?phone=919306308583&text=&source=&data="
            target="_blank"
            className="bg-green-500 my-2 text-white py-2 px-4 "
          >
            Chat on WhatsApp
          </a>
        </div>
        <div></div>
      </div>
      <div className="md:px-12 mt-3 flex justify-between">
        <p className=" text-gray-500 mt-4 ">©2022 Garden360</p>
        <div className="flex items-center">
          <h3 className="text-black mt-4 pr-3">Our payment partner : </h3>

          <div className="flex justify-center items-center mt-4">
            <div className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-1 bg-white px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/phone-pe.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="col-span-1 bg-white px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/google-pay-india.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="col-span-1 bg-white px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/000000/rupay.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="col-span-1 bg-white px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/visa.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="col-span-1 bg-white px-2 py-0.5 rounded">
                <img
                  src="https://img.icons8.com/color/27/mastercard.png"
                  alt="Payment Partner 1"
                />
              </div>
              <div className="col-span-1 bg-white px-2 py-0.5 rounded">
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

export default index;
