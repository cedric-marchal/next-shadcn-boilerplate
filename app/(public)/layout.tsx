import type { PropsWithChildren } from "react";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
