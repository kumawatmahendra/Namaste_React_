import { CDN_URL } from "../utils/contants"
const RestorentCart = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId,deliveryTime, costForTwo} =props.resData.info 
      return (
      <div className="rest-card">
        <img src={CDN_URL+cloudinaryImageId} className="rest-img" />
        <h3>{name}</h3>
        <h4> {cuisines&&cuisines.join(" ")}</h4>
        <h4>Rs.{costForTwo} people</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime&&deliveryTime} Min</h4>
      </div>
    )
  }


  export default RestorentCart