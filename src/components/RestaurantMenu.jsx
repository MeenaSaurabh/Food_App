import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); // "restaurant.info.id" coming from Body

  // Controlled & UnControlled Components - Doing this to expand 1 Accordion at-a-time
  const [ShowIndex, setShowIndex] = useState(null);

  // Custom Hook -
  const ResInfo = useRestaurantMenu(resId);
  // now RestaurantMenu has just 1 responsibility of showing data & useRestaurantMenu(Custom Hook) has 1 responsibility of fetching data

  // here Ternary operator won't work & we're writing this before destructuring bec ResInfo is null
  if (ResInfo === null) return <Shimmer />;

  // Else
  const { name, cuisines, costForTwoMessage } =
    ResInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } = ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
  // console.log(ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR); // to get different "ACCORDIONs" inside Restaurant menu

  const categories =
    ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="menu text-center mt-28">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul>
        {/* why the callback inside map is using/working-with () & not {} */}
        {categories.map((category, index) => (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === ShowIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </ul>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
