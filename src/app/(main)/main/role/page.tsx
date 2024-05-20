import { Metadata } from "next";
import RoleSection from "./_components/role-section";
import HeaderTitle from "@/components/header-title";

export const metadata: Metadata = {
  title: "Role List",
};

const Role = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <HeaderTitle>Role List</HeaderTitle>
      <RoleSection />
    </div>
  );
};

export default Role;
