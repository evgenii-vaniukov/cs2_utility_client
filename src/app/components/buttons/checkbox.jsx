export default function Checkbox({ label, handleFilter }) {
  return (
    <div className="relative flex items-start">
      <input
        id={label}
        value={label}
        onChange={(e) => handleFilter(e.target.checked, label)}
        type="checkbox"
        name="from"
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
