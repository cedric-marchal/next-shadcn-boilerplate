import { Toaster } from "@/components/ui/sonner";

import type { ReactNode } from "react";

export const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
