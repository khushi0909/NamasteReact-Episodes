
import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("should load contact us component ",() => {


render(<Contact/>)
const heading = screen.getByRole("heading")

//Assertion
expect(heading).toBeInTheDocument();



})

test("should load button us component ",() => {


    render(<Contact/>)
    const button = screen.getByRole("button")
    
    //Assertion
    expect(button).toBeInTheDocument();
    
    
    
    })
    test("should load 2 input boxes on the contact component  ",() => {


        render(<Contact/>)

        //Querying
        const inputBoxes = screen.getAllByRole("textbox")
        console.log(inputBoxes.length)
        
        //Assertion
        expect(inputBoxes.length).toBe(2);
        
        
        
        })