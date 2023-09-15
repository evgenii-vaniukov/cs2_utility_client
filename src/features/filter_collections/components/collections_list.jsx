"use client";
import { useRouter } from "next/navigation";

import Card from "./card";
export default function CollectionsList({ utilityCollections }) {
  const router = useRouter();
  return (
    <div className="bg-white py-2 sm:py-2">
      <div className="max-w-7xl px-6 lg:px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {utilityCollections.map((utilityCollection) => (
            <Card
              key={utilityCollection.utilityCollectionId}
              utilityCollection={utilityCollection}
              onClick={() => {
                router.push(
                  `/collectiondetails/${utilityCollection.utilityCollectonId}`,
                );
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
