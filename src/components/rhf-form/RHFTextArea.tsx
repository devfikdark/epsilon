import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

type RHFInputFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
};

const RHFTextAreaField = ({ name, label, placeholder, required, optional }: RHFInputFieldProps) => {
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
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextAreaField;
