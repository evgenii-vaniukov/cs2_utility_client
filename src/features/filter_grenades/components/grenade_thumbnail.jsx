export default function GrenadeThumbnail({ doc }) {
  return (
    <div className="mb-4">
      <p>Map: {doc.map_name}</p>
      <p>From: {doc.from}</p>
      <p>To: {doc.to}</p>
      <p>Tick: {doc.tick_rate}</p>
      <p>Type: {doc.type}</p>
      <p>id: {doc.id}</p>
    </div>
  );
}
