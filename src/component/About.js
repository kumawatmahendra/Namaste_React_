// import User from "./User"
// import UserClass from "./UserClass"
//  const About = () => {

//   return (
//     <div >
//       <h1>This About Page</h1>
//           <User name={"Mahendra from functional componenr"} location={"Aemedabad"} contect={"mahendra@1023"} />
//          <UserClass name={"Mahendra Kumawat"}location={"Ahedamabad"} contect={"Mahendra_k_05_03"}  />
//     </div>
//   )
// }
//  export default About
import React from "react";
import UserClass from "./UserClass";
class About extends React.Component{
  constructor(props){
    super(props)
    console.log("parent constructer");
  }
  async componentDidMount(){
        console.log("parent did mount");
  }
   render(){
    console.log("parent render");
      return(
         <div>
            <h1>
    <UserClass />
            </h1>
         </div>
      )
  
   }
}
 export default About