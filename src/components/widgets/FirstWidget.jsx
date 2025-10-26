import React, { useState } from "react";
import DummyInfo from "../../dummyData";

const FirstWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const renderContent = () => {
    switch (activeTab) {
      case "About Me":
        return <p className="text-gray-200 leading-relaxed">{DummyInfo["About Me"]}</p>;
      case "Experiences":
        return <p className="text-gray-200 leading-relaxed">{DummyInfo["Experiences"]}</p>;
      case "Recommended":
        return <p className="text-gray-200 leading-relaxed">{DummyInfo["Recommended"]}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#2a2d32] rounded-2xl shadow-lg w-full max-w-xl p-5 m-4 text-white">
      {/* Tabs */}
      <div className="flex justify-center gap-2 bg-black/80 rounded-xl p-1 mb-4">
        {["About Me", "Experiences", "Recommended"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-5 py-2 rounded-lg font-medium text-sm transition
              ${activeTab === tab 
                ? "bg-gray-700 text-white shadow-md" 
                : "bg-transparent text-gray-400 hover:bg-gray-600 hover:text-white"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[190px] pr-2 scrollbar-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default FirstWidget;
