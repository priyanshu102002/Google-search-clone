import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
    return (
        <header className="bg-red-200 flex justify-end p-5 text-sm">
            <div className="flex space-x-4 items-center">
                <Link
                    className="hover:underline"
                    href={"https://mail.google.com/mail/"}
                >
                    Gmail
                </Link>
                <Link
                    className="hover:underline"
                    href={"https://www.google.com/imghp?hl=en&authuser=0&ogbl"}
                >
                    Images
                </Link>
                <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer" />
                <button className="bg-blue-500 font-medium px-6 py-2 hover:bg-blue-600 text-white rounded-md">Sign In</button>
            </div>
        </header>
    );
};

export default HomeHeader;
