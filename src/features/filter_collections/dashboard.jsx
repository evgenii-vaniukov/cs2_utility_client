"use client";
import Footer from "../footer";
import CollectionsList from "./components/collections_list";
import Filters from "./components/filters";

export default function Dashboard({ utilityCollections }) {
  return (
    <div>
      <Filters>
        <CollectionsList utilityCollections={utilityCollections} />
      </Filters>
      <Footer />
    </div>
  );
}
