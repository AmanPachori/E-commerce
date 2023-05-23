import React from "react";

const index = () => {
  return (
    <>
      <div className="relative p-5 my-5 mx-auto items-center w-3/4 border rounded-sm">
        <h2 className="text-left text-4xl mb-5 font-bold ">Contact Us</h2>
        <div className="flex space-x-4 my-5 ">
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-1/2 p-3 border rounded-sm border-gray-300 "
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-1/2 p-3 border rounded-sm border-gray-300 "
          />
        </div>
        <div className="text-right mt-4">
          <button className="px-4  text-xl font-semibold py-2 bg-[#689238] text-white rounded-sm ">
            Submit
          </button>
        </div>
      </div>
      {/* <div className="bg-[#dde4d8] p-3 mt-3 flex items-center justify-center">
        <div className="font-semibold p-3 text-xl ">
          Get our app and shop on-the-go
        </div>
        <div>
          <button className="px-4  text-xl font-semibold py-2 bg-[#689238] text-white rounded">
            Get app
          </button>
        </div>
      </div> */}
    </>
  );
};

export default index;
