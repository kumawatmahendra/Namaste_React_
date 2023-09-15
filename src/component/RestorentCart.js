import { CDN_URL } from "../utils/contants"
const RestorentCart = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId,costForTwo,sla} =props.resData.info
      return (

           <div className="m-6 p-3 w-[240px] h-[400px] bg-gray-100 rounded-lg hover:bg-gray-300">
        <img src={CDN_URL+cloudinaryImageId} className=" h-36 w-[100%] rounded-lg" />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4> {cuisines&&cuisines.join(", ")}</h4>
        <h4>Rs.{costForTwo} people</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
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