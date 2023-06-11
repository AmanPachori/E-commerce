import React from "react";
import Image from "next/legacy/image";
import Gardner from "../../Garden360Images/Kitchengarden.png";
const Index = () => {
  return (
    <div className="grid grid-cols-2 mx-2 my-1">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center  p-8">
        <a
          href="https://docs.google.com/forms/d/1chKZkUVosMzKqoUbDjQXZqEgeMrXw5utWKwT559_POc/viewform?edit_requested=true"
          target="_blank"
          className="text-center text-[16px] md:text-[34px]  mb-2"
        >
          Setup your Kitchen Garden
        </a>
        <a
          href="https://docs.google.com/forms/d/1chKZkUVosMzKqoUbDjQXZqEgeMrXw5utWKwT559_POc/viewform?edit_requested=true"
          target="_blank"
          className="border border-green-600 px-1 sm:px-4 py-1.5  md:py-3 text-green-500 font-semibold mt-3 h-8 md:h-14 text-sm sm:text-sm md:text-2xl"
        >
          Setup Now
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-2">
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

export default Index;
