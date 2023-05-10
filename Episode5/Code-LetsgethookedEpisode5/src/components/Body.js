
import Restrauntcard from "./Restrauntcard";
import resData from "../../utils/mockData";

const Body = () => {

    return(
        <div className = "body">
            <div className="search">Search</div>
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