"use client";
import { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ utility, setSrc, setCurrentTab }) {
  const tabss = [
    { name: "Landing", url: utility.landing, current: true },
    {
      name: "Crosshair Alignment",
      url: utility.crosshairAlignment,
      current: false,
    },
    {
      name: "Position Alignment",
      url: utility.positionAlignment,
      current: false,
    },
    { name: "Throwing", url: utility.throwing, current: false },
  ];
  const filteredTabs = tabss.filter((tab) => tab.url !== "");
  filteredTabs[0].current = true;

  const [tabs, setTabs] = useState(filteredTabs);
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab, tabIdx) => (
            <option
              key={tab.name}
              onClick={() => {
                const newTabs = [...tabs];
                newTabs.forEach((tab) => {
                  tab.current = false;
                });
                newTabs[tabIdx].current = true;
                setTabs(newTabs);
                setCurrentTab(tab.name);
                setSrc(tab.url);
              }}
            >
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <div
              key={tab.name}
              className={classNames(
                tab.current
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10",
              )}
              aria-current={tab.current ? "page" : undefined}
              onClick={() => {
                const newTabs = [...tabs];
                newTabs.forEach((tab) => {
                  tab.current = false;
                });
                newTabs[tabIdx].current = true;
                setTabs(newTabs);
                setCurrentTab(tab.name);
                setSrc(tab.url);
              }}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? "bg-indigo-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5",
                )}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
