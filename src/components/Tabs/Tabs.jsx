import React, { useState } from "react";
import './Tabs.scss';

const TabsWithFilter = () => {
  // Define the tabs (categories)
  const tabs = [
    { id: "all", label: "All" },
    { id: "uiUx", label: "UI/UX" },
    { id: "webDesign", label: "Web Design" },
    { id: "appDesign", label: "App Design" },
    { id: "graphicDesign", label: "Graphic Design" },
  ];

  // Define the items with their categories
  const items = [
    {
      id: 1,
      image: "/images/img/proj1.png",
      title: "AirCalling Landing Page Design",
      categoryName: "UI/UX & Web Design",
      categories: ["uiUx", "webDesign"],
    },
    {
      id: 2,
      image: "/images/img/proj2.png",
      title: "Business Landing Page Design ",
      categoryName: "App Design",
      categories: ["appDesign"],
    },
    {
      id: 3,
      image: "/images/img/proj3.png",
      title: "Ecom Web Page Design ",
      categoryName: "Graphic Design & App Design",
      categories: ["graphicDesign", "appDesign"],
    },
    {
      id: 4,
      image: "/images/img/proj1.png",
      title: "Business Landing Page Design",
      categoryName: "App Design",
      categories: ["appDesign"],
    },
    {
      id: 5,
      image: "/images/img/proj2.png",
      title: "AirCalling Landing Page Design",
      categoryName: "UI/UX",
      categories: ["uiUx"],
    },
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState("all");

  // Filter items based on the active tab
  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.categories.includes(activeTab));

  return (
    <div className="tabs">
      {/* Tab Headers */}
      <div className="tabs__header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tabs__button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs__content">
        {filteredItems.length > 0 ? (
          <div className="tabs__list">
            {filteredItems.map((item) => (
              <a href="#!" key={item.id} className="tabs__item">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="tabs__item-image"
                />

                <span>{item.categoryName}</span>
                <h4>{item.title}</h4>
              </a>
            ))}
          </div>
        ) : (
          <p>No items found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default TabsWithFilter;
