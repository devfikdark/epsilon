"use client";

import { PlusCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import RoleList from "./role-list";

const RoleSection = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap my-4">
        <SearchInput onChange={() => {}} placeholder="Search role" />
        <Link href="/main/role/create">
          <Button className="gap-1.5">
            <PlusCircle className="size-4" /> New Role
          </Button>
        </Link>
      </div>
      <RoleList data={[]} />
    </div>
  );
};

export default RoleSection;
