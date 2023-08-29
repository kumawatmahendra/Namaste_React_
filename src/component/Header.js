import React, { useState } from "react"
import { LOGO_URL } from "../utils/contants"
import { Link } from "react-router-dom"

const Header = () => {
  const [button, setButton] = useState("login")

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/contect">Contect Us</Link>
          </li>
          <li>Cart</li>

          <button className="login-btn" onClick={() => {
            button === "login" ? setButton("logOut") : setButton("login");
          }}>{button}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header