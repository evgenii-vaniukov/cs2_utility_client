import Example from "@/features/filter_collections/components/example";
import { getUtilityCollections } from "@/repository/utility_collections_repository";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();
  return (
    <>
      {/* <CollectionsList utilityCollections={utilityCollections} /> */}
      <Example utilityCollections={utilityCollections} />
    </>
  );
}

export default UtilityCollections;
