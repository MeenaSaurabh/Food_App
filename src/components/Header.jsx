import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // console.log("Header Rendered"); // it means, whole code inside return is called again-&-again if Login btn is clicked

  let [btn, setbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // Context Data
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Redux Toolkit -
  // Subscribing(insync) to the Store using Selector Hook i.e reading items from store // this will change on adding items from ItemList

  // const cartItems = useSelector((store) => store.cart.items);
  // OR
  const {items} = useSelector((state) => state.cart);
  

  return (
    <div className="w-screen flex justify-between shadow-lg bg-gray-400 sm:bg-yellow-50 lg:bg-green-50 fixed top-0 mb-auto z-50">
      {/*  style={{
        backgroundColor: "#f0f0",
        color: "red",
        borderRadius: "10px",
      }} */}
      <div className="w-24">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex p-4 m-4">
          <li className="px-8">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-3">
            <Link rel="stylesheet" to="/">
              Home{" "}
            </Link>
          </li>
          <li className="px-3">
            <Link rel="stylesheet" to="/about">
              About{" "}
            </Link>
          </li>
          <li className="px-3">
            <Link rel="stylesheet" to="/contact">
              Contact Us{" "}
            </Link>
          </li>
          <li className="px-3">
            <Link rel="stylesheet" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-3 font-semibold">
            <Link rel="stylesheet" to="/cart">
              {/* Cart - ({cartItems.length} items) */}
              Cart - ({items.length} items)
            </Link>
          </li>
          <button
            className="bt px-3"
            onClick={() => {
              btn === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="px-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
