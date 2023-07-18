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

        const onlineStatus = useOnlineStatus()
    // const [isLoggedIn,setIsLoggedIn] =useState(true)

    // if no dependency array ===useEffect is called on Every render 
    // if dependency array is empty = []=> useEffect is called on the initial render(just once )



    const [btnNameReact ,setBtnNameReact] = useState("Login");
    useEffect(()=>{
            console.log("useEffect called")
    })
    return(
      

        <header className ="flex justify-between items-center shadow-lg border-2  border-red-400 text-lg">
            
            <div className="w-56">
                <img src= {LOGO_URL}/>
            </div>

            <div >
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" :" 🔴" }
                    </li>
                    <li className="px-4">
                        
                        <Link className="list" to ="/">Home </Link>
                    </li>
                    <li className="px-4">
                        <Link className="list" to = "/About">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link className="list" to = "/Contact">Contact</Link>
                        
                    </li>
                    <li className="px-4">
                    <Link className="list" to = "/grocery">Grocery</Link>
                        
                    </li>
                    <button className="px-4" onClick={()=>{
                        btnNameReact === "Login"
                    ?setBtnNameReact("Logout")
                    :setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
              
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