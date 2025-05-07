import { env } from "@/src/lib/env";
import { cn } from "@/src/lib/utils";

import { ModeToggle } from "@/src/components/mode-toggle";
import { MobileMenu } from "./mobile-menu";

import Image from "next/image";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

export const Header = () => {
  const navLinks: NavLink[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sign in",
      href: "/sign-in",
    },
    {
      label: "Sign up",
      href: "/sign-up",
    },
  ];

  return (
    <header className="bg-background mx-4 flex items-center justify-between border-b">
      <div>
        <Link href="/" className="flex py-4">
          <Image
            src="/images/logo-app-name.png"
            alt={`${env.NEXT_PUBLIC_APP_NAME} Logo`}
            width={40}
            height={40}
          />
        </Link>
      </div>

      <MobileMenu navLinks={navLinks} />

      <nav className="hidden justify-end md:flex">
        <ul className="mr-6 flex items-center justify-between gap-4">
          {navLinks.map((link: NavLink, index: number) => (
            <li key={link.href}>
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground group relative text-sm font-medium transition-colors",
                  "animate-fade-in-down translate-y-[-10px] opacity-0",
                )}
                style={{ animationDelay: `${100 + index * 75}ms` }}
              >
                {link.label}
                <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
};
