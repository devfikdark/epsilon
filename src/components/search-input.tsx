import { Input } from "./ui/input";

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput = ({ onChange, placeholder = "Search..." }: SearchInputProps) => {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      className="w-full appearance-none bg-background shadow-none lg:w-80"
      onChange={onChange}
    />
  );
};

export default SearchInput;
