import { env } from "@/src/lib/env";

import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/src/components/mode-toggle";
import { BotIcon, HomeIcon, MailIcon } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const Header = () => {
  const navLinks: NavLink[] = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      label: "About",
      href: "/about",
      icon: <BotIcon />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <MailIcon />,
    },
  ];

  return (
    <header className="bg-background mx-4 flex items-center justify-between border-b">
      <div>
        <Link href="/" className="flex py-4">
          <Image
            src="/images/logo-app-name.png"
            alt={`${env.NEXT_PUBLIC_APP_NAME} Logo`}
            width={50}
            height={50}
          />
        </Link>
      </div>
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-4">
          {navLinks.map((link: NavLink) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium"
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ModeToggle />
    </header>
  );
};
