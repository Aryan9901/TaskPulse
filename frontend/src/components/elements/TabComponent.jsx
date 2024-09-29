import { useState } from "react";

export const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab navigation */}
      <div className="flex border-b px-8 border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-2 border-none text-sm font-medium hover:text-blue-600 focus:outline-none ${
              activeTab === index
                ? "border-b-2 px-8 dark:text-primary text-background font-bold dark:bg-white bg-primary rounded-t-md"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {/* Icon and label */}
            <div className="flex items-center space-x-2">
              {tab.icon && <tab.icon className="w-4 h-4" />}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
