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
const Index = () => {
  return (
    <div className="text-center pb-5 mb-5 ">
      <h2 className="text-2xl font-semibold my-5 p-5">
        We Can Design & Setup Your Dream Garden
      </h2>
      <div>
        <a
          href="https://docs.google.com/forms/d/1chKZkUVosMzKqoUbDjQXZqEgeMrXw5utWKwT559_POc/viewform?edit_requested=true"
          target="_blank"
        >
          <div className="mb-2">
            <Image
              src={indoor}
              alt="Image 1"
              className="rounded-md"
              width={1920}
              height={650}
            />
          </div>
          <div className="mb-2">
            <Image
              src={outdoor}
              alt="Image 1"
              className="rounded-md"
              width={1920}
              height={650}
            />
          </div>
          <div className="mb-2">
            <Image
              src={vertical}
              alt="Image 1"
              className="rounded-md"
              width={1920}
              height={650}
            />
          </div>
          <div className="mb-2">
            <Image
              src={balcony}
              alt="Image 1"
              className="rounded-md"
              width={1920}
              height={650}
            />
          </div>
          <div className="mb-2">
            <Image
              src={terrance}
              alt="Image 1"
              className="rounded-md"
              width={1920}
              height={650}
            />
          </div>
          <div className="mb-2">
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
        </a>
      </div>
    </div>
  );
};

export default Index;
