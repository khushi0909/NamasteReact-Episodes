
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

        const resData = [
       
        {
          "info": {
            "id": "389678",
            "name": "Tibb's Frankie",
            "cloudinaryImageId": "mrjnjfi5zinvcfffyeke",
            "areaName": "Borivali West",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Snacks",
              "Biryani",
              "North Indian",
              "Mexican",
              "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "389678",
              "fees": [
                {
                  "name": "BASE_TIME",
                  "fee": 2500
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3900
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6400
            },
            "parentId": "216056",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=6654885~p=2~eid=00000188-025a-2e1b-3d67-bb8000710247~45995",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "20-30 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-05-10 04:00:00",
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
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
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
            "link": "swiggy://menu?restaurant_id=389678",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "63452",
            "name": "Qutuz Irani Cafe",
            "cloudinaryImageId": "grkcyzco5i0tjaglyaxl",
            "locality": "Malad West",
            "areaName": "Chincholi Bunder Road",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Fast Food"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "63452",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 7500
                },
                {
                  "name": "BASE_TIME",
                  "fee": 2500
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 10000
            },
            "parentId": "163582",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 6.4,
              "serviceability": "SERVICEABLE",
              "slaString": "35-45 mins",
              "lastMileTravelString": "6.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-05-10 04:00:00",
              "opened": true
            },
            "badges": {
              
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
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "FREE ITEM"
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
            "link": "swiggy://menu?restaurant_id=63452",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        }
        ]

        const Restrauntcard = (props) => {  // or {resName , cuisine}
                             const {resData} = props;
                             const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resData?.info;
            return(
                <div className="res-card">
                        {/* <img className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d7a1d41f05ad83ff8ec92fc7c5982b67"/> */}
                        <img className="res-logo" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}`}/>
                        {/* //? {resName} */}
                        <h3>{name}</h3>               
                        <div className="clubinfo">
                                    <h4>{avgRating}</h4> 
                                    <h4>{sla.slaString}</h4>
                                    <h4>{costForTwo}</h4>
                        </div>
                        
                        <h4>{cuisines.join(" , ")}</h4>





                </div>
            )
        }
// not sing keys (not acceptable) <<<< index as keys <<<< unique id (best practice )
        const Body = () => {

            return(
                <div className = "body">
                    <div className="search">Search</div>
                    <div className="res-container">
                      {
                            resData.map((restraunt )=> (
                               <Restrauntcard key={restraunt.info.id} resData={restraunt} />
                               )       )

                      } 

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