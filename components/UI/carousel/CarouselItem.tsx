"use client";
import Image from "next/image";
import React from "react";
import Button from "../Buttons/Button";

interface CarouselItemProps {
  title: string;
  author: string;
  description: string;
  imagePath: string;
}

const CarouselItem = ({
  title,
  author,
  description,
  imagePath,
}: CarouselItemProps) => {
  return (
    <div className="h-full w-full shadow-sm rounded-lg group">
      <div className="relative h-full w-full">
        <Image
          src={imagePath}
          alt={`${title} cover`}
          fill={true}
          className="absolute z-0 rounded-lg"
        />
        <div className="absolute h-full w-full">
          <div className="h-full w-full flex flex-col items-center justify-between">
            <h2 className="p-2 text-2xl">{title}</h2>
            <h3 className="text-md text-neutral-500">{`By ${author}`}</h3>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <div className="hidden group-hover:flex group-hover:bg-neutral-600/25 h-full w-full justify-center items-center p-8">
            <Button>Read Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
