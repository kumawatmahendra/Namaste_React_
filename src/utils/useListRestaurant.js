import React, { useEffect, useState } from "react"
const useListRestaurant = ()=>{
    const[listOfRestaurant,setListOfRestaurant]= useState([])
    
    useEffect(()=>{
      fetchData()
    },[])

   const  fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    // setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }
  return listOfRestaurant 
}
export default useListRestaurant