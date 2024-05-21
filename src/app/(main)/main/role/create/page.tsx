import { Metadata } from "next";
import RoleCreateSection from "../_components/role-create-section";

export const metadata: Metadata = {
  title: "Create Role",
};

const CreateRole = () => {
  return <RoleCreateSection />;
};

export default CreateRole;
