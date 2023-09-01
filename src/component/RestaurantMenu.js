import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";
import { CDN_URL } from "../utils/contants";

const RestaurantMenu = () => {


    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        setResInfo(json.data)
    }
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || []
    console.log(itemCards);

    const { name, cuisines, avgRating, costForTwoMessage,cloudinaryImageId } =
        resInfo?.cards[0]?.card?.card?.info || []

    if (resInfo === null) return <Shimmer />

    return (
        <div className="menu">
            <img src={ CDN_URL+cloudinaryImageId} className="menu-img" />
            <h1>{name}</h1>
            <p>{cuisines.join(" ")}-{costForTwoMessage}</p>
            <h3></h3>
            <h3>{avgRating}</h3>
            <h2>menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li key={items.card.info.id}>{items.card.info.name} - Rs.{items.card.info.price / 100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;