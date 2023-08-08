import { useEffect, useState } from "react";
import {
  grenade_types,
  map_names,
  sides,
} from "./../../constants/filter_parameters";
import { getGrenades } from "./../../repository/grenades_repository";
import { getMapPositions } from "./../../repository/map_positions_repository";

import Card from "./components/card";
import FilterBar from "./components/filter_bar";

export default function GrenadesFilter() {
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

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      setDocs([]);

      map_names.forEach(async (map_name) => {
        const grenades = await getGrenades(map_name.map_code);
        setDocs((docs) => [...docs, ...grenades]);
      });
    }
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const compostiteFilter = JSON.parse(
      sessionStorage.getItem("compostiteFilter"),
    );

    if (compostiteFilter) {
      setCompositeFilter(compostiteFilter);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "compostiteFilter",
      JSON.stringify(compostiteFilter),
    );
  }, [compostiteFilter]);

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
  var filteredProducts = docs.filter((doc) => {
    return (
      (compostiteFilter.map_name.length === 0
        ? true
        : compostiteFilter.map_name.includes(doc.map.map_code)) &&
      (compostiteFilter.side.length === 0
        ? true
        : compostiteFilter.side.includes(doc.side.side_code)) &&
      (compostiteFilter.tick_rate.length === 0
        ? true
        : compostiteFilter.tick_rate.includes(doc.tick_rate)) &&
      (compostiteFilter.type.length === 0
        ? true
        : compostiteFilter.type.includes(doc.type.type_code)) &&
      (compostiteFilter.from.length === 0
        ? true
        : compostiteFilter.from.includes(doc.from.position_code)) &&
      (compostiteFilter.to.length === 0
        ? true
        : compostiteFilter.to.includes(doc.to.position_code))
    );
  });

  return (
    <div className="flex">
      <div className="flex flex-col">
        <section>
          <FilterBar
            compostiteFilter={compostiteFilter}
            map_names={map_names}
            mapPositions={mapPositions}
            grenade_types={grenade_types}
            sides={sides}
            handleFilter={handleFilter}
            getMapPositions={getMapPositions}
            setMapPositions={setMapPositions}
            mapPositionsLength={mapPositions.length}
          />
        </section>
      </div>
      <section className="ml-32 grid auto-cols-max grid-flow-col self-center">
        {filteredProducts.map((doc) => {
          return <Card key={doc.id} doc={doc}></Card>;
        })}
      </section>
    </div>
  );
}
