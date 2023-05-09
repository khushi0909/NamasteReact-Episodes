
import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
        return(

            <header className ="header">
                
                <div className="logo">
                    <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=740"/>
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

        const resObj = {                    "info": {
            "id": "618199",
            "name": "Sweetish House Mafia",
            "cloudinaryImageId": "lqfdpw89yksgjxmdvkae",
            "locality": "Kandivali West",
            "areaName": "Kandivali West",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Desserts"
            ],}}

        const Restrauntcard = (props) => {  // or {resName , cuisine}
                console.log(props)              // const {resName,cuisine} =props
            return(
                <div className="res-card">
                        <img className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d7a1d41f05ad83ff8ec92fc7c5982b67"/>
                        //? {resName}
                        <h3>{props.resName}</h3>               
                                  <h4>4.3 stars</h4>
                        <h4>{props.cuisine}</h4>
                        <h4>Kandivali East</h4>



                </div>
            )
        }

        const Body = () => {

            return(
                <div className = "body">
                    <div className="search">Search</div>
                    <div className="res-container">
                        <Restrauntcard resName="meghna foods" cuisine="icecream"/>
                        {/* <Restrauntcard/>
                        <Restrauntcard/>
                        <Restrauntcard/>
                        <Restrauntcard/>
                        <Restrauntcard/>
                        <Restrauntcard/> */}

                    </div>
                    
                </div>
            )

        }
const AppLayout = () => {
    return (

        <main className="app">
            <Header/>
            <Body/>
        </main>
    )

    }
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)