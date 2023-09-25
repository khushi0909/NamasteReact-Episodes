import React from 'react'
import MenuItem from './MenuItem'
import { useState } from 'react';

import 'primeicons/primeicons.css';
        
function RestaurantItemCategory({itemCategory,setShowIndex}) {

  //isActive as param was passed -for other method used may be if remember correctly for context
  const [isActive,setIsActive] = useState(true); //this was inactive -for other method used may be if remember correctly for context
    const handleClick = () => {
          // setShowIndex();//this was active -for other method used may be if remember correctly for context
          setIsActive(!isActive)
    };
    // console.log("itemCategory",{itemCategory} )
  return (
    <section className="">
        <div className="flex m-auto w-9/12 py-3 px-4 mt-2 justify-between items-center text-xl font-bold text-[rgb(34,30,30)]" onClick={handleClick} >
          {/* onClick={handleClick} */}
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
            {!isActive && <div className="h-5 w-9/12 bg-[rgb(223, 228, 228)] bg-gray-100  m-auto border-"></div>}
          </div>
         
    </section>
  )
}

export default RestaurantItemCategory