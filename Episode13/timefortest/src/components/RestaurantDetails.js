import React from "react";
import useRestaurant from "../../utils/useRestaurant.js"
import RestaurantInfo from "./RestaurantInfo"
import RestaurantMenuList from "./RestaurantMenuList";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantDetails = () => {


    const {resId}= useParams();
    const {resInfo} = useRestaurant();


    // console.log({resInfo})
    

    return !resInfo?(
        <Shimmer/>
    ):(
        <div className="resdetailscontainer">
                <RestaurantInfo resinfo= {resInfo.info}/>
                <RestaurantMenuList  menu = {resInfo.menu}/>
        </div>
    )

}

export default RestaurantDetails