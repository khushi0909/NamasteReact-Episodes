
import {fireEvent, render,screen} from  "@testing-library/react"
import Header from "../Header"
import { Provider} from "react-redux"
import appStore from "../../../utils/appStore"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"



test("it should load header component with login button" , () => {



        render(

            <BrowserRouter>
                            <Provider store={appStore}>
                                   <Header/>
                           </Provider>
            </BrowserRouter>
            
        
        )


        const loginButton = screen.getByRole("button");
        // const loginButton = screen.getByRole("button",{name:"Login"});   //if there are several buttons and would like to find button with name as Login

        // const loginButton = screen.getByText("Login");


        expect(loginButton).toBeInTheDocument();

})

test("it should load header component with cart items 0" , () => {



    render(

        <BrowserRouter>
                        <Provider store={appStore}>
                               <Header/>
                       </Provider>
        </BrowserRouter>
        
    
    )


    const cartItems = screen.getByText("Cart(0)");
    // const loginButton = screen.getByRole("button",{name:"Login"});   //if there are several buttons and would like to find button with name as Login

    // const loginButton = screen.getByText("Login");


    expect(loginButton).toBeInTheDocument();

})

test("it should load header component with cart item" , () => {



    render(

        <BrowserRouter>
                        <Provider store={appStore}>
                               <Header/>
                       </Provider>
        </BrowserRouter>
        
    
    )


    const cartItems = screen.getByText(/Cart/);
    // const loginButton = screen.getByRole("button",{name:"Login"});   //if there are several buttons and would like to find button with name as Login

    // const loginButton = screen.getByText("Login");


    expect(cartItems).toBeInTheDocument();

})  

test("it should load headerand change login to logout when clicked " , () => {



    render(

        <BrowserRouter>
                        <Provider store={appStore}>
                               <Header/>
                       </Provider>
        </BrowserRouter>
        
    
    )


     const loginButton = screen.getByRole("button",{name:"Login"});   //if there are several buttons and would like to find button with name as Login

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"})



    expect(logoutButton).toBeInTheDocument();

})  