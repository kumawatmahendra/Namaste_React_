import { useState, useEffect } from "react";
import RestorentCart,{withPromotion} from "./RestorentCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useListRestaurant from "../utils/useListRestaurant";

const Body = () => {
  const [listOfRestaurant,setListOfRestaurant]=useState([])
  const [filteredRestaurent,setFilteredRestaurent]= useState([])
  const [searchText, setSearchText] = useState(" ")

  // const RestaurentCardPromoted=withPromotion(RestorentCart)
  const onlineStatus= useOnlineStatus()
   if(onlineStatus === false){
    return(
       <>  
       {/* <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main> */}
       </>        
 )
 }
  useEffect(() => {
    fetchData()
  },[])

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.096012&lng=72.5620125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
}
  return listOfRestaurant.length === 0 ? <Shimmer /> : ( //this is just ternery oprater
    <div className="body">
      <div className="filter flex justify-center  border-black-300 border-b-2" >
        <div className="search m-1 p-4 ">
          <input type="text" className="border border-solid border-black rounded-lg h-9" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button  className="m-4 p-2 bg-green-300 rounded-lg" onClick={() => {
            const filterRestaurent= listOfRestaurant.filter((fil)=> {
                 const restaurantName = fil.info.name.toLowerCase().includes(searchText);
                 return restaurantName;
                 })
                 setFilteredRestaurent(filterRestaurent)
          }}>search</button>
        </div>
     <div className="search m-1 p-4">
     <button
          className="filter-btn m-4 p-2 bg-green-300 rounded-lg "
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4);
              setFilteredRestaurent(filteredList)
               console.log("button clicked")
          }}>
          Top Rated Restaurent
        </button>
     </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurent.map((restaurant) => (
          <Link
           key={restaurant.info.id}
           to={"restaurant/"+restaurant.info.id} >
          <RestorentCart resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;