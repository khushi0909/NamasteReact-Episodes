
import { useRouteError } from "react-router";
import React from "react";

const Error = () => {


    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>
                Opps!!! Something went Wrong !!!1
            </h1>
            <h2>
                {err.status}:{err.statusText}
            </h2>
        </div>
    )
}

export default Error;