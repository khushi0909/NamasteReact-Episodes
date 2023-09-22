import {render,screen} from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../../mocks/mockResListDaa.json"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"




global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("should render the body component",async ()=>{

    await act(async() => render(
            <BrowserRouter>
    <Body/>

            </BrowserRouter>
    
    ))

    const searchBtn = screen.getByRole("button",{name:"Search"});

    console.log(searchBtn);

    const searchInput = screen.getBytestId(searchInput)

    console.log(searchInput)

    expect(searchBtn).toBeInTheDocment();
})