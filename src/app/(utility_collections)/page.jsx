import { getUtilityCollections } from "@/repository/utility_collections_repository";
import Link from "next/link";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();

  return (
    <div>
      <h1>Welcome to UtilityCollections!</h1>
      {utilityCollections.map((utilityCollection) => (
        <Link
          key={utilityCollection.utilityCollectionId}
          href="/collectiondetails"
        >
          {utilityCollection.teamCode}
        </Link>
      ))}
    </div>
  );
}

export default UtilityCollections;
