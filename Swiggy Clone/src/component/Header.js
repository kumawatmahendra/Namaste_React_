import React, { useState,useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header = () => {
  
  const [button, setButton] = useState("login")
  const onlineStatus=useOnlineStatus()

  const {loggedInUser}=useContext(UserContext)
  console.log(loggedInUser);

  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems);

  return (
    <div className="flex h-24 justify-between  shadow-lg ">
      <div className="logo-container">
        <img className=" w-28 h-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-6">
        <li className="px-2 text-lg ">  
          Online Status: {onlineStatus?"✅":"🔴"}
        </li>
          <li className="px-2 mx-5 hover:text-orange-500 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 mx-5 hover:text-orange-500 text-lg">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-2 mx-5 hover:text-orange-500 text-lg">
            <Link to="/contect">Contect Us</Link>
          </li>
          {/* <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-2 mx-5 hover:text-orange-500 text-lg "> 
          <Link to={"/cart"}> 🛒 Cart ({cartItems.length}) </Link>
          </li> 

          {/* <button className="login-btn" onClick={() => {
            button === "login" ? setButton("logOut") : setButton("login");
          }}>{button}</button> */}
          
          {/* <li className="px-2 font-bold">{loggedInUser}</li> */}

        </ul>
      </div>
    </div>
  )
}

export default Header