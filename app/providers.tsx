import type { PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/sonner";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
