export default function Card({ utility }) {
  return (
    <div>
      <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
        <img
          src={utility.landing}
          alt="Drawstring top with elastic loop closure and textured interior padding."
          className="h-full w-full object-cover object-center"
        />
      </div>
      <p className="mt-8 text-base text-gray-500">{utility.label}</p>
    </div>
  );
}
