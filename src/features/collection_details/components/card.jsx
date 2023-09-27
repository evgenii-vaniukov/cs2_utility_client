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
      <div className="mt-12 flex sm:mt-8 lg:mt-16">
        <div className="aspect-h-2 aspect-w-5 w-7/12 overflow-hidden rounded-lg">
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
        <div className="flex w-5/12 flex-col px-4">
          <Tabs
            utility={utility}
            setSrc={setSrc}
            setCurrentTab={setCurrentTab}
          />
          <p className="mt-8 text-base text-gray-500">{utility.label}</p>

          <p>Bind: {utility.bind}</p>
        </div>
      </div>
    </div>
  );
}
