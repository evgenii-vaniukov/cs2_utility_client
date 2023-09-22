export default function Card({ utilityCollection, onClick }) {
  return (
    <article
      onClick={onClick}
      className="flex flex-col items-start justify-between rounded-xl p-3 shadow-md"
    >
      {/* <div className="relative aspect-[16/9] w-full rounded-2xl sm:aspect-[2/1] lg:aspect-[3/2]">
        <Image
          src={utilityCollection.thumbnail}
          alt=""
          fill={true}
          className=" rounded-xl"
        />
      </div> */}
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <p
            className={`relative z-10 rounded-full ${
              utilityCollection.teamCode == "T_SIDE"
                ? "bg-yellow-200"
                : "bg-blue-300"
            } px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100`}
          >
            {utilityCollection.teamCode}
          </p>
          <time
            dateTime={utilityCollection.createdAt}
            className="text-gray-500"
          >
            {new Date(
              Date.parse(utilityCollection.createdAt),
            ).toLocaleDateString("en-GB")}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <span className="absolute inset-0" />
            {utilityCollection.label}
          </h3>
        </div>
      </div>
    </article>
  );
}
