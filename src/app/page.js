// Home Page
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

const page = () => {
    return (
        <>
            <HomeHeader />
            <div className="flex flex-col mt-24 items-center">
                <Image
                    src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    }
                    style={{ width: "auto"}}
                    width={300}
                    height={100}
                    alt="Google"
                    priority
                    as="div"
                />
            <HomeSearch />
            </div>
        </>
    );
};

export default page;
