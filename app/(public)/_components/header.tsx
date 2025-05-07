import { env } from "@/src/lib/env";
import { cn } from "@/src/lib/utils";

import { ModeToggle } from "@/src/components/mode-toggle";

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
      <nav>
        <ul className="flex items-center justify-between gap-4">
          {navLinks.map((link, index) => (
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
      </nav>
      <ModeToggle />
    </header>
  );
};

/* Ajoute ceci dans ton CSS global (ex: globals.css) :

@layer utilities {
  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-down {
    animation: fade-in-down 0.3s both;
  }
}
*/
