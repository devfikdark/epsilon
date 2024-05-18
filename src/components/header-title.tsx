import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const HeaderTitle = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("f-center text-2xl font-bold my-4", className)}>{children}</div>;
};

export default HeaderTitle;
