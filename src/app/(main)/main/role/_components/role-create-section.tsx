"use client";

import FormProvider from "@/components/rhf-form/FormProvider";
import RHFInputField from "@/components/rhf-form/RHFInputField";
import { Button } from "@/components/ui/button";
import { RoleSchema } from "@/lib/schema-validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RoleCreateSection = () => {
  const router = useRouter();
  type TRolesSchema = z.infer<typeof RoleSchema>;

  const methods = useForm<TRolesSchema>({
    resolver: zodResolver(RoleSchema),
    defaultValues: {
      name: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TRolesSchema) => {
    console.log("form submitted", data);
    router.push("/main/user");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <RHFInputField name="name" label="name" />
      </div>

      <Button className="mt-8" type="submit">
        Create Role
      </Button>
    </FormProvider>
  );
};

export default RoleCreateSection;
