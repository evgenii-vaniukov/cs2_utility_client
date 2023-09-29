"use client";
import { Feedback } from "@/components/feedback";
import Card from "./components/card";
export default function CollectionDetails({
  collectionUtilities,
  utilitiesOrder,
}) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Utilities
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              The utilities are suggested to be thrown in the presented order.
            </p>
            <Feedback />
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-16 lg:max-w-7xl lg:px-8">
        {utilitiesOrder.map((grenadeTypeCode, idx) => {
          const utility = collectionUtilities.find(
            (utility) => utility.grenadeTypeCode === grenadeTypeCode,
          );
          return (
            <Card key={utility.utilityId} utility={utility} idx={idx + 1} />
          );
        })}
      </div>
    </div>
  );
}
