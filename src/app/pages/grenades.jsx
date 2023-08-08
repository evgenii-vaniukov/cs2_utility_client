import GrenadesFilter from "../features/filter_grenades/filter_grenades.jsx";
import { GrenadesFilterProvider } from "./../features/filter_grenades/context/filter_grenades_context";

export default function Grenades() {
  return (
    <GrenadesFilterProvider>
      <GrenadesFilter />
    </GrenadesFilterProvider>
  );
}
