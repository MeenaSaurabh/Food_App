import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {  // here data is coming from ResCategory as well as Cart.jsx in the form of "items"
  // console.log(items);
  // const {name,price,imageId} = items?.card?.info // can't do this bec items is an array

  // Redux Toolkit 
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItem(item)); 
    console.log(item);
    // this will call the "addItems reducer-functn" which will update the slice & will be visible at Header bec we are subscribed to the slice using Selector in Header.jsx
  };
  // {payload:"pizza"} this type of payload goes to "action.payload" 

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2 flex flex-col">
              <span>{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            {/* <p className='text-xs'>{item.card.info}</p> */}
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                onClick={()=>handleAddItem(item)}
                className="p-2 mx-8 rounded-lg bg-black text-white shadow-lg"
              >
                Add +
              </button>
            </div>
            <div>
              <img
                className="rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
