import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";

const WebSearchPage = async ({ searchParams }) => {
    // For loading effect
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    const startIndex = searchParams.start || "1";
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
    );
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    const results = data.items;

    if (!results) {
        return (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">
                    No results found for{" "}
                    <span className="text-red-500">
                        {searchParams.searchTerm}
                    </span>
                </h1>
                <p className="text-lg">
                    Try searching the web or images for something else{" "}
                    <Link href="/" className="text-blue-500">
                        Home
                    </Link>
                </p>
            </div>
        );
    }
    return <div>{results && <WebSearchResults results={data} />}</div>;
};

export default WebSearchPage;
