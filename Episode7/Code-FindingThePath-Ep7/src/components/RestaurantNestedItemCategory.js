import RestaurantItemCategory from "./RestaurantItemCategory"

const RestaurantNestedItemCategory = ({nestedCategory}) => {

return(

    <div>
        {nestedCategory.categories.map((category,index)=>{
            <div key={index}>
                    <RestaurantItemCategory itemCategory={category}/>
            </div>
        })}
    </div>

)

}

export default RestaurantNestedItemCategory