
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

        const resData = {                        "info": {
            "id": "618682",
            "name": "Instawich - Desi Sandwiches",
            "cloudinaryImageId": "uhx4aob4mhq6jrminhkd",
            "locality": "Satya shreepal Nagar",
            "areaName": "Sai Baba mandir Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "618682",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "BASE_TIME",
                  "fee": 2500
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6400
            },
            "parentId": "10238",
            "avgRatingString": "4.2",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-05-10 03:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=618682",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        }

        const Restrauntcard = (props) => {  // or {resName , cuisine}
                             const {resData} =props
            return(
                <div className="res-card">
                        {/* <img className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d7a1d41f05ad83ff8ec92fc7c5982b67"/> */}
                        <img className="res-logo" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${resData.info.cloudinaryImageId}`}/>
                        {/* //? {resName} */}
                        <h3>{resData.info.name}</h3>               
                        <div className="clubinfo">
                                    <h4>{resData.info.avgRating}</h4> 

                                    <h4>{resData.info.sla.slaString}</h4>
                                    <h4>{resData.info.costForTwo}</h4>
                        </div>
                        
                        <h4>{resData.info.cuisines.join(",")}</h4>





                </div>
            )
        }

        const Body = () => {

            return(
                <div className = "body">
                    <div className="search">Search</div>
                    <div className="res-container">
                        <Restrauntcard resData = {resData}/>
                        <Restrauntcard resData = {resData}/>
                        <Restrauntcard resData = {resData}/>

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