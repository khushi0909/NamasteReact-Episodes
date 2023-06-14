import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
// const loggedInUser = () => {
//     //API call to check authentications
//     return false;
// }
const Header = () => { 

    // const [isLoggedIn,setIsLoggedIn] =useState(true)

    const [btnNameReact ,setBtnNameReact] = useState("Login");
    return(
      

        <header className ="header">
            
            <div className="logo">
                <img src= {LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Cart</li>
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