// import ItemList from "./ItemList"
import RemoveCartItems from "./RemoveCartItems"
import { clearItems } from "../redux_file/cartSlice"
import { useSelector,useDispatch } from "react-redux"


const Cart = ()=>{

  const cartItems = useSelector((store)=>store.cart.items)

  const Dispatch = useDispatch()

  const handdleClearCart = ()=>{
    Dispatch(clearItems())
  }
    return (
        <div className="m-4 p-4 text-center">
         <h1 className="font-bold text-2xl">Cart</h1>
         <div className="w-9/12 m-auto"> 
         <button className="border-2 bg-green-400 rounded-lg p-2" onClick={
          handdleClearCart}>Clear Cart</button>

          {cartItems.length === 0 && <h1 
          className="m-10 font-bold text-2xl text-">
          Your Cart Is Empty!! Please Add Items
          </h1>}
          <RemoveCartItems  items={cartItems}></RemoveCartItems>
         </div>
         </div>
    )
}
export default Cart