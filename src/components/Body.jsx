import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// const resObj = {
//   info: {
//     id: "237223",
//     name: "Sharma Bhojnalaya- Roshanpura",
//     cloudinaryImageId: "bl9gneeko4wn8t10bgoh",
//     costForTwo: "₹200 for two",
//     cuisines: ["Thalis", "Indian", "Punjabi", "Snacks"],
//     avgRating: 3.1,
// }
// }

const Body = () => {
  console.log("Body Rendered"); // it means, whole code inside return is called again-&-again bec component is getting re-render every time we are writing a letter in input i.e targeting onChange which updates the searchText everytime

  const [listOfRes, setlistOfRes] = useState([]); // initially mockData is coming which will change bec of useEffect
  const [filteredlistOfRes, setfilteredlistOfRes] = useState([]);
  const [searchText, setsearchText] = useState("");

  // console.log(listOfRes); // this will give an object from which we will use "restaurant.info.promoted" in return part
  const PromotedRestaurant = withPromotedLabel(RestaurantCard); // Higher-order Component

  useEffect(() => {
    console.log("useEffect enabled");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=23.2599333&lng=77.412615"
    );
    // Here CORS-Extension is used, which bypass the CORS issue
    // use corsproxy.io to bypass the extension & we will call this api and it will internally call the swiggy-api
    // paste this "https://corsproxy.io/?" before any api, it will handle the CORS issue

    const json = await data.json();
    // console.log(json);
    // setlistOfRes(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants); // should use Optional Chaining
    setlistOfRes(
      json.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredlistOfRes(
      json.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering or Ternary operator
  // if (listOfRes.length === 0) {
  //   return (
  //   <Shimmer/>
  //   )
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're Offline!! Please check your internet connection.
      </h1>
    );

  // Context Data - this data is coming from App.jsx
  const { loggedInUser, setUserName } = useContext(UserContext);

  // Else
  return listOfRes.length === 0 ? (
    <Shimmer /> // or <h1>Loading.......</h1>
  ) : (
    // this part will print after useEffect will run i.e it will call/show all the cards coming from api
    <div className="body mt-20">
      <div className="filter m-4 p-4">
        <input
          type="text"
          className="border border-black border-solid"
          onChange={(e) => setsearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            let searchRes = listOfRes.filter(
              (res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) // return only those restaurants whose name includes letters which are written in input
            ); // (res.info.name === searchText) won't work. toLowerCase() has removed case-sensitivity
            setfilteredlistOfRes(searchRes); // it will not change the original data i.e "listOfRes"
          }}
        >
          Search
        </button>

        <button
          className="filter-btn px-4 py-2 bg-gray-100 m-4"
          onClick={() => {
            let copyRes = filteredlistOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredlistOfRes(copyRes);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* <div> */}
          <label>UserName - </label>
          <input
            className="border border-black border-solid p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        {/* </div> */}
      </div>

      <div className="res-container flex flex-wrap">
        {/* <RestaurantCard resData={resObj}/> 
          <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} /> */}
        {/* {resList.map((restaurant, i) => {
            return <RestaurantCard key={restaurant.info.id} resData={restaurant} />  // not showing cards without 'return' keyword
          })} */}

        {filteredlistOfRes.map((restaurant, i) => {
          return (
            <Link
              key={restaurant.info.id} // Passing key in Link instead of RestaurantCard bec key is given to parent-JSX
              to={"/restaurants/" + restaurant.info.id} // it will lead to RestaurantMenu & App.jsx
            >
              {restaurant.info.promoted === true ? (
                <PromotedRestaurant resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
