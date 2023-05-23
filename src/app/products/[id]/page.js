import React from "react";
import Image from "next/legacy/image";
import tools from "../../../Garden360Images/tools.png";
import tool from "../../../Garden360Images/tool.png";

import { Footer, Navbar } from "@/components";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="h-3/5  w-full bg-center">
          <Image src={tools} height={400} sizes="(max-width: 768px) 100vw" />
        </div>
        <br />
        <div className="flex">
          <div className=" w-1/4 flex flex-col p-4">
            <div>
              <select className="border-b-2 bg-white rounded px-2 my-2 w-full py-2">
                <option className="py-2" value="">
                  Sort By :
                </option>
                <option className="py-2" value="name">
                  Name
                </option>
                <option className="py-2" value="price">
                  Price
                </option>
              </select>
            </div>
            <div>
              <select className="border-b-2 bg-white rounded px-2 my-2 w-full py-2">
                <option value="">Price</option>
                <option value="under-10">$0 - $10</option>
                <option value="10-20">$10 - $20</option>
                <option value="over-20">$20+</option>
              </select>
            </div>
            <button className=" bg-white text-[#689238]">
              Clear All Filters
            </button>
          </div>

          <div className="flex justify-center items-center p-4">
            <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg">
              <Image
                src={tool}
                alt="Product"
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Product Name</h3>
                <p className="text-gray-800 font-medium">$99.99</p>
                <div className="flex justify-between mt-4">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    className="border rounded-md border-[#689238] text-white px-4 py-2 rounded-m"
                  >
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/689238/whatsapp--v1.png"
                      alt="whatsapp--v1"
                    />
                  </a>
                  <button className="bg-[#689238] text-white px-4 py-2 rounded-md ">
                    Add to Cart
                  </button>
                </div>
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
