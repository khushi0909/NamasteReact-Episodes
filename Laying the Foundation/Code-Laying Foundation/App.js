
import React from "react"
import ReactDOM from "react-dom/client"

//NOTE : point is if you see both the console log result are the same object and we can say are equivalent 
//1st one is with pure react 
//second one is with JSX
//hence JSX and React are different but jsx is used to make life easier of the developers 



//React.createElement =>ReactElement(Object) => HTMLElement(render)
// React Element

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// );

// console.log(heading);


//JSX-HTML-like or XML-like syntax
//JSX(transpiled before it reaches the JS)-Parcel -Babel 

//JSX ==> React.createElement =>> ReactElement-JS Object => HTMLElement(render)

// babel is converting JSX to React.createElementlement
//  TODO: babel doc explore if you want to know more 

// const jsxHeading = <h1 id="heading">Namaste React Using JSX </h1>;

// console.log(jsxHeading);

// root.render(jsxHeading);


//React Component 
//Class Based Compenents-OLD
// Functional Components -NEW


// React Functinal Component 
// ! Both wih return or without return code below are the same 
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component </h1>
// };

// const HEadingComponent = ()=> <h1>Namaste React Functional Component</h1>


//! how to render Title component inside functional component 
// const Title = () => (
//     <h1>
//         Namste React using JSX :-)
//     </h1>
// )

// const HeadingComponent = () => (
//     <div id="container">
//         <Title/>        // * Component Composition-component inside other component 
//         <h1 className="heading">
//             Namaste React Functional COmponent 

//         </h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

//!How to render react element title inside fucntional component or simply a component
//! also how to render react element inside the react element 

const elem = <span>coll react elemnt to be rendered inside other react elemnt </span>



const title = (                         //this is a react element
        <h1>
            {elem}
            Namste React using JSX :-)
        </h1>
    )
    
    const HeadingComponent = () => (   // this is react functional component 
        <div id="container">
            {title}       
            <h1 className="heading">
                Namaste React Functional COmponent 
    
            </h1>
        </div>
    )
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<HeadingComponent/>);

    //!   {Title()}   or   <Title/>  or <Title></Title>  all the three are same thing (calling components ways)
    //!  JSX CAN have only one parent element ex=-

    // (
    //     <div></div>
    //     <div></div>          //!not allowed two container or parents they should be wrapped inside only one root parent 

    // )

    //! solution to above singleparent thing is React Fragments 

    // ? React Fragments- behaves like an empty tag 

    // <React.Fragment>

    //     <div></div>
    //     <div></div>

    // </React.Fragment>

    //! <React.Fragment></React.Fragment>  or <></>   both are the same 

    //! can i have react fragment inside react fragment -FInd out ?

    //! can we have multiple roots or not -FIND OUT ?