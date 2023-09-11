import { GrenadesFilterProvider } from "@/features/filter_grenades/context/grenades_filter_context";
import GrenadesFilter from "@/features/filter_grenades/grenades_filter.jsx";

export default function Grenades() {
  return (
    <GrenadesFilterProvider>
      <GrenadesFilter />
    </GrenadesFilterProvider>
  );
}
