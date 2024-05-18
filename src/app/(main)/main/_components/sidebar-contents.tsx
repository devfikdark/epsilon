"use client";

import { Database, UserRoundCog, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SidebarContents = () => {
  const pathname = usePathname();

  const NAVIGATION = [
    {
      id: "user",
      name: "Users",
      url: "/main/user",
      icon: <UsersRound className="size-5" />,
    },
    {
      id: "role",
      name: "Roles",
      url: "/main/role",
      icon: <UserRoundCog className="size-5" />,
    },
    {
      id: "data",
      name: "Data",
      url: "/main/data",
      icon: <Database className="size-5" />,
    },
  ];

  return NAVIGATION.map((navigation) => (
    <Link href={navigation.url} key={navigation.id}>
      <Button
        title={navigation.name}
        variant="ghost"
        size="icon"
        className={cn("rounded-lg", pathname === navigation.url ? "bg-muted" : "bg-transparent")}
        aria-label={navigation.name}>
        {navigation.icon}
      </Button>
    </Link>
  ));
};

export default SidebarContents;
