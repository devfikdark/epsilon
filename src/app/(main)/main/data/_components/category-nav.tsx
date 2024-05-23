"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const examples = [
  {
    name: "Accounting",
    href: "/examples/mail",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail",
  },
  {
    name: "Agriculture",
    href: "/examples/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard",
  },
  {
    name: "Airline",
    href: "/examples/cards",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/cards",
  },
  {
    name: "Alternate",
    href: "/examples/tasks",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks",
  },
  {
    name: "Alternative",
    href: "/examples/playground",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground",
  },
  {
    name: "Animation",
    href: "/examples/forms",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms",
  },
  {
    name: "Fashion",
    href: "/examples/music",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music",
  },
  {
    name: "Planning",
    href: "/examples/authentication",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication",
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CategoryNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative flex justify-center items-center">
      <ScrollArea className="max-w-[600px] lg:max-w-[1200px]">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) || (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}>
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
