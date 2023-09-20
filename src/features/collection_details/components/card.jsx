"use client";
import Image from "next/image";
import { useState } from "react";
import Divider from "./divider";
import Tabs from "./tabs";
export default function Card({ utility, idx }) {
  const thumbnail =
    utility.landing === "" ? utility.crosshairAlignment : utility.landing;
  const [src, setSrc] = useState(thumbnail);
  return (
    <div className="mt-12  sm:mt-8 lg:mt-16">
      <Divider>{idx}</Divider>
      <div className="mt-12 flex sm:mt-8 lg:mt-16">
        <div
          // onMouseEnter={() => {
          //   setSrc(utility.throwing);
          // }}
          // onMouseLeave={() => {
          //   setSrc(thumbnail);
          // }}
          className=" aspect-h-4 aspect-w-9  w-4/6 overflow-hidden rounded-lg"
        >
          <Image src={src} alt="Not loaded." fill layout="cover" />
        </div>
        <div className="flex w-2/6 flex-col px-4">
          <Tabs utility={utility} setSrc={setSrc} />
          <p className="mt-8 text-base text-gray-500">{utility.label}</p>

          <p>Bind: {utility.bind}</p>
        </div>
      </div>
    </div>
  );
}
