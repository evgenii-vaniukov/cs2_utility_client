"use client";
import { grenade_types, map_names, sides } from "@/constants/filter_parameters";
import { createContext, useContext, useState } from "react";

export const CollectionsFilter = createContext(null);

export function CollectionsFilterProvider({ children }) {
  const [compostiteFilter, setCompositeFilter] = useState({
    map: [],
    side: [],
    palnt: [],
  });

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
  return (
    <CollectionsFilter.Provider
      value={{
        compostiteFilter,
        setCompositeFilter,
        map_names,
        sides,
        grenade_types,
        handleFilter,
      }}
    >
      {children}
    </CollectionsFilter.Provider>
  );
}

export function useCollectionsFilter() {
  return useContext(CollectionsFilter);
}
