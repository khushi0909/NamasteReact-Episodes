import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constant";
import { useState,useEffect } from "react";
import React from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
// const loggedInUser = () => {
//     //API call to check authentications
//     return false;
// }
const Header = () => { 
    let x = 1;
    let y = x++ + x
    console.log(y);
        const onlineStatus = useOnlineStatus()
    // const [isLoggedIn,setIsLoggedIn] =useState(true)

    // if no dependency array ===useEffect is called on Every render 
    // if dependency array is empty = []=> useEffect is called on the initial render(just once )



    const [btnNameReact ,setBtnNameReact] = useState("Login");
    useEffect(()=>{
            console.log("useEffect called")
    })
    return(
      

        <header className ="header">
            
            <div className="logo">
                <img src= {LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "✅" :" 🔴" }
                    </li>
                    <li >
                        
                        <Link className="list" to ="/">Home </Link>
                    </li>
                    <li >
                        <Link className="list" to = "/About">About Us</Link>
                    </li>
                    <li >
                    <Link className="list" to = "/Contact">Contact</Link>
                        
                    </li>
                    <li >
                    <Link className="list" to = "/grocery">Grocery</Link>
                        
                    </li>
                   
                </ul>
                <button className="login" onClick={()=>{
                        btnNameReact === "Login"
                    ?setBtnNameReact("Logout")
                    :setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                {/* {(isLoggedIn)?
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
                :
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>

                } */}
            
            </div>

        </header>
    )

    }

    export default Header;