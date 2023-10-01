import Dashboard from "@/features/filter_collections/dashboard";

import { getLikesCount } from "@/repository/analytics/likes/likes_repository";
import { getUtilityCollections } from "@/repository/utility_collections/utility_collections_repository";
export const revalidate = 60;

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
