import { useState, useEffect } from "react";
import RestorentCart from "./RestorentCart";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [filteredRestaurent,setFilteredRestaurent]= useState([])
  const [searchText, setSearchText] = useState(" ")

  useEffect(() => {
    console.log("hello this is restorent");
    fetchData()
  },[])
  async function fetchData() {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;

  
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
  }


  return listOfRestaurant.length === 0 ? <Shimmer /> : ( //this is just ternery oprater
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button onClick={() => {
            const filteredRestaurent= listOfRestaurant.filter((fil)=> {
                 const restaurantName = fil.info.name.toLowerCase().includes(searchText);
                 return restaurantName;
                 })
                  setFilteredRestaurent(filteredRestaurent)
          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.sla.avgRating > 4);
            setListOfRestaurant(filterList)
          }}>
          Top Rated Restaurent
        </button>
      </div>
      <div className="resto_container">
        {filteredRestaurent.map((restaurant) => (
          <RestorentCart key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
