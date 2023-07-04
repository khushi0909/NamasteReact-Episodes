import React from "react"
import Shimmer from "./Shimmer";
import RestaurantItemCategory from "./RestaurantItemCategory"
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory"

const RestaurantMenuList = ({menu}) => {
    console.log({menu});
    
    return!menu ? <Shimmer/>:(
    
    <div>
      {menu.map((item,index) => (
     <div key={index}>
        { item.categories
          ?(
        <RestaurantNestedItemCategory nestedCategory={item} />
                        ) : (
         <RestaurantItemCategory itemCategory={item} />
           )
       }

      </div> 
                           )
               )
       } 

       {/* {menu.map((item,index) =>(
               <div key={index}>
                     <div>{item.title}</div>
                 </div>
                
       ))
       }
 */}

       
    </div>

)
      }
export default RestaurantMenuList;

