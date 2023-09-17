import React from "react"
import Shimmer from "./Shimmer";
import RestaurantItemCategory from "./RestaurantItemCategory"
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory"
import { useState } from "react";

const RestaurantMenuList = ({menu}) => {
    console.log({menu});

    const [showIndex,setShowIndex] = useState(null)
    
    return!menu ? <Shimmer/>:(
    
    <div>
      {menu.map((item,index) => (
     <div key={index}>
        { item.categories
          ?(
        <RestaurantNestedItemCategory  key={index} nestedCategory={item} />
                        ) : (
            //controlled component 

         <RestaurantItemCategory key={index} 
                                itemCategory={item}
                               isActive={ index === showIndex ? true :false} 
                               setShowIndex = {() => setShowIndex(index)}/>
           )
       }

      </div> 
                           )
               )
       } 
       
    </div>

)
      }
export default RestaurantMenuList;

