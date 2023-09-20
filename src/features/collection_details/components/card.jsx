"use client";
import Image from "next/image";
import { useState } from "react";
export default function Card({ utility }) {
  const thumbnail =
    utility.landing === "" ? utility.crosshairAlignment : utility.landing;
  const [src, setSrc] = useState(thumbnail);
  return (
    <div
      onMouseEnter={() => {
        setSrc(utility.throwing);
      }}
      onMouseLeave={() => {
        setSrc(thumbnail);
      }}
      className="mt-12 flex sm:mt-8 lg:mt-16"
    >
      <div className=" aspect-h-4 aspect-w-10  w-4/6 overflow-hidden rounded-lg">
        <Image src={src} alt="Not loaded." fill layout="cover" />
      </div>
      <div className="flex w-2/6 flex-col">
        <p className="mt-8 text-base text-gray-500">{utility.label}</p>

        <p>Bind: {utility.bind}</p>
      </div>
    </div>
  );
}
