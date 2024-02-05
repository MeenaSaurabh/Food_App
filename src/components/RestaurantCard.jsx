import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
  // js object
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props; // data is coming from Body's return part
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info; // resData.info is also working, but optional chaining is good

    // Context Data
    const {loggedInUser} = useContext(UserContext)

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      {" "}
      {/* style={styleCard} */}
      <img
        className="res-logo rounded-sm"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold text-lg py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>{" "}
      {/* .join("") converts array in string seperated by whatever written in " " */}
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4 className="font-semibold">User: {loggedInUser}</h4>
    </div>
  );
};


// Higher-order Component - withPromotedLabel takes a Component(RestaurantCard) & returns a Enhanced Component(with Promoted Label at top)
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => { 
    // resData={restaurant} is coming as props for this component & passing asitis in "<RestaurantCard {...props} />"
    return (
      <>
        {/* we're not changing anything inside RestaurantCard, just enhancing it */}
        <label className="absolute bg-gray-600 text-white p-2 m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;

//  Never keep any hard-coded-data(json format data from backend i.e resList & links) in component file. Keep it in seperate folder i.e utils/config/common)
