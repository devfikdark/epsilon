import { CircleUserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

const SidebarAccount = () => {
  return (
    <Button title="Account" variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Account">
      <CircleUserRound className="size-5" />
    </Button>
  );
};

export default SidebarAccount;
