import Dashboard from "@/features/filter_collections/dashboard";

import { getLikesCount } from "@/repository/likes_repository";
import { getUtilityCollections } from "@/repository/utility_collections_repository";

async function UtilityCollections() {
  const utilityCollections = await getUtilityCollections();
  const likesCount = await getLikesCount();
  return (
    <>
      <Dashboard
        utilityCollections={utilityCollections}
        likesCount={likesCount}
      />
    </>
  );
}

export default UtilityCollections;
