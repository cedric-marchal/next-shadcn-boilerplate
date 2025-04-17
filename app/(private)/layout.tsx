// app/(private)/layout.tsx

import { PropsWithChildren } from "react";

export default function PrivateLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
