import Dashboard from "@/features/filter_collections/components/dashboard";

import { getUtilityCollections } from "@/repository/utility_collections_repository";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();
  return (
    <>
      <Dashboard utilityCollections={utilityCollections} />
    </>
  );
}

export default UtilityCollections;
