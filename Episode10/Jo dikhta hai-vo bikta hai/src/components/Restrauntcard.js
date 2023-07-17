import React from "react";
import { CDN_URL } from "../../utils/constant";


const Restrauntcard = (props) => {  // or {resName , cuisine}
    const {resData} = props;
//     console.log({resData})
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwoString} = resData;
return(
<div className="m-4 p-4 w-250    bg-gray-100   shadow-sm rounded-lg  hover:bg-gray-200">
        <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
      
        <div className="">
                <h3 className="font-bold py-3 text-lg border-black border-2">{name}</h3>               
                <h4 className="p-1 border-black border-2">{cuisines.join(" , ")}</h4>

                <div className="clubinfo border-black border-2">
                        <h4 className ="rating"><span className="fa fa-star check"></span>{avgRating}</h4> 
                        <h4 className="cost">{costForTwoString}</h4>
                </div>

        </div>

</div>
)
}
// not sing keys (not acceptable) <<<< index as keys <<<< unique id (best practice )

export default Restrauntcard