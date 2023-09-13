"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CollectionsList({ utilityCollections }) {
  const router = useRouter();
  return (
    <div>
      {utilityCollections.map((utilityCollection) => (
        //   console.log(utilityCollection.utilityCollectonId),
        <div
          key={utilityCollection.utilityCollectionId}
          className="border-2 border-indigo-600"
          onClick={() => {
            router.push(
              `/collectiondetails/${utilityCollection.utilityCollectonId}`,
            );
          }}
        >
          <h2 className="text-2xl font-bold">{utilityCollection.label}</h2>
          <Image
            className="rounded-t-lg"
            width={200}
            height={200}
            src={utilityCollection.thumbnail}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default CollectionsList;
