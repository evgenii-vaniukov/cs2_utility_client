import Image from "next/image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ doc }) {
  const navigate = useNavigate();

  const [src, setSrc] = useState(doc.landing);

  return (
    <>
      <div
        onClick={() => {
          navigate("/grenade_details", {
            state: {
              doc: doc,
            },
          });
        }}
        onMouseEnter={() => {
          setSrc(doc.throwing);
        }}
        onMouseLeave={() => {
          setSrc(doc.landing);
        }}
        className=" rounded-lg border border-gray-200 bg-white shadow transition-shadow duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
      >
        <Image
          className="rounded-t-lg bg-inherit"
          width={500}
          height={281}
          src={src}
          alt=""
        />
        <Image
          className="rounded-t-lg"
          width={376}
          height={212}
          src={doc.crosshair_alignment}
          alt=""
        />

        {/* <div className="p-5">
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>Map: {doc.map.map_full_name}</p>
            <p>Type: {doc.type.type_full_name}</p>
            <p>Side: {doc.side.side_full_name}</p>

            <p>From: {doc.from.position_full_name}</p>
            <p>To: {doc.to.position_full_name}</p>
            <p>Tick: {doc.tick_rate}</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
