import Image from "next/image";
import { useNavigate } from "react-router-dom";

export default function Card({ doc }) {
  const navigate = useNavigate();
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
        className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
      >
        <Image
          className="rounded-t-lg"
          width={337}
          height={176}
          src={doc.landing}
          alt=""
        />

        <div className="p-5">
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>Map: {doc.map.map_full_name}</p>
            <p>Type: {doc.type.type_full_name}</p>
            <p>Side: {doc.side.side_full_name}</p>

            <p>From: {doc.from.position_full_name}</p>
            <p>To: {doc.to.position_full_name}</p>
            <p>Tick: {doc.tick_rate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
