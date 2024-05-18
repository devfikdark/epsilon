import { Triangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import SidebarContents from "./sidebar-contents";

const Sidebar = () => {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r bg-background">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-2 p-2">
        <SidebarContents />
      </nav>
    </aside>
  );
};

export default Sidebar;
