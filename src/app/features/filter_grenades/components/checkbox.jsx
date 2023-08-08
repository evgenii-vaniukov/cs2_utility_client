import { useEffect, useState } from "react";

export default function Checkbox({
  compostiteFilter,
  label,
  name,
  full_name,
  handleFilter,
  getMapPositions,
  setMapPositions,
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(compostiteFilter[name].includes(label) ? true : false);
  }, [compostiteFilter, label, name]);

  useEffect(() => {
    if (name === "map_name") {
      setMapPositions([]);
      (async () => {
        if (checked) {
          const mapPositions = await getMapPositions(label);
          setMapPositions(mapPositions);
        }
      })();
    } else {
      return;
    }
  }, [label, name, checked, getMapPositions, setMapPositions]);

  return (
    <div className="relative flex items-start">
      <input
        id={label}
        value={label}
        onChange={
          name === "map_name"
            ? (e) => {
                handleFilter(e.target.checked, e.target.name, e.target.value);
                setChecked(
                  compostiteFilter[name].includes(label) ? true : false,
                );
              }
            : (e) => {
                handleFilter(e.target.checked, e.target.name, label);
              }
        }
        type="checkbox"
        name={name}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        checked={checked}
      />

      <div className="ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-900">
          {full_name}
        </label>
      </div>
    </div>
  );
}
