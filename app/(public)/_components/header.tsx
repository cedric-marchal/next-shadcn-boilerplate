import { env } from "@/lib/env";

import Image from "next/image";
import Link from "next/link";

import { BotIcon, HomeIcon, MailIcon } from "lucide-react";

export const Header = () => {
  const navLinks = [
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
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt={`${env.NEXT_PUBLIC_APP_NAME} Logo`}
          width={100}
          height={100}
        />
      </div>
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-4">
          {navLinks.map(
            (link: { label: string; href: string; icon: React.ReactNode }) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </header>
  );
};
