import React from "react";
import Image from "next/legacy/image";
import Gardner from "../../Garden360Images/GardenerImage.jpg";
const index = () => {
  return (
    <div className="flex p-5 my-3 h-75vh">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center  p-8">
        <a href="#" className="text-center text-[34px]  mb-5">
          Book a Gardener.
        </a>
        <button className="border border-green-600 px-4 py-3 text-green-500 font-semibold mt-5">
          Book Now !!
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 border">
        <Image
          src={Gardner}
          alt="Image"
          layout="responsive"
          className="object-fill w-full h-full "
        />
      </div>
    </div>
  );
};

export default index;
