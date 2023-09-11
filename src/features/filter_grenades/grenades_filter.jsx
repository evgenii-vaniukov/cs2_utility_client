import { useEffect } from "react";

import Card from "./components/card";
import FilterBar from "./components/filter_bar";
import { useGrenadesFilter } from "./context/grenades_filter_context";

export default function GrenadesFilter() {
  const {
    docs,
    setDocs,
    compostiteFilter,
    setCompositeFilter,
    map_names,
    getGrenades,
  } = useGrenadesFilter();

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
  }, [getGrenades, map_names, setDocs]);

  useEffect(() => {
    const compostiteFilter = JSON.parse(
      sessionStorage.getItem("compostiteFilter"),
    );

    if (compostiteFilter) {
      setCompositeFilter(compostiteFilter);
    }
  }, [setCompositeFilter]);

  useEffect(() => {
    sessionStorage.setItem(
      "compostiteFilter",
      JSON.stringify(compostiteFilter),
    );
  }, [compostiteFilter]);

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
          <FilterBar />
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
