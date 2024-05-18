"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import FormProvider from "@/components/rhf-form/FormProvider";
import RHFInputField from "@/components/rhf-form/RHFInputField";
import { Button } from "@/components/ui/button";
import { SignInSchema } from "@/lib/schema-validations";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  type TSignInSchema = z.infer<typeof SignInSchema>;

  const methods = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TSignInSchema) => {
    console.log("form submitted", data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFInputField name="email" label="Email" />
      <RHFInputField name="password" label="Password" type="password" />

      <Button className="w-full mt-8" type="submit">
        Sign In
      </Button>
    </FormProvider>
  );
};

export default SignInForm;
