import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constant";
import { useState,useEffect } from "react";
// const loggedInUser = () => {
//     //API call to check authentications
//     return false;
// }
const Header = () => { 

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
                        
                        <Link to ="/">Home </Link></li>
                    <li>
                        <Link to = "/About">About Us</Link>
                    </li>
                    <li>
                    <Link to = "/Contact">Contact</Link>
                        
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