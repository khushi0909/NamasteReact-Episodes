import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../../utils/constant";
import Shimmer from "./Shimmer";
import RestaurantMenuList from "./RestaurantMenuList";

const RestrauntMenu = () => {

    const params = useParams();
    const {id} = params
  useEffect(() => {
    getRestaurantInfo()
  },[]);

  const [restaurant,setRestaurant] = useState(null)
  const [menu,setMenu] = useState([])

  async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId="+id+"&submitAction=ENTER")

    const json = await data.json();
    // console.log(json)
        console.log(json?.data?.cards[0]?.card?.card?.info)

    console.log(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


        // console.log(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards.card);
        // console.log(Object.values(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards));

        // console.log(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR);


    setRestaurant(json.data?.cards[0]?.card?.card?.info)
    const menuItemList= json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    
    const menulist = menuItemList.map((item)=>{
      if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory))
      return item.card.card;
    })
    
    const menuFiltered = menulist.filter(value => value!== undefined)
    console.log(menuFiltered)
    // arrOfObj = json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    // const arr =arrOfObj.map((item)=> item.card)
    // console.log(arr);

    // const arr1 = arr.map((ite) => ite.info)
    // console.log(arr1)
    setMenu(menuFiltered)
          
  }
    return(!restaurant)?<Shimmer/>:(
        <div>
                <h1>Restraunt id:{id}</h1>
                <h2> {restaurant.name}</h2>
                <img className="restaurantimg" src= {CDN_URL+restaurant.cloudinaryImageId}/>
                <h4>{restaurant.areaName}</h4>
                <h4>{restaurant.city}</h4>
                <h4>{restaurant.avgRating} starts</h4>
                <h4>{restaurant.costForTwoMessage}</h4>
                <h4>{restaurant.cuisines.join(" , ")}</h4>
                {/* <h4>{menu.map((item)=><li key={item.id}>{item.name}</li>)}</h4>  */}
                {/* <h1>Menu</h1> */}
                {/* <ul></ul> */}

                <RestaurantMenuList menuF={menuFiltered}/>


        </div>
    )
}

export default RestrauntMenu