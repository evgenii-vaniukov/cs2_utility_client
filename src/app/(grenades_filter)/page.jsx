import { GrenadesFilterProvider } from "@/features/filter_grenades/context/grenades_filter_context";
import GrenadesFilter from "@/features/filter_grenades/grenades_filter.jsx";
import { getGrenades } from "@/repository/grenades_repository";

export default async function Grenades() {
  const grenades = await getGrenades("ancient");
  return (
    <GrenadesFilterProvider>
      <GrenadesFilter grenades={grenades} />
    </GrenadesFilterProvider>
  );
}
