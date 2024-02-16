"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

const SearchHeaderOptions = () => {
    // helps to navigate to different pages
    const router = useRouter();

    // helps to get the current path from the URL
    const pathname = usePathname();

    // helps to get the search term from the URL
    const searchParam = useSearchParams();
    const searchTerm = searchParam.get("searchTerm");

    const selectTab = (tab) => {
        router.push(
            `/search/${
                tab === "Images" ? "image" : "web"
            }?searchTerm=${searchTerm}`
        );
    };

    return (
        <div className="flex space-x-2 items-center select-none border-b justify-center w-full lg:justify-start lg:pl-52 text-sm">
            <div onClick={() => selectTab('All')} className={`cursor-pointer flex items-center space-x-1 border-b-4 border-transparent active:border-blue-500 pb-3 px-2 ${pathname === '/search/web' && '!text-blue-500 !border-blue-500'}`}>
                <AiOutlineSearch />
                <p>All</p>
            </div>
            <div onClick={() => selectTab('Images')} className={`cursor-pointer flex items-center space-x-1 border-b-4 border-transparent active:border-blue-500 pb-3 px-2 ${pathname === '/search/image' && '!text-blue-500 !border-blue-500'}`}>
                <AiOutlineCamera />
                <p>Images</p>
            </div>
        </div>
    );
};

export default SearchHeaderOptions;
