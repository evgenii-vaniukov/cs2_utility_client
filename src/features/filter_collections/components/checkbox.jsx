"use client";
import { useState } from "react";

export default function Checkbox({ sectionId, option, optionIdx, section }) {
  //   const { compostiteFilter, handleFilter, getMapPositions, setMapPositions } =
  //     useCollectionsFilter();

  const [checked, setChecked] = useState(false);

  //   useEffect(() => {
  //     setChecked(compostiteFilter[name].includes(label) ? true : false);
  //   }, [compostiteFilter, label, name]);

  return (
    <div className="flex items-center">
      <input
        id={`${sectionId}-${optionIdx}-mobile`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        onClick={(e) => {
          console.log("clicked");
        }}
      />
      <label
        htmlFor={`${section.id}-${optionIdx}-mobile`}
        className="ml-3 text-sm text-gray-500"
      >
        {option.label}
      </label>
    </div>
  );
}
