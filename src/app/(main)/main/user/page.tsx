import HeaderTitle from "@/components/header-title";
import { UserList } from "./_components/user-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const UserPage = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      <HeaderTitle>User List</HeaderTitle>
      <div className="f-end">
        <Button className="gap-1.5">
          <PlusCircle className="size-4" /> Create New User
        </Button>
      </div>
      <UserList />
    </div>
  );
};

export default UserPage;
