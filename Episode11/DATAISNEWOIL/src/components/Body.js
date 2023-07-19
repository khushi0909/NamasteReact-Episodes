
import Restrauntcard from "./Restrauntcard";
import resDataa from "../../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

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

    //empty dependency array =>once after Every render 
    // dep array [searchTeaxt] => once after initial render + everytime after my searchText Changes 

    useEffect(() => {
    getRestaurants()

    },[])

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      // console.log(json)
      setResDataAll(json?.data?.cards[2]?.data?.data?.cards);
      setResDataFiltered(json?.data?.cards[2]?.data?.data?.cards);

    }
    // console.log("render");

    const  onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<h1>Looks like you are offline !!</h1>);



                  return resDataAll.length === 0 ? (
                  <Shimmer/>
                  
                  ):(
                          <div className = "body">
                            <>  <div className="p-3 flex justify-center">
                                      <button className="p-3 mt-6 font-semibold rounded-xl bg-yellow-200 cursor-pointer" 
                                      onClick = {()=>{ 
                                        const   filteredresData = resDataAll.filter(
                                              (res) => res.data.avgRating>4
                                              );
                                              setResDataFiltered(filteredresData);
                                              console.log("filterdata",filteredresData);
                                              }}>
                                                  Top Rated Restraunts</button>
                              </div>
                              
                              <div className = "flex justify-center p-1 gap-2">
                                <input
                                type="text"
                                className="px-1 py-3"
                                placeholder="search"
                                value={searchText}
                              onChange={(e) => {
                                setSearchText(e.target.value)
                              }}/>
                              <button className="px-3 text-lg font-semibold"
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
                              <div className="flex my-1 mx-auto p-3 gap-2">
                                {
                                      resDataFiltered.map((restraunt )=> (
                                        <Link className="no-underline text-black" key={restraunt.data.id} to = {"/restaurant/" + restraunt.data.id}>
                                        <Restrauntcard resData={restraunt.data} />

                                         </Link>
                                        )       )

                                } 


                              </div>
                              
                          </div>
                      )

}

export default Body;