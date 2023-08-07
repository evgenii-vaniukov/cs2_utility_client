import Image from "next/image";
import { useLocation } from "react-router-dom";

export default function GrenadeDetails() {
  const location = useLocation();
  const { doc } = location.state;

  return (
    <div>
      <h1>GrenadeDetails</h1>
      <p>Map: {doc.map.map_full_name}</p>
      <p>Type: {doc.type.type_full_name}</p>
      <p>Side: {doc.side.side_full_name}</p>
      <p>From: {doc.from.position_full_name}</p>
      <p>To: {doc.to.position_full_name}</p>
      <p>Tick: {doc.tick_rate}</p>

      <Image
        className="rounded-t-lg"
        width={600}
        height={338}
        src={doc.throwing}
        alt=""
      />
      <Image
        className="rounded-t-lg"
        width={337}
        height={176}
        src={doc.landing}
        alt=""
      />
    </div>
  );
}
