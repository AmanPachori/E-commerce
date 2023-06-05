import React from "react";
import Image from "next/legacy/image";
import Gardner from "../../Garden360Images/GardenerImage.jpg";
const Index = () => {
  return (
    <div className="grid grid-cols-2 mx-2 my-1">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center  p-8">
        <a
          href="https://docs.google.com/forms/d/1IldDYr7J7y-ib8rD39KZeWKG39Qa_-Y1slSGe6R-qk4/viewform?edit_requested=true"
          target="_blank"
          className="text-center text-[20px] md:text-[34px]  mb-2"
        >
          Book a Gardener
        </a>
        <a
          href="https://docs.google.com/forms/d/1IldDYr7J7y-ib8rD39KZeWKG39Qa_-Y1slSGe6R-qk4/viewform?edit_requested=true"
          target="_blank"
          className="border border-green-600 px-1 sm:px-4 py-2  md:py-3 text-green-500 font-semibold mt-3 h-8 md:h-14 text-xs sm:text-sm md:text-2xl"
        >
          Book Now !!
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
