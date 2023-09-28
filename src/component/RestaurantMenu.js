import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/contants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurentMenu(resId)
    // const [showIndex, setShowIndex] = useState(null)
    if (resInfo === null) return <Shimmer />
    const { name, cuisines, avgRating, costForTwoMessage, sla } =
        resInfo?.cards[0]?.card?.card?.info || []

    const { itemCards } =
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || []
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories =
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>
        c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     )
    return(
        <div className="text-center ">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {categories.map((category,index)=>(
               <RestaurantCategory 
                 key={category?.card?.card?.title}
                 data={category?.card?.card} 
                //  showItems={index==showIndex ? true : false}
                //  setShowIndex={()=>setShowIndex(index)}
                />
            ))}         
        </div>
    )
}
export default RestaurantMenu;

 
      





//   <ul>
        //         {itemCards.map((items) => (
        //             <li key={items.card.info.id}> {items.card.info.cloudinaryImageId}{items.card.info.name} - Rs.{items.card.info.price / 100 || items.card.info.defaultPrice / 100}</li>
        //         ))}
        //     </ul>