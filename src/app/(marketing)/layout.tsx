import { ReactNode } from "react";

import TopNav from "./_components/top-nav";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen w-full">
      <TopNav />
      {children}
    </main>
  );
};

export default MarketingLayout;
