import { useState } from "react";
import { Link } from "react-router-dom";

type tabProps = {
  tabsData: {
    name: string;
    href: string;
    current: boolean;
    id: string;
  }[];
};

export function Tabs({ tabsData }: tabProps) {
  const [activeTabIndex, setActiveTabIndex] = useState("");
  return (
    <div>
      <label htmlFor="tabs" className="sr-only">
        tab selection
      </label>
      <div className="flex justify-center space-x-3 border-b">
        {/* Loop through tab data and renders a Link for each tab. */}
        {tabsData.map((tab) => {
          return (
            <Link
              to={tab.href}
              id={tab.id}
              key={tab.id}
              onKeyDown={() => setActiveTabIndex(tab.id)}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                tab.id === activeTabIndex ||
                tab.href === window.location.pathname
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(tab.id)}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
