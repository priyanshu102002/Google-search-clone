"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
    const [country, setCountry] = useState("India");
    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();
            console.log(data);
            setCountry(data.country_name);
        };
        getCountry();
    }, []);
    return <div className="border-b-2 py-3 px-8">{country}</div>;
};

export default CountryLookup;
