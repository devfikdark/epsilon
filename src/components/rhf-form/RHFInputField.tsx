import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type RHFInputFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;
  optional?: boolean;
};

const RHFInputField = ({ name, label, placeholder, type, required, optional, ...others }: RHFInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-red-500">*</span>}
            {optional && <span className="text-gray-500">&nbsp;(optional)</span>}
          </FormLabel>
          <FormControl>
            <Input type={type} {...field} {...others} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFInputField;
