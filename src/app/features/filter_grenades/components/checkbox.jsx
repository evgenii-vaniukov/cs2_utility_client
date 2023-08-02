export default function Checkbox({
  label,
  name,
  handleFilter,
  getMapPositions,
}) {
  return (
    <div className="relative flex items-start">
      <input
        id={label}
        value={label}
        onChange={
          name === "map_name"
            ? (e) => {
                handleFilter(e.target.checked, e.target.name, e.target.value);
                getMapPositions(label, e.target.checked);
              }
            : (e) => handleFilter(e.target.checked, e.target.name, label)
        }
        type="checkbox"
        name={name}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />

      <div className="ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          {label}
        </label>
      </div>
    </div>
  );
}
