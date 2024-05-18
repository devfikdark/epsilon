import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggler";
import { Button } from "@/components/ui/button";

const TopNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <span className="text-lg font-medium">Epsilon</span>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <Button asChild>
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
