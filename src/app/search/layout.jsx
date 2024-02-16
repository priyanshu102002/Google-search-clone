import SearchHeader from "@/components/SearchHeader";

const layout = ({ children }) => {
    return (
        <div>
            <SearchHeader />
            {children}
        </div>
    );
};

export default layout;
