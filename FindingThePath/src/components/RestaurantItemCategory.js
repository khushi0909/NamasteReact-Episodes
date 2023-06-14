import React from 'react'
import MenuItem from './MenuItem'
import { useState } from 'react';

import 'primeicons/primeicons.css';
        
function RestaurantItemCategory({itemCategory}) {

  const [isActive,setIsActive] = useState(true);

    console.log({itemCategory} )
  return (
    <section className="itemCatSec">
        <div className="itemCatTitle">
          <span>
        {itemCategory.title} ({itemCategory.itemCards.length})
          </span>
          <div className = "symbolupdown"onClick={()=>(setIsActive(!isActive))}>
              <div>
                        {isActive ? (<i className="pi pi-chevron-up"></i>)
                    :(<i className="pi pi-chevron-down"></i>)
                    }
                </div> 
          </div>
         
          
          </div>
          <div>
          {isActive && itemCategory.itemCards.map((item)=>(
            <MenuItem key ={item.id} item={item.card.info}/>
          ))}
          </div>
          <div>
            {!isActive && <div className="box"></div>}
          </div>
         
    </section>
  )
}

export default RestaurantItemCategory