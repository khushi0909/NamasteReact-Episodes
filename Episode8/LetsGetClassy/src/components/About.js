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