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
      

        <header className =" border-red-400 flex justify-between items-center shadow-md border-8">
            
            <div className=" w-40 border-2 border-black">
                <img className=" w-40 border-2 border-yellow-500" src= {LOGO_URL}/>
            </div>

            <div className="flex justify-center items-center border-2 border-green-400 mx-3">
                <ul className="flex px-1">
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                        Online Status: {onlineStatus ? "✅" :" 🔴" }
                    </li>
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                        
                        <Link className="list" to ="/">Home </Link>
                    </li>
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                        <Link className="list" to = "/About">About Us</Link>
                    </li>
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                    <Link className="list" to = "/Contact">Contact</Link>
                        
                    </li>
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                    <Link className="list" to = "/grocery">Grocery</Link>
                        
                    </li>
                   
                </ul>
                <button className="p-1 text-lg font-medium mx-2" onClick={()=>{
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