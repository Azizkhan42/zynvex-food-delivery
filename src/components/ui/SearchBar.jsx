import { Search } from "lucide-react";
import Input from "./Input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <Input
        placeholder="Search restaurants, cuisines..."
        className="pl-12"
      />
    </div>
  );
};

export default SearchBar;