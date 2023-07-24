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

  const mapPositions = ["short", "long", "CT"];

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

  function filterDocs(position) {
    const filteredDocs = docs.filter((doc) => {
      return doc.from === "t_base";
    });

    setDocs(() => filteredDocs);
  }

  return (
    <div className="flex">
      <div className="flex flex-col">
        <button className="mb-8 self-start" onClick={getGrenades}>
          Get Grenades
        </button>

        <FilterBar mapPositions={mapPositions} />

        <section>
          <FilterBar mapPositions={mapPositions} />
          <button className="mt-6" onClick={filterDocs}>
            Filter Docs
          </button>
        </section>
      </div>
      <section className="ml-32 self-center">
        {docs.map((doc) => {
          return <GrenadeThumbnail key={uuidv4()} doc={doc}></GrenadeThumbnail>;
        })}
      </section>
    </div>
  );
}
