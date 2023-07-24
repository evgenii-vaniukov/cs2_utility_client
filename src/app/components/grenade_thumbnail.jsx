export default function GrenadeThumbnail({ doc }) {
  return (
    <div className="mb-4">
      <p>From: {doc.from}</p>
      <p>To: {doc.to}</p>
      <p>Tick: {doc.tick_rate}</p>
      <p>Type: {doc.type}</p>
    </div>
  );
}
