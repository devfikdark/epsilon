import { ReactNode } from "react";

import Sidebar from "./_components/sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Epsilon</h1>
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
