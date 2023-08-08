import { createContext, useContext, useState } from "react";
import {
  grenade_types,
  map_names,
  sides,
} from "./../../../constants/filter_parameters";
import { getGrenades } from "./../../../repository/grenades_repository";
import { getMapPositions } from "./../../../repository/map_positions_repository";

export const GrenadesFilter = createContext(null);

export function GrenadesFilterProvider({ children }) {
  const [docs, setDocs] = useState([]);
  const [compostiteFilter, setCompositeFilter] = useState({
    map_name: [],
    side: [],
    tick_rate: [],
    type: [],
    from: [],
    to: [],
  });

  const [mapPositions, setMapPositions] = useState([]);

  function handleFilter(checked, name, value) {
    if (checked) {
      setCompositeFilter({
        ...compostiteFilter,
        [name]: [...compostiteFilter[name], value],
      });
    } else {
      setCompositeFilter({
        ...compostiteFilter,
        [name]: compostiteFilter[name].filter((position) => position !== value),
      });
    }
  }
  const mapPositionsLength = mapPositions.length;
  return (
    <GrenadesFilter.Provider
      value={{
        docs,
        setDocs,
        compostiteFilter,
        setCompositeFilter,
        mapPositions,
        setMapPositions,
        map_names,
        sides,
        grenade_types,
        handleFilter,
        getGrenades,
        getMapPositions,
        mapPositionsLength,
      }}
    >
      {children}
    </GrenadesFilter.Provider>
  );
}

export function useGrenadesFilter() {
  return useContext(GrenadesFilter);
}
