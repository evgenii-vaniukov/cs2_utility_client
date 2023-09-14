import Sidebar from "@/features/filter_collections/components/sidebar";
import { getUtilityCollections } from "@/repository/utility_collections_repository";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();
  return (
    <>
      {/* <Example utilityCollections={utilityCollections} /> */}
      <Sidebar utilityCollections={utilityCollections} />
    </>
  );
}

export default UtilityCollections;
