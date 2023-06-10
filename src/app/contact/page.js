import { Footer, Navbar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="flex-1 bg-white">
        {/* <h1 className="text-center py-3  font-bold text-3xl">Contact Us </h1> */}
        {/* <div className="flex items-center justify-center ">
          <form className="w-90 my-5  mx-auto shadow-lg rounded-lg p-5">
            <div className="flex space-x-4 my-5 ">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-1/2 p-3 border rounded-sm border-gray-300 "
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 p-3 border rounded-sm border-gray-300 "
              />
              <input
                type="text"
                placeholder="Email"
                className="w-1/2 p-3 border rounded-sm border-gray-300 "
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Your Enquiry"
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-40"
              required
            ></textarea>
            <div className="text-right mt-4">
              <button className="px-4  text-lg font-semibold py-2 bg-[#689238] text-white rounded-sm ">
                Send Enquiry
              </button>
            </div>
          </form>
        </div> */}
        <div className="flex items-center justify-center">
          <div className="shadow-lg rounded-lg p-5 my-5 mx-auto w-fit">
            <h2 className="text-center text-2xl mb-5 font-bold">Contact Us</h2>
            <div className="flex flex-col my-3 justify-center items-center text-center sm:flex-row sm:justify-between">
              <div
                style={{ width: "250px" }}
                className="m-2 p-3 bg-gray-100 rounded w-250"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=919306308583&text=&source=&data="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/ios/30/whatsapp--v1.png"
                      alt="whatsapp--v1"
                    />
                  </div>
                </a>
                <span className="mt-2">9306308583</span>
              </div>
              <div
                style={{ width: "250px" }}
                className="m-2 p-3 bg-gray-100 rounded w-250"
              >
                <a href="mailto:greenloverscare@email.com">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/ios/30/new-post--v1.png"
                      alt="new-post--v1"
                    />
                  </div>
                  <span className="mt-2">greenloverscare@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
