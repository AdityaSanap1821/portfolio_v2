// src/components/about_tabs/AboutTabs.jsx
import { useState } from "react";
import IntroTab from "./IntroTab";
import SkillsTab from "./SkillsTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";

export default function AboutTabs() {
    const tabs = ["Intro", "Skills", "Experience", "Education"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderTab = () => {
        switch (activeTab) {
            case tabs[0]: return <IntroTab />;
            case tabs[1]: return <SkillsTab />;
            case tabs[2]: return <ExperienceTab />;
            case tabs[3]: return <EducationTab />;
            default: return null;
        }
    };

    return (
        <div className="w-full max-w-4xl mt-12 bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-lg shadow-lg">
            {/* Tab Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 border-b border-white/20">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative pb-2 px-3 text-base font-semibold text-center transition-colors duration-500 ease-in-out ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"}`}
                    >
                        {tab}
                        <span
                            className={`absolute left-0 bottom-0 h-0.5 w-full transform transition-transform duration-500 ease-in-out origin-left ${activeTab === tab ? "scale-x-100 bg-white" : "scale-x-0 bg-white"}`}
                        />
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="text-white text-base leading-relaxed min-h-[150px] transition-opacity duration-500">
                {renderTab()}
            </div>
        </div>
    );
}
