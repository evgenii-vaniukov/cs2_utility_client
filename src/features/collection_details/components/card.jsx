"use client";
import Image from "next/image";
import { useState } from "react";
export default function Card({ utility }) {
  const [src, setSrc] = useState(utility.landing);
  return (
    <div
      onMouseEnter={() => {
        setSrc(utility.throwing);
      }}
      onMouseLeave={() => {
        setSrc(utility.landing);
      }}
    >
      <div className="aspect-h-2 aspect-w-3  w-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt="Drawstring top with elastic loop closure and textured interior padding."
          fill
          layout="cover"
        />
      </div>
      <p className="mt-8 text-base text-gray-500">{utility.label}</p>
      <div className="mt-4 flex flex-col  justify-between text-sm text-gray-500">
        <p>Bind: {utility.bind}</p>
      </div>
    </div>
  );
}
