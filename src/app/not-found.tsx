import { Unlink } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <Unlink className="w-20 h-20 text-slate-400" />
      <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
        404 : Page not found
      </span>
      <span className="max-w-xl text-xl font-medium text-center text-textColor">
        The page you are trying to access is not available or it is removed
      </span>
      <Button asChild>
        <Link href="/">Ok Take Me to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
