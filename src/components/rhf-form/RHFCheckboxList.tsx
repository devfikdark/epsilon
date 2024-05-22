import { useFormContext } from "react-hook-form";

import { Checkbox } from "../ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Accesses } from "@/lib/constant";

type RHFCheckboxListProps = {
  name: string;
};

const RHFCheckboxList = ({ name }: RHFCheckboxListProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">Accesses</FormLabel>
            <FormDescription>Select any item from below for access.</FormDescription>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Accesses.map((item) => (
              <FormField
                key={item.id}
                control={control}
                name="items"
                render={({ field }) => {
                  return (
                    <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(field.value?.filter((value: any) => value !== item.id));
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{item.label}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFCheckboxList;
