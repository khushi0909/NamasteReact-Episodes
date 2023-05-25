import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
const loggedInUser = () => {
    //API call to check authentications
    return false;
}
const Header = () => { 

    const [isLoggedIn,setIsLoggedIn] =useState(true)
    return(
      

        <header className ="header">
            
            <div className="logo">
                <img src= {LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                    <Link to ="/">
                        Home
                    </Link>
                        </li>

                    <Link to ="/about">
                        <li> About US </li>
                    </Link>

                    <Link to = "/contact">
                    <li>Contact</li>
                    </Link>
                    
                    <li>Cart</li>
                </ul>
                {(isLoggedIn)?
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
                :
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>

                }
            </div>

        </header>
    )

    }

    export default Header;