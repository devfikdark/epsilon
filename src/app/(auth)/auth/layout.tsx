import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="container h-screen flex justify-center items-center">{children}</main>;
};

export default AuthLayout;
