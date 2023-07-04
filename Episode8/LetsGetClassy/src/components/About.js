import React from "react";
import User from "./User";
import UserClass from "./UserClass"

class About extends React.Component {

    constructor(props){
        super(props);


    // console.log("parent Constructor");
    

    this.state = {
            userInfo:{
                name:"Dummy",
                location:"defaultlocation"
            }

    }
}
async componentDidMount(){
    const data = await fetch("  https://api.github.com/users/akshaymarch7   ")
    const jdata= await data.json();
    console.log(jdata)

    this.setState({
        userInfo:jdata
    })
        // console.log("parent did mount")
    }

    render(){
    // console.log("Parent Render")

        return(
            <div>
                <h1>Aboutpage</h1>
                {/* <User name={"akriti(function)"}/> */}
                <UserClass name={"akriti(class)"} location={"Shimla"}/>
                <h1>after USerClass</h1>
                
            </div>
        )
    }
 
}

export default About;