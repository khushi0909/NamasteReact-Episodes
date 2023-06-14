import { CDN_URL } from "../../utils/constant";
import React from "react";

const Restrauntcard = (props) => {  // or {resName , cuisine}
    const {resData} = props;
//     console.log({resData})
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwoString} = resData;
return(
<div className="res-card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
      
        <div className="res-details">
                <h3>{name}</h3>               
                <h4 className="cuisine">{cuisines.join(" , ")}</h4>

                <div className="clubinfo">
                        <h4 className ="rating"><span className="fa fa-star check"></span>{avgRating}</h4> 
                        <h4 className="cost">{costForTwoString}</h4>
                </div>

        </div>

</div>
)
}
// not sing keys (not acceptable) <<<< index as keys <<<< unique id (best practice )

export default Restrauntcard