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
    async componentDidMount(){ // componentDidMount work like useEffect for Api calling

       const data = await fetch("https://api.github.com/users/kumawatmahendra")
       const json =await data.json()
       console.log("child DidMount");
       this.setState(
        {
            userInfo:json
           }
       )
    }
    componentDidUpdate(){
        console.log("this is componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
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