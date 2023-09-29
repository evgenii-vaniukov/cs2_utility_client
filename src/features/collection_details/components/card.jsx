"use client";
import Image from "next/image";
import { useState } from "react";
import Divider from "./divider";
import Tabs from "./tabs";
export default function Card({ utility, idx }) {
  const thumbnail =
    utility.landing === "" ? utility.crosshairAlignment : utility.landing;
  const [src, setSrc] = useState(thumbnail);
  const [currentTab, setCurrentTab] = useState("Landing");
  return (
    <div className="mt-12  sm:mt-8 lg:mt-16">
      <Divider>{idx}</Divider>
      <div className="mt-12 flex flex-col sm:mt-8 md:flex-row lg:mt-16">
        <div className="aspect-h-3 aspect-w-4 w-full overflow-hidden rounded-lg md:aspect-h-2 md:aspect-w-5 md:w-7/12">
          {currentTab === "Throwing" ? (
            <iframe
              width="560"
              height="315"
              src={src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <Image src={src} alt="Not loaded." fill layout="cover" />
          )}
        </div>
        <div className="mt-8 flex w-full items-center px-4 md:mt-0 md:w-5/12 md:flex-col md:items-start">
          <Tabs
            utility={utility}
            setSrc={setSrc}
            setCurrentTab={setCurrentTab}
          />
          <p className="ml-3 text-sm text-gray-500 md:ml-0 md:mt-8 md:text-base">
            {utility.label}
          </p>

          <p className="text-sm text-gray-600 md:mt-2 md:text-base">
            Bind: {utility.bind}
          </p>
        </div>
      </div>
    </div>
  );
}
