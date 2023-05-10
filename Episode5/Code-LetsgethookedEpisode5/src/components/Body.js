
import Restrauntcard from "./Restrauntcard";
import resDataa from "../../utils/mockData";
import {useState} from "react";

const Body = () => {
  
                
   

    // State Variable -super powerful variable

    // const [resData] = useState();  //this is same as let resData

    // const [resData , setResData] = useState(resDataa) is same as 

    // const arr =useState(resDataa)
    // const [resData , setResData] = arr


    //const resData = arr[0];
    // const setResData = arr[1];

    const [resData , setResData] = useState(resDataa)
return(
        <div className = "body">
            <div className="filter">
                    <button className="filter-btn" 
                    onClick = {()=>{
                        
                      const   filteredresData = resData.filter(
                            (res) => res.info.avgRating>4
                            );
                            setResData(filteredresData);
                            console.log(filteredresData);
                            }}>
                                 Top Rated Restraunts</button>
             </div>
            <div className="res-container">
              {
                    resData.map((restraunt )=> (
                       <Restrauntcard key={restraunt.info.id} resData={restraunt} />
                       )       )
              } 

            </div>
            
        </div>
    )

}

export default Body;