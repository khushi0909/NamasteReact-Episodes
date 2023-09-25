// import { async } from "q";
import { useEffect, useState } from "react";
import Shimmer from "../src/components/Shimmer"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant"
import React from "react";

const useRestaurant = () =>
{   
    const [resInfo,setResInfo] = useState([])

    const {resId} = useParams()



    useEffect(()=>{
            fetchMenu()
            // console.log("fetching menu called useeffect")
    },[])


const fetchMenu = async () => {
  
  try{
    const data = await fetch(MENU_API + resId);

    const resData = await data.json();
// console.log("menuapi",resData) 
    
    const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    // const menuItemList= resData?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItemData = resData?.data?.cards?.find((x)=>x.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log("menuItemData",menuItemData)
    const menuItemList1 = menuItemData?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log("menuItemLit1",menuItemList1)
    // console.log("menuitemlist",menuItemList);

    const menu =  menuItemList1.map((item)=>{
        if((item.card.card["@type"]=== nestedItemCategory) || (item.card.card["@type"] === itemCategory)){
            return item.card.card;
        }
    })
// console.log("menu",menu)

    const modifiedData = {
        info: resData.data.cards[0].card.card.info,
        menu: menu.filter((value)=>(value!==undefined)).map((item)=>(item))
    }
// console.log("menumodified",modifiedData.menu)
        
            setResInfo(modifiedData)
}catch(error){  
    console.log(error);
}
}

return (
   {resInfo}
)

}

export default useRestaurant;