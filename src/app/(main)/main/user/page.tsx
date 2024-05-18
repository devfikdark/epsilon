import { PlusCircle } from "lucide-react";

import HeaderTitle from "@/components/header-title";
import { UserList } from "./_components/user-list";
import { Button } from "@/components/ui/button";

const UserPage = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <HeaderTitle>User List</HeaderTitle>
      <div className="f-end my-4">
        <Button className="gap-1.5">
          <PlusCircle className="size-4" /> New User
        </Button>
      </div>
      <UserList />
    </div>
  );
};

export default UserPage;
