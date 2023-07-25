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
  const [tickRateFilter, setTickRateFilter] = useState([]);
  const [fromFilter, setFromFilter] = useState([]);
  const [toFilter, setToFilter] = useState([]);

  const mapPositions = ["t_base", "short", "long", "CT"];

  function handleTickRateFilter(checked, value) {
    if (checked) {
      setTickRateFilter((tickRateFilter) => [...tickRateFilter, value]);
    } else {
      setTickRateFilter((tickRateFilter) => {
        return tickRateFilter.filter((tickRate) => tickRate !== value);
      });
    }
  }

  function handleFromFilter(checked, value) {
    if (checked) {
      setFromFilter((fromFilter) => [...fromFilter, value]);
    } else {
      setFromFilter((fromFilter) => {
        return fromFilter.filter((from) => from !== value);
      });
    }
  }

  function handleToFilter(checked, value) {
    if (checked) {
      setToFilter((toFilter) => [...toFilter, value]);
    } else {
      setToFilter((toFilter) => {
        return toFilter.filter((to) => to !== value);
      });
    }
  }

  var filteredProducts;
  if (
    tickRateFilter.length === 0 &&
    fromFilter.length === 0 &&
    toFilter.length === 0
  ) {
    filteredProducts = docs;
  } else {
    filteredProducts = docs.filter((doc) => {
      return (
        tickRateFilter.includes(doc.tick_rate) &&
        fromFilter.includes(doc.from) &&
        toFilter.includes(doc.to)
      );
    });
  }

  // const filteredProducts =
  //   tickRateFilter.length === 0
  //     ? docs
  //     : docs.filter((doc) => {
  //         return tickRateFilter.includes(doc.tick_rate);
  //       });

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
          <FilterBar
            mapPositions={mapPositions}
            handleTickRateFilter={handleTickRateFilter}
            handleFromFilter={handleFromFilter}
            handleToFilter={handleToFilter}
          />
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
