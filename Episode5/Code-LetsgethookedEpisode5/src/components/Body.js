
import Restrauntcard from "./Restrauntcard";
import resData from "../../utils/mockData";

const Body = () => {

    return(
        <div className = "body">
            <div className="filter">
                    <button className="filter-btn" 
                    onClick = {()=>{
                        resData = resData.filter(
                            (res) => res.info.avgRating>4
                            );
                            console.log(resData);
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