import React from "react";
import { CDN_URL } from "../../utils/constant";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'


const Restrauntcard = (props) => {  // or {resName , cuisine}
    const {resData} = props;
//     console.log({resData})
const {cloudinaryImageId,name,avgRating,cuisines,costForTwoString} = resData;


let cu = cuisines.slice(0,3)
console.log(cuisines,cu)
let Name = name.slice(0,23)


return(
<div className="  shadow-3xl flex flex-col flex-auto grow w-60 rounded-xl p-2 bg-gray-100  h-80 max-h-96 mb-8 transform transition duration-500 hover:scale-110  " >
        <img className="w-full h-52  rounded-lg" src={CDN_URL+cloudinaryImageId}/>
      
        <div className="flex flex-wrap flex-col">
                <h3 className="font-bold text-base">{Name}...</h3>               
                <h4 className="flex flex-wrap">
                        <span className="flex flex-wrap ">{cu.join(',')}...</span>
                {/* <span className="flex flex-wrap"></span> */}
                
                </h4>

                <div className="c">
                        <h4 className =" font-medium"><FontAwesomeIcon icon={faStar} className='text-green-600 pr-1' />{avgRating}</h4>
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