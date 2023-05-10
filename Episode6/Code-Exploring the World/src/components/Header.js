import { LOGO_URL } from "../../utils/constant";


const Header = () => { 
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
            </div>

        </header>
    )

    }

    export default Header;