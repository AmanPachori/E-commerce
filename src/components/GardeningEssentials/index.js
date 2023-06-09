import React from "react";
import Image from "next/legacy/image";
import soil from "../../Garden360Images/soil.png";
import manuers from "../../Garden360Images/manure.png";
import Bio from "../../Garden360Images/Bio.png";
import tool from "../../Garden360Images/tool.png";
const Index = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold mb-5">
        Gardening Essentials
      </h1>
      <div className="grid grid-cols-4">
        <div className="flex flex-col rounded-lg  border items-center m-1 md:m-3 h-[34]">
          <a
            href="https://api.whatsapp.com/send/?phone=919306308583&text=Hello%2C+I+want+to+order+gardening+products.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              src={manuers}
              alt="Image 1"
              width={440}
              height={440}
              className="rounded-lg"
            />
            <p className="text-center text-xs md:text-xl md:font-normal md:tracking-wide mt-2 p-2 md:p-3">
              Manures & Fertilzers
            </p>
          </a>
        </div>
        <div className="flex flex-col rounded-lg  border items-center m-1 md:m-3 h-[34]">
          <a
            href="https://api.whatsapp.com/send/?phone=919306308583&text=Hello%2C+I+want+to+order+gardening+products.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              src={soil}
              alt="Image 1"
              width={440}
              height={440}
              className="rounded-lg"
            />
            <p className="text-center text-xs md:text-xl md:font-normal md:tracking-wide mt-2 p-2 md:p-3">
              Soil Mixes
            </p>
          </a>
        </div>
        <div className="flex flex-col rounded-lg  border items-center m-1 md:m-3 h-[34]">
          <a
            href="https://api.whatsapp.com/send/?phone=919306308583&text=Hello%2C+I+want+to+order+gardening+products.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              src={tool}
              alt="Image 1"
              width={440}
              height={440}
              className="rounded-lg"
            />
            <p className="text-center text-xs md:text-xl md:font-normal md:tracking-wide mt-2 p-2 md:p-3">
              Tools & Equipments
            </p>
          </a>
        </div>
        <div className="flex flex-col rounded-lg  border items-center m-1 md:m-3 h-[34]">
          <a
            href="https://api.whatsapp.com/send/?phone=919306308583&text=Hello%2C+I+want+to+order+gardening+products.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              src={Bio}
              alt="Image 1"
              width={440}
              height={440}
              className="rounded-lg"
            />
            <p className="text-center text-xs md:text-xl md:font-normal md:tracking-wide mt-2 p-2 md:p-3">
              Bio Pesticides
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
