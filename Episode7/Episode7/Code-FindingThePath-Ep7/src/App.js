
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import RestrauntMenu from "./components/RestrauntMenu"



        
const AppLayout = () => {
    return (
        <main className="app">
            <Header/>
             <Outlet/>
            <Footer/>
        </main>
    )

    }
const root = ReactDOM.createRoot(document.getElementById("root"))
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[{
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restraunt/:id",
            element:<RestrauntMenu/>
        }]
    }
    
])
root.render(<RouterProvider router={appRouter}/>)
// root.render(<AppLayout/>)
