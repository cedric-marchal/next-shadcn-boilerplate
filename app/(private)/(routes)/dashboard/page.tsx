// app/(private)/(routes)/dashboard/page.tsx

import { env } from "@/lib/env";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard | ${env.NEXT_PUBLIC_APP_NAME}`,
};

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
}
