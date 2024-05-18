import { Metadata } from "next";

import HeaderTitle from "@/components/header-title";
import UserSection from "./_components/user-section";

export const metadata: Metadata = {
  title: "User List",
};

const UserPage = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <HeaderTitle>User List</HeaderTitle>
      <UserSection />
    </div>
  );
};

export default UserPage;
