import React from "react";
import { CDN_URL } from "../../utils/constant";


const Restrauntcard = (props) => {  // or {resName , cuisine}
    const {resData} = props;
//     console.log({resData})
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwoString} = resData;
return(
<div className="border-2 border-green-600 flex flex-col flex-auto grow w-56  rounded-lg p-2 bg-gray-200" >
        <img className="w-full h-52  rounded-lg" src={CDN_URL+cloudinaryImageId}/>
      
        <div className="res-details">
                <h3>{name}</h3>               
                <h4 className="flex flex-wrap">{cuisines.join(" , ")}</h4>

                <div className="clubinfo">
                        <h4 className ="rating"><span className="fa fa-star check"></span>{avgRating}</h4> 
                        <h4 className="cost">{costForTwoString}</h4>
                </div>

        </div>

</div>
)

//Higher order component 
//im[ut -RestrauntCard=> RestrauntCardPromoted]


}
export const withPromotedLabel = (Restrauntcard) => {

        return (props) => {

                return(
                        <div>
                                <label>Promoted</label>
                                <Restrauntcard {...props}/>
                        </div>

                )
        }

}
// not sing keys (not acceptable) <<<< index as keys <<<< unique id (best practice )

export default Restrauntcard