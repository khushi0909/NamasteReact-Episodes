
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
                    <div className = "">
                            <div className="flex border-red-500 border-2 items-center">  
                                    <div className="">
                                              <button className="px-4 py-2   bg-gray-200 rounded-lg font-medium shadow-md  " 
                                              onClick = {()=>{ 
                                                const   filteredresData = resDataAll.filter(
                                                      (res) => res.data.avgRating>4
                                                      );
                                                      setResDataFiltered(filteredresData);
                                                      console.log("filterdata",filteredresData);
                                                      }}>
                                                          Top Rated Restraunts
                                              </button>
                                    </div>
                              
                                        <div className="m-4 p-6">
                                                  <input
                                                  type="text"
                                                  className="border-2 border-solid border-grey-400"
                                                  placeholder="Search"
                                                  value={searchText}
                                                onChange={(e) => {
                                                  setSearchText(e.target.value)
                                                }}/>
                                                <button className="px-3  ml-2 font-medium text-xl  bg-green-300 rounded-lg  "
                                                // need to filter the data 
                                                onClick={() => {
                                                  const data = filterData(searchText,resDataAll);
                                              //update the sate-restaurants

                                                  setResDataFiltered(data)
                                                }}>Search

                                                </button>


                                        </div>
                                        
                              <div/>
                          </div>
                            
                            {/* write logic for no rest found */}
                              <div className="flex  flex-wrap  ">
                                {
                                      resDataFiltered.map((restraunt )=> (
                                        <Link className="link" key={restraunt.data.id} to = {"/restaurant/" + restraunt.data.id}>
                                        <Restrauntcard resData={restraunt.data} />

                                         </Link>
                                        )       )

                                } 


                              </div>
                              
                       </div>
                      )

}

export default Body;