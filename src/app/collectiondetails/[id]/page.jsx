import CollectionDetails from "@/features/collection_details/collection_details";
import { getCollectionDetails } from "@/repository/utility_collections_repository";

async function CollectionDetailsPage({ params: { id } }) {
  const collectionUtilities = await getCollectionDetails(id);

  return (
    <div>
      <h2>Collection Details</h2>
      <CollectionDetails collectionUtilities={collectionUtilities} />
    </div>
  );
}

export default CollectionDetailsPage;
