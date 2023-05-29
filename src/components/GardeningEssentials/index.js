import React from "react";
import Image from "next/legacy/image";
import soil from "../../Garden360Images/soil.png";
import manuers from "../../Garden360Images/manure.png";
import Bio from "../../Garden360Images/Bio.png";
import tool from "../../Garden360Images/tool.png";
const Index = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold mb-8">
        Gardening Essentials
      </h1>
      <div className="flex flex-col justify-center items-center text-center sm:flex-row sm:justify-between">
        <div className="flex flex-col rounded-lg  border items-center m-3">
          <Image
            src={manuers}
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center text-xl font-normal tracking-wide mt-2 p-3">
            Manuers & Fertilzer
          </p>
        </div>
        <div className="flex flex-col  border items-center m-3">
          <Image
            src={soil}
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center text-xl font-normal tracking-wide mt-2 p-3">
            Soil Mixes
          </p>
        </div>
        <div className="flex flex-col  border items-center m-3">
          <Image
            src={tool}
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center text-xl font-normal tracking-wide mt-2 p-3">
            Tools & Equipment
          </p>
        </div>
        <div className="flex flex-col  border items-center m-3">
          <Image
            src={Bio}
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center text-xl font-normal tracking-wide mt-2 p-3">
            Bio Pesticides
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
