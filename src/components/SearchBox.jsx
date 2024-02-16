"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams,useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get("searchTerm");
    const [term, setTerm] = useState(searchTerm || "");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
            <input
                type="text"
                className="w-full focus:outline-none"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <RxCross2
                className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
                onClick={() => setTerm("")}
            />
            <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2  border-gray-300 mr-3 pl-4" />
            <AiOutlineSearch
                className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
                onClick={handleSubmit}
            />
        </form>
    );
};

export default SearchBox;
