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

export default function GrenadesFilter() {
  const [docs, setDocs] = useState([]);

  async function getDocsFromCollection() {
    setDocs(() => []);
    const querySnapshot = await getDocs(
      collection(db, "maps", "dust_2", "grenades"),
    );
    querySnapshot.forEach((doc) => {
      setDocs((docs) => [...docs, doc.data()]);
    });
  }
  function filterDocs() {}

  return (
    <div>
      <h1>Grenades Filter</h1>
      <button onClick={getDocsFromCollection}>Get Docs</button>
      <div className="mb-6 flex flex-col">
        {docs.map((doc) => (
          <button key={uuidv4()} className="mb-1">
            {doc.from}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        {docs.map((doc) => (
          <button key={uuidv4()}>{doc.to}</button>
        ))}
      </div>
      {docs.map((doc) => {
        return (
          <div key={uuidv4()} className="mb-4">
            <p>From: {doc.from}</p>
            <p>To: {doc.to}</p>
            <p>Tick: {doc.tick_rate}</p>
            <p>Type: {doc.type}</p>
          </div>
        );
      })}
    </div>
  );
}
