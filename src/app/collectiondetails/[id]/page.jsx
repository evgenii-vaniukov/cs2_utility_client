import { getCollectionDetails } from "@/repository/utility_collections_repository";

async function CollectionDetails({ params: { id } }) {
  const collectionUtilities = await getCollectionDetails(id);

  return (
    <div>
      <h2>Collection Details</h2>
      <div>
        {collectionUtilities.map((collectionUtility) => (
          <div key={collectionUtility.utilityId}>
            <h2>{collectionUtility.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionDetails;
