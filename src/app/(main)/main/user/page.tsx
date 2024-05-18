import { Metadata } from "next";

import HeaderTitle from "@/components/header-title";
import CreateUser from "./_components/create-user";

export const metadata: Metadata = {
  title: "User List",
};

const UserPage = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <HeaderTitle>User List</HeaderTitle>
      <CreateUser />
    </div>
  );
};

export default UserPage;
