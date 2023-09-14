"use client";
import CollectionsList from "./collections_list";
import Filters from "./filters";

export default function Dashboard({ utilityCollections }) {
  return (
    <Filters>
      <CollectionsList utilityCollections={utilityCollections} />
    </Filters>
  );
}
