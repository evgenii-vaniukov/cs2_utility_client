import { getUtilityCollections } from "@/repository/utility_collections_repository";
import Image from "next/image";
import Link from "next/link";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();

  return (
    <>
      <h1>Welcome to UtilityCollections!</h1>
      {utilityCollections.map((utilityCollection) => (
        <div key={utilityCollection.utilityCollectionId}>
          <Link href="/collectiondetails">{utilityCollection.label}</Link>
          <Image
            className="rounded-t-lg"
            width={100}
            height={100}
            src={utilityCollection.thumbnail}
            alt=""
          />
        </div>
      ))}
    </>
  );
}

export default UtilityCollections;
