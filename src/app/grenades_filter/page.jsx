import { GrenadesFilterProvider } from "@/features/filter_grenades/context/grenades_filter_context";
import GrenadesFilter from "@/features/filter_grenades/grenades_filter.jsx";

export default async function Grenades() {
  // Fix with updated route that calls for all the utilities and not for collections.
  const utilityCollections = await getUtilityCollections();
  return (
    <GrenadesFilterProvider>
      <GrenadesFilter grenades={grenades} />
    </GrenadesFilterProvider>
  );
}
