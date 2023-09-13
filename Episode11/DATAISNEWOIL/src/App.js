
import React, { useState,useEffect } from "react"
import { lazy,Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantDetails from "./components/RestaurantDetails"
import UserContext from "../utils/UserContext"
// import Grocery from "./components/Grocery"


const Grocery = lazy(()=> import ("./components/Grocery"))
        
const AppLayout = () => {

    //authentication code written,suppose ther is api that gives user info

    const [userName,setUserName] = useState(0)

    useEffect(()=> {
        //make an api call and send username and pwd suppose you got your data 
        const data = {
            name:'khushboo'
        }

        setUserName(data.name)
//so to pass this new information in our app we will use the context provider 
    },[])
    return (
        <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
                 <main className="app">
                    <Header/>
                    <Outlet/>
                 </main>
        </UserContext.Provider>
       
    );

    };

    const appRoute = createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[
                    {        
                        path:"/",
                        element:<Body/>,
            
                 },
                    {        
                        path:"/about",
                        element:<About/>,
         
                 },
                 {        
                    path:"/grocery",
                    element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/> </Suspense>,
     
             },
                 {        
                     path:"/contact",
                     element:<Contact/>,
         
                    },
                    {
                        path:"/restaurant/:resId",
                        element:<RestaurantDetails/>,
                    }
                        ],
                        errorElement:<Error/>
        },
      
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoute}/>)