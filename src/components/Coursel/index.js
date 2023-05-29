"use client";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";

import Image1 from "../../Garden360Images/SlidingBannerImage1.png";
import Image2 from "../../Garden360Images/SlidingBannerImage2.png";
const images = [Image1, Image2];
const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="relative coursel border overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out transform-translate-x-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full ${
              index === currentImage ? "translate-x-0" : ""
            } animate-slide`}
          >
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="absolute resposive inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
