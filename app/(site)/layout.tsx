"use client";

import { Header } from "@/components";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-2 p-2">
      <Header />
      {children}
    </div>
  );
};

export default layout;
