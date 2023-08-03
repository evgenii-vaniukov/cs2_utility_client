import { useState, useEffect } from "react";
import {
  DocumentData,
  collection,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import FilterBar from "./components/filter_bar";
import GrenadeThumbnail from "./components/grenade_thumbnail";

export default function GrenadesFilter() {
  const [docs, setDocs] = useState([]);
  const [compostiteFilter, setCompositeFilter] = useState({
    map_name: [],
    tick_rate: [],
    type: [],
    from: [],
    to: [],
  });
  const [mapPositions, setMapPositions] = useState([]);

  const grenade_types = ["smoke", "flash", "molotov", "he", "one_way_smoke"];
  const map_names = [
    "Ancient",
    "dust_2",
    "mirage",
    "inferno",
    "nuke",
    "overpass",
  ];

  useEffect(() => {
    let ignore = false;

    async function getGrenades() {
      setDocs(() => []);
      const querySnapshot = await getDocs(
        collection(db, "maps", "dust_2", "grenades"),
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

    getGrenades();
  }, []);

  async function getMapPositions(map_name, checked) {
    setMapPositions(() => []);
    if (!checked) {
      return;
    }
    const querySnapshot = await getDocs(
      collection(db, "maps", map_name, "positions"),
    );

    querySnapshot.forEach((doc) => {
      setMapPositions((docs) => [...docs, doc.data().position_code]);
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
        : compostiteFilter.map_name.includes(doc.map_name)) &&
      (compostiteFilter.tick_rate.length === 0
        ? true
        : compostiteFilter.tick_rate.includes(doc.tick_rate)) &&
      (compostiteFilter.type.length === 0
        ? true
        : compostiteFilter.type.includes(doc.type)) &&
      (compostiteFilter.from.length === 0
        ? true
        : compostiteFilter.from.includes(doc.from)) &&
      (compostiteFilter.to.length === 0
        ? true
        : compostiteFilter.to.includes(doc.to))
    );
  });

  return (
    <div className="flex">
      <div className="flex flex-col">
        <section>
          <FilterBar
            map_names={map_names}
            mapPositions={mapPositions}
            grenade_types={grenade_types}
            handleFilter={handleFilter}
            getMapPositions={getMapPositions}
            mapPositionsLength={mapPositions.length}
          />
        </section>
      </div>
      <section className="ml-32 self-center">
        {filteredProducts.map((doc) => {
          return <GrenadeThumbnail key={doc.id} doc={doc}></GrenadeThumbnail>;
        })}
      </section>
    </div>
  );
}
