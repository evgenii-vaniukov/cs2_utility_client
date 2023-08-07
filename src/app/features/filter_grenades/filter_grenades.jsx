import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

import Card from "./components/card";
import FilterBar from "./components/filter_bar";

const map_names = [
  { map_code: "mirage", map_full_name: "Mirage" },
  { map_code: "inferno", map_full_name: "Inferno" },
  { map_code: "overpass", map_full_name: "Overpass" },
  { map_code: "dust2", map_full_name: "Dust II" },
  { map_code: "ancient", map_full_name: "Ancient" },
  { map_code: "anubis", map_full_name: "Anubis" },
  { map_code: "nuke", map_full_name: "Nuke" },
  { map_code: "tuscan", map_full_name: "Tuscan" },
  { map_code: "cache", map_full_name: "Cache" },
  { map_code: "cbble", map_full_name: "Cobblestone" },
  { map_code: "train", map_full_name: "Train" },
];

const sides = [
  { side_code: "t_side", side_full_name: "Terrorists" },
  { side_code: "ct_side", side_full_name: "Counter Terrorists" },
];

const grenade_types = [
  {
    grenade_code: "smoke",
    grenade_full_name: "Smoke",
  },
  {
    grenade_code: "flash",
    grenade_full_name: "Flash",
  },
  {
    grenade_code: "molotov",

    grenade_full_name: "Molotov",
  },
  {
    grenade_code: "he",
    grenade_full_name: "High Explosive",
  },
  {
    grenade_code: "one_way_smoke",
    grenade_full_name: "One Way Smoke",
  },
];

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

    async function getGrenades(map_name) {
      setDocs(() => []);
      const querySnapshot = await getDocs(
        collection(db, "maps", map_name, "grenades"),
      );
      if (!ignore) {
        querySnapshot.forEach((doc) => {
          setDocs((docs) => [...docs, doc.data()]);
        });
      }
      return () => {
        ignore = true;
      };
    }

    map_names.forEach((map_name) => {
      getGrenades(map_name.map_code);
    });
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

  async function getMapPositions(map_name, checked) {
    setMapPositions(() => []);
    if (!checked) {
      return;
    }
    const querySnapshot = await getDocs(
      collection(db, "maps", map_name, "positions"),
    );

    querySnapshot.forEach((doc) => {
      setMapPositions((docs) => [
        ...docs,
        {
          position_code: doc.data().position_code,
          position_name: doc.data().position_name,
        },
      ]);
    });
  }

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
