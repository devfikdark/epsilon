"use client";

import { PlusCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { UserList } from "./user-list";
import UserModal from "./user-modal";

const CreateUser = () => {
  const [userModal, setUserModal] = useState({ isOpen: false, isEdit: false, data: null });

  const onModalClose = () => {
    setUserModal({ isOpen: false, isEdit: false, data: null });
  };

  return (
    <>
      <div className="f-end my-4">
        <Button className="gap-1.5 h-8" onClick={() => setUserModal({ isOpen: true, isEdit: false, data: null })}>
          <PlusCircle className="size-3.5" /> New User
        </Button>
      </div>
      <UserList />
      <UserModal open={userModal.isOpen} onClose={onModalClose} onSubmit={() => {}} />
    </>
  );
};

export default CreateUser;
