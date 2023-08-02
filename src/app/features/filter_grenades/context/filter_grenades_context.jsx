import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const GrenadesFilter = createContext(null);

export function GrenadesFilterProvider({ children }) {
  const [docs, setDocs] = useState([]);
  const [mapPositions, setMapPositions] = useState([]);

  return (
    <GrenadesFilter.Provider value={{}}>{children}</GrenadesFilter.Provider>
  );
}

export function useGrenadesFilter() {
  return useContext(GrenadesFilter);
}
