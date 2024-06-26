import { ReactNode } from "react";

import Sidebar from "./_components/sidebar";
import Account from "./_components/account";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar />
      <div className="flex flex-col">
        <div className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <div className="w-full flex justify-between">
            <h1 className="text-xl font-semibold">Epsilon</h1>
            <Account />
          </div>
        </div>
        <section className="flex-1 overflow-auto p-4">{children}</section>
      </div>
    </div>
  );
};

export default MainLayout;
