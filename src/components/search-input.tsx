import { Input } from "./ui/input";

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <Input
      type="search"
      placeholder="Search products..."
      className="w-full appearance-none bg-background shadow-none lg:w-80"
      onChange={onChange}
    />
  );
};

export default SearchInput;
