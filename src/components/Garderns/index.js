import React from "react";
import Image from "next/legacy/image";
import indoor from "../../Garden360Images/IndoorGarden.png";
import outdoor from "../../Garden360Images/OutdoorGarden.png";
import balcony from "../../Garden360Images/BalconyGarden.png";
import vertical from "../../Garden360Images/VerticalGarden.png";
import landscape from "../../Garden360Images/Landscaping.png";
import office from "../../Garden360Images/OfficeGarden.png";
import terrance from "../../Garden360Images/TerraceGarden.png";
import "../../app/globals.css";
const index = () => {
  return (
    <div className="text-center py-5 my-5">
      <h2 className="text-2xl font-semibold my-5 p-5">
        We Can Design & Setup Your Dream Garden
      </h2>
      <div>
        <div className="">
          <Image
            src={indoor}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
        <div className="">
          <Image
            src={outdoor}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
        <div className="">
          <Image
            src={vertical}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
        <div className="">
          <Image
            src={balcony}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
        <div className="">
          <Image
            src={terrance}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
        <div className="">
          <Image
            src={office}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
        <div className="">
          <Image
            src={landscape}
            alt="Image 1"
            className="rounded-md"
            width={1920}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
