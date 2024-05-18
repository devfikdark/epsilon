import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "./_components/sign-in-form";

const SignIn = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default SignIn;
