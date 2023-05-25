const RestaurantItemCategory = ({itemCategory}) => {

    return(
            <div>
                {itemCategory.map((item,index)=>{
                  <div>
                     {item.info.name} 
                 </div>
                })}
            </div>
    )
}

export default RestaurantItemCategory