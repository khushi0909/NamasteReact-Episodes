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
    },[])


const fetchMenu = async () => {
  
  try{
    const data = await fetch(MENU_API + resId);

    const resData = await data.json();
// console.log(resData) 
    
    const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    const menuItemList= resData?.data.cards[3].groupedCard.cardGroupMap?.REGULAR?.cards;
    // console.log(menuItemList)


    const menu =  menuItemList.map((item)=>{
        if((item.card.card["@type"]=== nestedItemCategory) || (item.card.card["@type"] === itemCategory)){
            return item.card.card;
        }
    })


    const modifiedData = {
        info: resData.data.cards[0].card.card.info,
        menu: menu.filter((value)=>(value!==undefined)).map((item)=>(item))
    }
        
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