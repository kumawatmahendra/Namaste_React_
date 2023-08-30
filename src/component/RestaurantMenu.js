import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])
    //MENU_API+resId
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId="+resId+"&catalog_qa=undefined%22")
        const json = await data.json()
        console.log(json.data);
        setResInfo(json.data)
    }


    const { itemCards } =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.info || []
    console.log(itemCards);

    const{ name, cuisines, avgRating, costForTwoMessage }=
     resInfo?.cards[0]?.card?.card?.info || []

    if (resInfo === null) return <Shimmer />

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}</p>
            <h3></h3>
            <h3>{avgRating}</h3>
            <h2>menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li key={items.card.info.id}>{items.card.info.name} - Rs.{items.card.info.price/100}</li>
                ))}
        </ul>
        </div>
    )
}

export default RestaurantMenu;