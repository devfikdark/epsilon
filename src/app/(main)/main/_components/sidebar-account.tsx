"use client";

import { CircleUserRound } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidebarAccount = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div title="Account" className="mt-auto rounded-lg p-2" aria-label="Account" role="button">
            <CircleUserRound className="size-5" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SidebarAccount;
