"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormProvider from "@/components/rhf-form/FormProvider";
import RHFCheckboxList from "@/components/rhf-form/RHFCheckboxList";
import RHFInputField from "@/components/rhf-form/RHFInputField";
import RHFTextAreaField from "@/components/rhf-form/RHFTextArea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RoleSchema } from "@/lib/schema-validations";
import { Label } from "@/components/ui/label";

const RoleCreateSection = () => {
  const router = useRouter();
  type TRolesSchema = z.infer<typeof RoleSchema>;

  const methods = useForm<TRolesSchema>({
    resolver: zodResolver(RoleSchema),
    defaultValues: {
      name: "",
      description: "",
      items: [],
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TRolesSchema) => {
    console.log("form submitted", data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <RHFInputField name="name" label="Role Name" />
        <RHFTextAreaField name="description" label="Description" optional />
        <RHFCheckboxList name="items" />
        <div className="space-y-4">
          <Label htmlFor="range">Data Range</Label>
          <Slider id="range" defaultValue={[0]} max={10000} step={1000} />
        </div>
      </div>

      <Button className="mt-8 float-right" type="submit">
        Create Role
      </Button>
    </FormProvider>
  );
};

export default RoleCreateSection;
