"use client";

import { useEffect } from "react";

const Error = ({ error, rest }) => {
    useEffect(
        (error, rest) => {
            console.log("error", error);
            console.log("rest", rest);
        },
        [error]
    );
    return <div className="flex flex-col items-center justify-center pt-10"><h1>Something went wrong!</h1>
    <button className="text-blue-500">Try again</button></div>;
};

export default Error;
