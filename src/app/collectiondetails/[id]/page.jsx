import CollectionDetails from "@/features/collection_details/components/collection_details";
import { getCollectionDetails } from "@/repository/utility_collections_repository";

async function CollectionDetailsPage({ params: { id } }) {
  const collectionUtilities = await getCollectionDetails(id);

  return (
    <div>
      <CollectionDetails
        collectionUtilities={collectionUtilities.data}
        utilitiesOrder={collectionUtilities.utilitiesOrder}
      />
    </div>
  );
}

export default CollectionDetailsPage;
