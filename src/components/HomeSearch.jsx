"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
    const [input, setInput] = useState("");
    const router = useRouter();
	const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    };

    const randomSearch = async (e) => {
        e.preventDefault();
        try {
			setRandomSearchLoading(true);
            const response = await fetch(
                "https://random-word-api.herokuapp.com/word"
            );
            const data = await response.json();
			if (!data[0].trim()) return;
            router.push(`/search/web?searchTerm=${data[0]}`)
			setRandomSearchLoading(false);
        } catch (error) {
			setRandomSearchLoading(false);
            console.log(`Api not fetched: ${error}`);
        }
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full flex mt-5 mx-auto max-w-[90%] border border-zinc-200 rounded-full px-5 py-3 hover:shadow-md focus:shadow-md sm:max-w-xl lg:max-w-2xl"
            >
                <AiOutlineSearch className="text-xl text-zinc-500" />
                <input
                    type="text"
                    className="flex-grow focus:outline-none"
                    onChange={(e) => setInput(e.target.value)}
                />
                <BsFillMicFill className="text-lg" />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
                <button
                    className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
                    onClick={handleSubmit}
                >
                    Google Search
                </button>
                <button
                    className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
                    onClick={randomSearch}
					disabled={randomSearchLoading}
                >
                    {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
                </button>
            </div>
        </>
    );
};

export default HomeSearch;
