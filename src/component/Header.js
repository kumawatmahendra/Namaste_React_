import React, { useState } from "react"
import { LOGO_URL } from "../utils/contants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const [button, setButton] = useState("login")
  const onlineStatus=useOnlineStatus()

  return (
    <div className="flex justify-between shadow-lg ">
      <div className="logo-container">
        <img className=" w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-6">
        <li className="px-2">  
          Online Status: {onlineStatus?"✅":"🔴"}
        </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contect">Contect Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">Cart</li>

          <button className="login-btn" onClick={() => {
            button === "login" ? setButton("logOut") : setButton("login");
          }}>{button}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header