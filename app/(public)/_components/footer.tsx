// app/(public)/_components/footer.tsx

import { env } from "@/lib/env";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} {env.NEXT_PUBLIC_APP_NAME}
        </p>
      </div>
    </footer>
  );
};
