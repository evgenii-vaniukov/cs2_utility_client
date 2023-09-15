"use client";
import CollectionsList from "./components/collections_list";
import Filters from "./components/filters";
import Footer from "./components/footer";

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
