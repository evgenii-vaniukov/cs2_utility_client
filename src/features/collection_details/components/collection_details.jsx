import Card from "./card";
export default function CollectionDetails({ collectionUtilities }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto h-screen max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              The Fine Details
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Our patented padded snack sleeve construction protects your
              favorite treats from getting smooshed during all-day adventures,
              long shifts at work, and tough travel schedules.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {collectionUtilities.map((utility) => (
              <Card key={utility.utilityId} utility={utility} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
