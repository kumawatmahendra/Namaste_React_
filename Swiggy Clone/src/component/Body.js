import { useState, useEffect } from "react";
import RestorentCart, { withPromotion } from "./RestorentCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useListRestaurant from "../utils/useListRestaurant";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [filteredRestaurent, setFilteredRestaurent] = useState([])
  const [searchText, setSearchText] = useState(" ")

  const handleSearch = () => {
    const filterRestaurent = listOfRestaurant.filter((fil) => {
      const restaurantName = fil.info.name.toLowerCase().includes(searchText);
      return restaurantName;
    })
    setFilteredRestaurent(filterRestaurent)
  }
  const handdleRating = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4);
    setFilteredRestaurent(filteredList)
  }
  const handdleFastDilivery = () => {
    const filterFast = listOfRestaurant.filter(
      (res) => res.info.sla.deliveryTime < 30)
    setFilteredRestaurent(filterFast)
  }

  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) {
    return (
      <></>
    )
  }
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.096012&lng=72.5620125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
  }
  return listOfRestaurant.length === 0 ? <Shimmer /> : ( //this is just ternery oprater
    <div className="border border-t-solid border-black">
      <h1 className="font-bold text-3xl ml-11 mt-6">
        Restaurants with online food delivery in your city.
      </h1>
      <div className=" flex justify-left ml-6  border-black-300 " >
        <div className="m-1 p-4 ">
          <input type="text" placeholder="Search hare.." className=" border-2 rounded-3xl  h-9 " value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}/>
          <button className="border-2  text-gray-600  m-1 p-1 rounded-2xl" onClick={handleSearch}>search</button>
       
        <button
          className="border-2 text-gray-600 h-9 w-28 m-1 p-1 rounded-3xl "
          onClick={handdleRating}>
          Ratings 4.0+
        </button>
        <button className="border-2  text-gray-600 h-9 w-28  m-1 p-1 rounded-3xl"
          onClick={handdleFastDilivery}> fast Dilivery
        </button>
      </div>
      </div>
      <div className="flex flex-wrap  ">
        {filteredRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id} >
            <RestorentCart resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;