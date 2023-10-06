import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItems } from "../redux_file/cartSlice";

       
const RemoveCartItems = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    // Dispach an action
    dispatch(removeItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-4 p-4 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {/* <div className="p-4 w-3/12 flex flex-col items-center justify-end"> */}
            <div className=" w-3/12 p-4 flex flex-col items-center justify-end">

            <img className="w-full h-28 rounded-md mb-2" src={CDN_URL + item.card.info.imageId} alt="" />
              <button
                className=" bottom-0 p-2 text-lime-600 text-center rounded-md w-20 bg-white  shadow-lg"
                onClick={() => handleDeleteItem(item)}
              >
                🗑️
              </button>
            </div>
            
          </div>
      
      ))}
    </div>
  );
};

export default RemoveCartItems