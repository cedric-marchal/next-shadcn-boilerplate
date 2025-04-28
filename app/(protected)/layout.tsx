import { Sidebar } from "./_components/sidebar";

import type { ReactNode } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <Sidebar />
      {children}
    </div>
  );
}
