
import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div",{id:"parent"},[
    "I am parent div",React.createElement("div",{id:"child"},[
    "i am child div", React.createElement("h1",{},"I am h1 tag ")])])



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
console.log(parent) 