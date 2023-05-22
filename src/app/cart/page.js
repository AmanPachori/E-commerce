"use client";
import React, { useState } from "react";
import Image from "next/legacy/image";

import { Footer, Navbar } from "@/components";
import seed from "../../Garden360Images/seed.jpeg";

const page = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-[50rem] overflow-y-auto">
        <div className="w-3/5 p-4">
          <h2 className="text-xl font-bold mb-4">Items in your cart</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center justify-center">
                  <Image
                    src={seed}
                    alt="Item"
                    width={60}
                    height={60}
                    className=""
                  />
                  <br />
                  <span className="ml-2">Item Name</span>
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    <button
                      className="text-black bg-gray-100 border rounded-full flex items-center h-[1rem] p-3"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-16 mx-2 px-2 py-1 text-center border border-gray-300 rounded"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="text-black bg-gray-100 border rounded-full flex items-center h-[1rem] p-3"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-2/5 p-5">
          <div className="mb-4">
            <div className="flex justify-between font-light text-sm my-1 p-3">
              <p>Item Total:</p> <p className="">$100</p>
            </div>
            <div className="flex justify-between font-bold text-base  my-2 p-3">
              <p>Delivery Charges:</p> <p className="">$10</p>
            </div>
            <p className="text-xs my-2 bg-[#fdf7e9] p-3 text-[#926902] rounded ">
              Get free delivery by adding items worth ₹199.00 more
            </p>
            <div className="flex justify-between font-black text-lg my-2 bg-slate-300 p-3 rounded ">
              <p>Total:</p> <p className="">$110</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs my-2 p-3 text-gray-500 ">
              *Delivery charges will be calculated in further steps
            </p>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <button className="bg-green-500 w-full text-center text-white py-2 px-4 rounded-md hover:bg-green-600">
            Purchase
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
