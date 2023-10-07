
import { useContext } from "react"
import { CDN_URL } from "../utils/constants" 
import UserContext from "../utils/UserContext"


const RestorentCart = (props) => {
  const {loggedInUser}=useContext(UserContext)

  const {
         name,
         cuisines,
         avgRating,
         cloudinaryImageId,
         costForTwo,
         sla
        } 
        = props.resData.info
      return (
        <div className="m-9 p-2 w-[240px] h-[360px] rounded-lg hover:bg-gray-300">
        <img src={CDN_URL+cloudinaryImageId} className=" h-36 w-[100%] rounded-lg" />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4> {cuisines&&cuisines.join(", ")}</h4>
        <h4>Rs.{costForTwo} people</h4>
        <h4>✩ {avgRating}</h4>
        <h4>{sla.slaString} </h4>
        <h1>{loggedInUser}</h1>
      </div> 
    )
  }

  // export const withPromotion = (RestorentCart)=>{
  //   return  (props)=>{
  //     return(
  //        <div>
  //            <label>promoted</label>
  //            <RestorentCart {...props} />
  //        </div>
  //     )
  //   }
  // }

  export default RestorentCart