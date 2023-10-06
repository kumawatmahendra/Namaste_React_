import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { CDN_URL } from "../utils/contsants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurentMenu(resId)
    // const [showIndex, setShowIndex] = useState(null)
    if (resInfo === null) return <Shimmer />
    const { name, cuisines, avgRating, costForTwoMessage,totalRatingsString, sla } =
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
        <div className="mx-96 p-2 flex justify-between border-b-2 decoration-dashed">
            <div>
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            </div>
            <div className="mt-6 border-2 border-gray-300 w-24 h-24 rounded-lg grid-flow-row ">
                 <div className="border-b-2 p-2 text-green-500 ">⭐️ {avgRating}</div>
                 <div className="text-sm p-2 text-gray-500">
                 {totalRatingsString}
                 </div>

                 
            </div>
        </div>
            
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