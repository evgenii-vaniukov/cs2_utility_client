import Card from "./card";
export default function CollectionDetails({ collectionUtilities }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
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
        </section>
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-16 lg:max-w-7xl lg:px-8">
        {collectionUtilities.map((utility) => (
          <Card key={utility.utilityId} utility={utility} />
        ))}
      </div>
    </div>
  );
}
