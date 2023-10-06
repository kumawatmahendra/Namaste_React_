import {useState} from "react";
 const User = ({name,location,contect})=>{
    const [count,setCount]=useState(0)
    const [count2,]=useState(1)
    return(
        <div className="user-card">
          <h1>Count:{count}</h1>
         <button onClick={()=>{
            setCount(count+1)
         }}>Increase counter</button>
          <h1>Name:{name}</h1>
          <h2>Location:{location}</h2>
           <h3>Contect:{contect}</h3>
        </div>
    )
 }
export default User

