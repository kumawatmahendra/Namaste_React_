import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

       this.state={
        userInfo:{
            name:"defalt",
            location:"dummy"

        }
       }
       console.log("child constructer");
    }
    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/kumawatmahendra")
       const json =await data.json()
       console.log(json);
       this.setState(
        {
            userInfo:json
           }
       )
    }
    render() {
        const { name, location, avatar_url }=this.state.userInfo
        return (
            <div className="user-card">
            <img src={avatar_url} alt="" />
            <h1>name:{name}</h1>
            <h1>Location:{location}</h1>
           </div>
        )
    }
}

export default UserClass