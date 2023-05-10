
import Restrauntcard from "./Restrauntcard";
import resDataa from "../../utils/mockData";
import {useState} from "react";


function filterData(searchText,resData) {

  const filterData = resData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

  if(filterData){
  return filterData;

  }
  else {

    return<div>No data found </div>
  }
}

const Body = () => {
  
                
  
    // State Variable -super powerful variable
    const [resData , setResData] = useState(resDataa)
    const [searchText,setSearchText] =useState("")
return(
        <div className = "body">
          <>  <div className="filter">
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
             
             <div className="search-container">
              <input
              type="text"
              className="search-input"
              placeholder="search"
              value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}/>
            <button className="search-btn"
            // need to filter the data 
            onClick={() => {
              const data = filterData(searchText,resData);
           //update the sate-restaurants

              setResData(data)
            }}>Search

            </button>


             </div>
             
             </>
          
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