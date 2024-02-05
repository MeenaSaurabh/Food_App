import React, { useEffect, useState } from 'react'
import { MENU_API } from "./constants";

// This Custom Hook has resId as Input & returns ResInfo as Output, i.e we only need i/p & o/p in custom hooks

const useRestaurantMenu = (resId) => {  // "restaurant.info.id" coming from Body & added with MENU_API in fetch
    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId);  // fetching api of particular(clicked) restaurant card
      const json = await data.json();
      setResInfo(json.data);
    };

  return ResInfo;
}

export default useRestaurantMenu;