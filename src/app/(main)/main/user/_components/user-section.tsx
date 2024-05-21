"use client";

import { PlusCircle } from "lucide-react";
import { ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import UserList from "./user-list";
import UserModal from "./user-modal";
import { useSearch } from "@/hooks/use-search";
import SearchInput from "@/components/search-input";

const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    accountCreated: "2023-05-01",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "123-456-7891",
    accountCreated: "2023-05-02",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "123-456-7892",
    accountCreated: "2023-05-03",
  },
  {
    name: "Diana Martinez",
    email: "diana.martinez@example.com",
    phone: "123-456-7893",
    accountCreated: "2023-05-04",
  },
  {
    name: "Evan Wilson",
    email: "evan.wilson@example.com",
    phone: "123-456-7894",
    accountCreated: "2023-05-05",
  },
  {
    name: "Fiona Brown",
    email: "fiona.brown@example.com",
    phone: "123-456-7895",
    accountCreated: "2023-05-06",
  },
  {
    name: "George Clark",
    email: "george.clark@example.com",
    phone: "123-456-7896",
    accountCreated: "2023-05-07",
  },
  {
    name: "Hannah Lewis",
    email: "hannah.lewis@example.com",
    phone: "123-456-7897",
    accountCreated: "2023-05-08",
  },
  {
    name: "Ian Walker",
    email: "ian.walker@example.com",
    phone: "123-456-7898",
    accountCreated: "2023-05-09",
  },
  {
    name: "Julia Hall",
    email: "julia.hall@example.com",
    phone: "123-456-7899",
    accountCreated: "2023-05-10",
  },
];

const UserSection = () => {
  const [userModal, setUserModal] = useState({ isOpen: false, isEdit: false, data: null });
  const [searchValue, setSearchValue] = useState("");

  const onModalClose = () => {
    setUserModal({ isOpen: false, isEdit: false, data: null });
  };

  const { filteredData } = useSearch({ retrieve: users, searchValue });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center flex-wrap my-4">
        <SearchInput onChange={handleSearch} placeholder="Search user" />
        <Button className="gap-1.5" onClick={() => setUserModal({ isOpen: true, isEdit: false, data: null })}>
          <PlusCircle className="size-3.5" /> New User
        </Button>
      </div>
      <UserList data={filteredData} />
      <UserModal open={userModal.isOpen} onClose={onModalClose} onSubmit={() => {}} />
    </>
  );
};

export default UserSection;
