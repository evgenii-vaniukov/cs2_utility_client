"use client";
import Footer from "../footer";
import CollectionsList from "./components/collections_list";
import Filters from "./components/filters";
import { CollectionsFilterProvider } from "./context/filter_collections_context";

export default function Dashboard({ utilityCollections, likesCount }) {
  return (
    <div>
      <CollectionsFilterProvider>
        <Filters likesCount={likesCount}>
          <CollectionsList utilityCollections={utilityCollections} />
        </Filters>
      </CollectionsFilterProvider>
      <Footer />
    </div>
  );
}
