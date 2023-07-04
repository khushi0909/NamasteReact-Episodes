import React from 'react'
import RestaurantItemCategory from './RestaurantItemCategory'

function RestaurantNestedItemCategory({nestedCategory}) {
  // console.log({nestedCategory})
  return (
    <div>
        {nestedCategory.categories.map((item,index)=>{
                <div key={index}>
                      <RestaurantItemCategory itemCategory = {item}/>
                      <div>nested</div>
                  </div>
        })}

    </div>
  )
}

export default RestaurantNestedItemCategory