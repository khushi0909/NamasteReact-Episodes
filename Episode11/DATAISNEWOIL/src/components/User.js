import React, { useState } from "react";

const User = ( props) =>{

    const [count,setCount] = useState(0)
    const [count2] = useState(15)

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count = {count2}</h1>

            <h2>{props.name}</h2>
            <h3>Location:shimla</h3>
            <h4>Contact:@kitatktiti</h4>
        </div>
    )
};

export default User;