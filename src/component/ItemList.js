import { CDN_URL } from "../utils/contants";
const ItemList = ({ items }) => {
 console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="m-4 p-4 border-gray-300 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="p-2 text-sm">
                        <span className="font-bold">{item.card.info.itemAttribute
                                 .vegClassifier}
                          </span><br />
                            <span>{item.card.info.name}</span>
                            <span> ₹
                                {item.card.info.price / 100 || item.card.info.defaultPrice / 100 
                                }</span>
                        </div>
                        <p className="text-xs p-4">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute">
                            <button className="p-2 text-lime-600 text-center rounded-md w-20 bg-white shadow-lg  mx-6 ">
                                Add+
                            </button>
                        </div>
                        <img className=" w-full h-28 rounded-md" src={CDN_URL + item.card.info.imageId} alt="Food Image" />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList