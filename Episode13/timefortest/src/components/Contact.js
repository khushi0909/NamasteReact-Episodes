
import React from "react";
import { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setMessage(true);
        
    }

    return(
        <div className=" "> 
            <h1 className=" flex flex-col sm:w-2/4 m-auto font-bold text-3xl p-4  ">Contact Us Page</h1>
            <form className="flex flex-col sm:w-2/4 m-auto" onSubmit={handleClick}>
                <input 
                type="text"
                className="border border-black p-2 m-2"
                placeholder="Name" 
                required />
                
                <input type="email"
                 className="border border-black p-2 m-2"
                placeholder="Email"
                required/>

                <input
                type="text"
                className="border border-black p-2 m-2"
                placeholder="Message"
                required
                />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg"  type="submit">Submit</button>
                {message && <span>Thanks for contacting YumyFood, We will reply ASAP.</span>}
            </form>
        </div>
    )
}

export default Contact;