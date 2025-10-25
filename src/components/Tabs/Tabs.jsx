import { useState } from "react";
import './Tabs.scss';

import tabsData from '../../data/tabs.json';
import itemsData from '../../data/tabsItems.json';

const TabsWithFilter = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? itemsData
      : itemsData.filter(item => item.categories.includes(activeTab));

  return (
    <div className="tabs">
      {/* Tab Headers */}
      <div className="tabs__header">
        {tabsData.map(tab => (
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
            {filteredItems.map(item => (
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
