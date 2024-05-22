import HeaderTitle from "@/components/header-title";
import { Metadata } from "next";
import RoleCreateSection from "../_components/role-create-section";

export const metadata: Metadata = {
  title: "Create Role",
};

const CreateRole = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <HeaderTitle>Create New Role</HeaderTitle>
      <RoleCreateSection />
    </div>
  );
};

export default CreateRole;
