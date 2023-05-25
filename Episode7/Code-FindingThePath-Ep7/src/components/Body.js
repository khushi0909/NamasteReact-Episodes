
import Restrauntcard from "./Restrauntcard";
import resDataa from "../../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";


function filterData(searchText,resData) {

  const filterData = resData.filter((res) => res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

  if(filterData){
  return filterData;

  }
  else {

    return<div>No data found </div>
  }
}


const Body = () => {
    // State Variable -super powerful variable
    const [resDataAll,setResDataAll] = useState([]);
    const [resDataFiltered , setResDataFiltered] = useState([])
    const [searchText,setSearchText] =useState([])

    //empty dependency array =>once afte Every render 
    // dep array [searchTeaxt] => once after initial render + everytime after my searchText Changes 

    useEffect(() => {
    getRestaurants()

      // console.log("useEffect");
    },[])

    async function getRestaurants(){
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      // const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId=24210")
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      // console.log(json)
      setResDataAll(json?.data?.cards[2]?.data?.data?.cards);
      setResDataFiltered(json?.data?.cards[2]?.data?.data?.cards);

    }
    console.log("render");

    //conditional Rendering 
    //if restaurant is empty => shimmer UI
    //if restaurant has data => actual data UI 


    //not render component (Early return)

    if(!resDataAll)return null;

    // if(resDataFiltered?.length === 0)
    // return <h1>No restaurant match your Filter!!</h1>

                  return resDataAll.length === 0 ? (
                  <Shimmer/>
                  ):(
                          <div className = "body">
                            <>  <div className="filter">
                                      <button className="filter-btn" 
                                      onClick = {()=>{ 
                                        const   filteredresData = resData.filter(
                                              (res) => res.data.avgRating>4
                                              );
                                              setResDataFiltered(filteredresData);
                                              console.log("filterdata",filteredresData);
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
                                const data = filterData(searchText,resDataAll);
                            //update the sate-restaurants

                                setResDataFiltered(data)
                              }}>Search

                              </button>


                              </div>
                              
                              </>
                            
                            {/* write logic for no rest found */}
                              <div className="res-container">
                                {
                                      resDataFiltered.map((restraunt )=> (
                                        <Restrauntcard resData={restraunt.data} />
                                        )       )

                                } 


                              </div>
                              
                          </div>
                      )

}

export default Body;