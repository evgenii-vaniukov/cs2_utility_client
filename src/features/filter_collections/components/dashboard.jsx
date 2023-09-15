"use client";
import CollectionsList from "./collections_list";
import Filters from "./filters";
import Footer from "./footer";

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
