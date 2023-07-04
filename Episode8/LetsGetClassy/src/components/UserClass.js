import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                    userInfo:{
                        name:"Dummy",
                        location:"default locat"
                    }
            }
        
    console.log("Child Constructor");
        
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

    // const {count,count2} = this.state;
    // console.log("Child Render")


        return(

            <div className="user-card">
                {/* <h1>Count = {count}</h1>
                <h1>Count = {count2}</h1>
                <button style = {{padding:"20px 20px"} }
                onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                        count2:this.state.count2 + 1,

                    })
                }}>Increase</button> */}

                    <h2>{this.state.userInfo.name}</h2>
                    <h3>Location:{this.state.userInfo.location}</h3>
                    {/* <h4>Contact:@kitatktiti</h4> */}
             </div>

        )
        


    }
}

export default UserClass;