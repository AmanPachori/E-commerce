import React from "react";
import Image from "next/legacy/image";
import Gardner from "../../Garden360Images/GardenerImage";
const index = () => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-200 p-8">
        <a href="#" className="text-center text-xl font-bold mb-4">
          Book a Gardener.
        </a>
        <button className="border border-green-500 px-4 py-2 text-green-500 font-semibold">
          Book Now!
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <Image
          src={Gardner}
          alt="Image"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default index;
