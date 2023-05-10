
import Restrauntcard from "./Restrauntcard";
import resData from "../../utils/mockData";
import {useState} from "react";

const Body = () => {
    // let resData = [
       
    //     {
    //       "info": {
    //         "id": "389678",
    //         "name": "Tibb's Frankie",
    //         "cloudinaryImageId": "mrjnjfi5zinvcfffyeke",
    //         "areaName": "Borivali West",
    //         "costForTwo": "₹200 for two",
    //         "cuisines": [
    //           "Snacks",
    //           "Biryani",
    //           "North Indian",
    //           "Mexican",
    //           "Beverages"
    //         ],
    //         "avgRating": 3.2,
    //         "feeDetails": {
    //           "restaurantId": "389678",
    //           "fees": [
    //             {
    //               "name": "BASE_TIME",
    //               "fee": 2500
    //             },
    //             {
    //               "name": "BASE_DISTANCE",
    //               "fee": 3900
    //             },
    //             {
    //               "name": "ANCILLARY_SURGE_FEE"
    //             }
    //           ],
    //           "totalFee": 6400
    //         },
    //         "parentId": "216056",
    //         "avgRatingString": "3.2",
    //         "totalRatingsString": "1K+",
    //         "promoted": true,
    //         "adTrackingId": "cid=6654885~p=2~eid=00000188-025a-2e1b-3d67-bb8000710247~45995",
    //         "sla": {
    //           "deliveryTime": 25,
    //           "lastMileTravel": 2.2,
    //           "serviceability": "SERVICEABLE",
    //           "slaString": "20-30 mins",
    //           "lastMileTravelString": "2.2 km",
    //           "iconType": "ICON_TYPE_EMPTY"
    //         },
    //         "availability": {
    //           "nextCloseTime": "2023-05-10 04:00:00",
    //           "opened": true
    //         },
    //         "badges": {
    //           "textExtendedBadges": [
    //             {
    //               "iconId": "guiltfree/GF_Logo_android_3x",
    //               "shortDescription": "options available",
    //               "fontColor": "#7E808C"
    //             }
    //           ]
    //         },
    //         "isOpen": true,
    //         "type": "F",
    //         "badgesV2": {
    //           "entityBadges": {
    //             "textBased": {
                  
    //             },
    //             "imageBased": {
                  
    //             },
    //             "textExtendedBadges": {
    //               "badgeObject": [
    //                 {
    //                   "attributes": {
    //                     "iconId": "guiltfree/GF_Logo_android_3x",
    //                     "description": "",
    //                     "shortDescription": "options available",
    //                     "fontColor": "#7E808C"
    //                   }
    //                 }
    //               ]
    //             }
    //           }
    //         },
    //         "aggregatedDiscountInfoV3": {
    //           "header": "20% OFF",
    //           "subHeader": "UPTO ₹50"
    //         },
    //         "orderabilityCommunication": {
    //           "title": {
                
    //           },
    //           "subTitle": {
                
    //           },
    //           "message": {
                
    //           },
    //           "customIcon": {
                
    //           }
    //         },
    //         "differentiatedUi": {
    //           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //           "differentiatedUiMediaDetails": {
    //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //             "lottie": {
                  
    //             },
    //             "video": {
                  
    //             }
    //           }
    //         },
    //         "reviewsSummary": {
              
    //         },
    //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    //       },
    //       "analytics": {
            
    //       },
    //       "cta": {
    //         "link": "swiggy://menu?restaurant_id=389678",
    //         "text": "RESTAURANT_MENU",
    //         "type": "DEEPLINK"
    //       }
    //     },
    //     {
    //       "info": {
    //         "id": "63452",
    //         "name": "Qutuz Irani Cafe",
    //         "cloudinaryImageId": "grkcyzco5i0tjaglyaxl",
    //         "locality": "Malad West",
    //         "areaName": "Chincholi Bunder Road",
    //         "costForTwo": "₹150 for two",
    //         "cuisines": [
    //           "Fast Food"
    //         ],
    //         "avgRating": 4.3,
    //         "feeDetails": {
    //           "restaurantId": "63452",
    //           "fees": [
    //             {
    //               "name": "BASE_DISTANCE",
    //               "fee": 7500
    //             },
    //             {
    //               "name": "BASE_TIME",
    //               "fee": 2500
    //             },
    //             {
    //               "name": "ANCILLARY_SURGE_FEE"
    //             }
    //           ],
    //           "totalFee": 10000
    //         },
    //         "parentId": "163582",
    //         "avgRatingString": "4.3",
    //         "totalRatingsString": "5K+",
    //         "sla": {
    //           "deliveryTime": 37,
    //           "lastMileTravel": 6.4,
    //           "serviceability": "SERVICEABLE",
    //           "slaString": "35-45 mins",
    //           "lastMileTravelString": "6.4 km",
    //           "iconType": "ICON_TYPE_EMPTY"
    //         },
    //         "availability": {
    //           "nextCloseTime": "2023-05-10 04:00:00",
    //           "opened": true
    //         },
    //         "badges": {
              
    //         },
    //         "isOpen": true,
    //         "type": "F",
    //         "badgesV2": {
    //           "entityBadges": {
    //             "textBased": {
                  
    //             },
    //             "imageBased": {
                  
    //             },
    //             "textExtendedBadges": {
                  
    //             }
    //           }
    //         },
    //       },
         
         
    //     },{
    //     "info": {
    //       "id": "70697",
    //       "name": "Theobroma",
    //       "cloudinaryImageId": "wgadzsae4z8koodcphyc",
    //       "locality": "Malad Borivali Area",
    //       "areaName": "Borivali",
    //       "costForTwo": "₹800 for two",
    //       "cuisines": [
    //         "Bakery",
    //         "Desserts"
    //       ],
    //       "avgRating": 4.5,
    //       "feeDetails": {
    //         "restaurantId": "70697",
    //         "fees": [
    //           {
    //             "name": "BASE_DISTANCE",
    //             "fee": 3000
    //           },
    //           {
    //             "name": "BASE_TIME"
    //           },
    //           {
    //             "name": "ANCILLARY_SURGE_FEE"
    //           }
    //         ],
    //         "totalFee": 3000
    //       },
    //       "parentId": "1040",
    //       "avgRatingString": "4.5",
    //       "totalRatingsString": "10K+",
    //       "promoted": true,
    //       "adTrackingId": "cid=6706494~p=2~eid=00000188-05c0-a3e8-3e99-3f0a00e40270~45995",
    //       "sla": {
    //         "deliveryTime": 21,
    //         "lastMileTravel": 1.7,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "21 mins",
    //         "lastMileTravelString": "1.7 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //       },
    //       "availability": {
    //         "nextCloseTime": "2023-05-11 00:00:00",
    //         "opened": true
    //       },
    //       "badges": {
    //         "imageBadges": [
    //           {
    //             "imageId": "newg.png",
    //             "description": "Gourmet"
    //           }
    //         ]
    //       },
    //       "isOpen": true,
    //       "type": "F",
    //       "badgesV2": {
    //         "entityBadges": {
    //           "imageBased": {
    //             "badgeObject": [
    //               {
    //                 "attributes": {
    //                   "imageId": "newg.png",
    //                   "description": "Gourmet"
    //                 }
    //               }
    //             ]
    //           },
    //           "textExtendedBadges": {
                
    //           },
    //           "textBased": {
                
    //           }
    //         }
    //       },
    //       "aggregatedDiscountInfoV3": {
    //         "header": "10% OFF",
    //         "subHeader": "ABOVE ₹159",
    //         "discountTag": "FLAT DEAL"
    //       },
    //       "orderabilityCommunication": {
    //         "title": {
              
    //         },
    //         "subTitle": {
              
    //         },
    //         "message": {
              
    //         },
    //         "customIcon": {
              
    //         }
    //       },
    //       "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //           "lottie": {
                
    //           },
    //           "video": {
                
    //           }
    //         }
    //       },
    //       "reviewsSummary": {
            
    //       },
    //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    //     },
    //     "analytics": {
          
    //     },
    //     "cta": {
    //       "link": "swiggy://menu?restaurant_id=70697",
    //       "text": "RESTAURANT_MENU",
    //       "type": "DEEPLINK"
    //     }
    //   }
    //     ]
    

    // State Variable -super powerful variable

    // const [resData] = useState();  //this is same as let resData

    const [resData , setResData] = useState([{
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
          "avgRating": 3.2,
          "feeDetails": {
            "restaurantId": "389678",
          },
          "parentId": "216056",
          "avgRatingString": "3.2",
          "sla": {
            "deliveryTime": 25,
            "slaString": "20-30 mins",
            "lastMileTravelString": "2.2 km",
          },
    

      
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
    
       
    
}])
return(
        <div className = "body">
            <div className="filter">
                    <button className="filter-btn" 
                    onClick = {()=>{
                        
                      const   filteredresData = resData.filter(
                            (res) => res.info.avgRating>4
                            );
                            setResData(filteredresData);
                            console.log(filteredresData);
                            }}>
                                 Top Rated Restraunts</button>
             </div>
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

export default Body;