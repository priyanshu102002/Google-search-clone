import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex justify-between p-6 items-center w-full">
                <Link href="/">
                    <Image
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                        }
                        style={{ width: "auto" }}
                        width={120}
                        height={40}
                        alt="Google"
                        priority
                    />
                </Link>
                <div className="flex-1">
                    <SearchBox />
                </div>
                <div className="hidden md:inline-flex space-x-2">
                    <RiSettings3Line className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer"/>
                    <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer"/>
                </div>
                <button className="bg-blue-500 font-medium px-6 py-2 hover:bg-blue-600 text-white ml-2 rounded-md">
                    Sign In
                </button>
            </div>
            <SearchHeaderOptions />
        </header>
    );
};

export default SearchHeader;
