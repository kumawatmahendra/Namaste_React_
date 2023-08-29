import {useEffect} from "react";

const RestaurantMenu = ()=>{
     
    useEffect(()=>{
        fetchMenu()
    },[])
    
    const fetchMenu = async () =>{
       const data = await fetch()
       const result = data.json("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId=32128&catalog_qa=undefined&submitAction=ENTER%22")
       
    }
    // json_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    return(
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>briyani</li>
                <li>burger</li>
                <li>coldrink's</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;