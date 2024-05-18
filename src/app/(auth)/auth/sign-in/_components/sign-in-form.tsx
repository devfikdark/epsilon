"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import FormProvider from "@/components/rhf-form/FormProvider";
import RHFInputField from "@/components/rhf-form/RHFInputField";
import { Button } from "@/components/ui/button";
import { SignInSchema } from "@/lib/schema-validations";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  const router = useRouter();
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
    router.push("/main/user");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <RHFInputField name="email" label="Email" />
        <RHFInputField name="password" label="Password" type="password" />
      </div>

      <Button className="w-full mt-8" type="submit">
        Sign In
      </Button>
    </FormProvider>
  );
};

export default SignInForm;
