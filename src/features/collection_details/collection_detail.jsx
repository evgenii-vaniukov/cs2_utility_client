function CollectionDetails({ collectionUtilities }) {
  return (
    <div>
      {collectionUtilities.map((collectionUtility) => (
        <div key={collectionUtility.utilityId}>
          <h2>{collectionUtility.label}</h2>
        </div>
      ))}
    </div>
  );
}

export default CollectionDetails;
