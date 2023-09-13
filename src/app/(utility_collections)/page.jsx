import CollectionsList from "@/features/filter_collections/components/collections_list";
import { getUtilityCollections } from "@/repository/utility_collections_repository";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();
  return (
    <>
      <h1>Welcome to UtilityCollections!</h1>
      <CollectionsList utilityCollections={utilityCollections} />
    </>
  );
}

export default UtilityCollections;
