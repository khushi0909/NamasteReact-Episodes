
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantDetails from "./components/RestaurantDetails"
import Grocery from "./components/Grocery"



        
const AppLayout = () => {
    return (

        <main className="app">
            <Header/>
           <Outlet/>
        </main>
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
                    element:<Grocery/>,
     
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