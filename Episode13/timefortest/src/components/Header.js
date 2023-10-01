import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constant";
import { useState,useEffect,useContext } from "react";
import React from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";




// const loggedInUser = () => {
//     //API call to check authentications
//     return false;
// }
const Header = () => { 

        const onlineStatus = useOnlineStatus()

        const {loggedInUser} = useContext(UserContext);
        // console.log({loggedInUser})


    // const [isLoggedIn,setIsLoggedIn] =useState(true)

    // if no dependency array ===useEffect is called on Every render 
    // if dependency array is empty = []=> useEffect is called on the initial render(just once )



    const [btnNameReact ,setBtnNameReact] = useState("Login");
    // useEffect(()=>{
    //         console.log("useEffect called")
    // })


//Selector -it is a hook-this hook give us access to the store 
//we aew subscribing to the store using selector 



const cartItems = useSelector((store)=>store.cart.items);
// console.log(cartItems)

    return(
      

        <header className =" flex  justify-between items-center shadow-lg  ">
            
            <div className="w-40  ">
                <img className="w-40 border-2 border-yellow-500" src= {LOGO_URL}/>
            </div>

            <div className="flex justify-center items-center  max-[375px]:border-red-500  max-[375px]:border-8  sm:mx-3 ">
                <ul className="flex px-1">
                    {/* <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                        Online Status: {onlineStatus ? "✅" :" 🔴" }
                    </li> */}
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2 hover:bg-yellow-600 hover:text-white rounded-md sm:px-4">
                        
                        <Link className="list" to ="/">Home </Link>
                    </li>
                    {/* <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                        <Link className="list" to = "/About">About Us</Link>
                    </li> */}
                    <li className="text-lg font-semibold text-gray-600 m-2 p-2  hover:bg-yellow-600 hover:text-white rounded-md sm:px-4">
                    <Link className="list" to = "/Contact">Contact</Link>
                        
                    </li>
                    {/* <li className="text-lg font-semibold text-gray-600 m-2 p-2">
                    <Link className="list" to = "/grocery">Grocery</Link>
                        
                    </li> */}
                    <li className="text-lg font-bold text-gray-600 m-2 p-2  hover:bg-yellow-600 hover:text-white rounded-md px-4">
                        <Link className="" to = "/Cart">Cart({cartItems.length})</Link>
                    </li>
                   
                </ul>
                {/* <button className="p-1 text-lg font-medium mx-2 hover:bg-yellow-600 hover:text-white rounded-md px-4 " onClick={()=>{
                        btnNameReact === "Login"
                    ?setBtnNameReact("Logout")
                    :setBtnNameReact("Login")
                    }}>{btnNameReact}</button> */}


                    {/* <div className="px-4 ">{loggedInUser}</div> */}
                {/* {(isLoggedIn)?
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
                :
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>

                } */}
            {/* //selector */}
            
            </div>

        </header>
    )

    }

    export default Header;