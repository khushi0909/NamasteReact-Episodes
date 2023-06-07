import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantItemCategory";


const RestaurantMenuList = ({menuF}) => {

return(
            <div>
                    <div>
                        {menuF.map((item,index)=>(
                            <div key={index}> 
                                {item.categories?(
                                    <RestaurantNestedItemCategory nestedCategory={item}/>
                                ):(
                                    <RestaurantItemCategory itemCategory = {item}/>
                                )}

                            </div>
                        ))}
                    </div>
            </div>
)
    
}

export default RestaurantMenuList;