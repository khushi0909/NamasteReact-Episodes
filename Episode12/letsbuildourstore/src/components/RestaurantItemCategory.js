import React from 'react'
import MenuItem from './MenuItem'
import { useState } from 'react';

import 'primeicons/primeicons.css';
        
function RestaurantItemCategory({itemCategory,isActive,setShowIndex}) {
  // const [isActive,setIsActive] = useState(true);
    const handleClick = () => {
          setShowIndex();
    };
    console.log("itemCategory",{itemCategory} )
  return (
    <section className="">
        <div className=" bg-green-50 flex m-auto w-9/12 py-3 px-4 mt-2 justify-between items-center text-xl font-bold text-[rgb(34,30,30)]" onClick={handleClick}>
                  <span>
                          {itemCategory.title} ({itemCategory.itemCards.length})
                  </span>

                  <div className = "" >
                      <div>
                                {isActive ? (<i className="pi pi-chevron-up"></i>)
                            :(<i className="pi pi-chevron-down"></i>)
                            }
                        </div> 
                  </div>
         
          
        </div>

        <div>
        {isActive && itemCategory.itemCards.map((item)=>(
          <MenuItem key={item.id} item={item.card.info}/>
        ))}
        </div>
          <div>
            {!isActive && <div className="h-5 w-9/12 bg-[rgb(223, 228, 228)] bg-gray-300  m-auto border-2 border-blue-300"></div>}
          </div>
         
    </section>
  )
}

export default RestaurantItemCategory