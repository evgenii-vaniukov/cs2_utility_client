import { useState, useEffect } from "react";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import {
  DocumentData,
  collection,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import FilterBar from "../components/filter_bar";
import GrenadeThumbnail from "../components/grenade_thumbnail";

export default function GrenadesFilter() {
  const [docs, setDocs] = useState([]);
  const [compostiteFilter, setCompositeFilter] = useState({
    tick_rate: [],
    from: [],
    to: [],
  });

  const mapPositions = ["t_base", "short", "long", "CT"];

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
      (compostiteFilter.tick_rate.length === 0
        ? true
        : compostiteFilter.tick_rate.includes(doc.tick_rate)) &&
      (compostiteFilter.from.length === 0
        ? true
        : compostiteFilter.from.includes(doc.from)) &&
      (compostiteFilter.to.length === 0
        ? true
        : compostiteFilter.to.includes(doc.to))
    );
  });

  async function getGrenades() {
    setDocs(() => []);
    const querySnapshot = await getDocs(
      collection(db, "maps", "dust_2", "grenades"),
    );
    querySnapshot.forEach((doc) => {
      setDocs((docs) => [...docs, doc.data()]);
    });
  }

  async function getMapPositions() {
    const querySnapshot = await getDocs(
      collection(db, "maps", "dust_2", "positions"),
    );
    querySnapshot.forEach((doc) => {
      mapPositions.push(doc.data());
    });
  }

  return (
    <div className="flex">
      <div className="flex flex-col">
        <button className="mb-8 self-start" onClick={getGrenades}>
          Get Grenades
        </button>

        <section>
          <FilterBar mapPositions={mapPositions} handleFilter={handleFilter} />
        </section>
      </div>
      <section className="ml-32 self-center">
        {filteredProducts.map((doc) => {
          return <GrenadeThumbnail key={uuidv4()} doc={doc}></GrenadeThumbnail>;
        })}
      </section>
    </div>
  );
}
