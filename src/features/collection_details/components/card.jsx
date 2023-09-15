import Image from "next/image";
export default function Card({ utility }) {
  return (
    <div>
      <div className="aspect-h-2 aspect-w-3  w-full overflow-hidden rounded-lg">
        <Image
          src={utility.landing}
          alt="Drawstring top with elastic loop closure and textured interior padding."
          fill
          layout="cover"
        />
      </div>
      <p className="mt-8 text-base text-gray-500">{utility.label}</p>
    </div>
  );
}
