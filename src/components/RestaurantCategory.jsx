import React, { useState } from "react";
import ItemList from "./ItemList";

// Accordions
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // To create ACCORDION - using state-var & clickHandle (Later, we'll use Controlled component concept)
  // const [showItems, setShowItems] = useState(false);  // Lifted our State Up
  const clickHandle = () => {
    // setShowItems(!showItems);
    setShowIndex();  // sending this value to "setShowIndex(index)" in props of return part of ResMenu.jsx
  };

  return (
    <div>
      <div className="w-6/12 mx-auto p-2 my-6 bg-gray-200 shadow-lg">
        {/* Accordion Header */}
        <div
          className=" flex justify-between cursor-pointer"
          onClick={clickHandle}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordion Body */}
        <div>
          {/* we want to hide/show this ItemList by clicking on span button */}
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
