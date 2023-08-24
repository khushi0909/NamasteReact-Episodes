
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
      try {
        const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627");
        // if response is not ok then throw new Error
        if (!response.ok) {
          const err = response.status;
          throw new Error(err);
        } else {
          const json = await response.json();
 console.log(json.data.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants )
 console.log(json)

       // initialize checkJsonData() function to check Swiggy Restaurant data
       async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.success?.cards.length; i++) {
       // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.success?.cards[i]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

      // if checkData is not undefined then return it
          if (checkData !== undefined) {
                      return checkData;
                                        }                               }
                                                }
      // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
        setResDataAll(resData);
        setResDataFiltered(resData);
} 
      }catch (error) {
        console.error(error); // show error in console
      }
      // console.log(json.data.success?.cards)

    }
      // setResDataAll(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
      // setResDataFiltered(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
        
    
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
                                        <Link className="no-underline text-black" key={restraunt.info.id} to = {"/restaurant/" + restraunt.info.id}>
                                        <Restrauntcard resData={restraunt.info} />

                                         </Link>
                                        )       )

                                } 


                              </div>
                              
                          </div>
                      )

}

export default Body;