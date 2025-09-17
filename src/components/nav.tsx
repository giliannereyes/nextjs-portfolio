"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About me", href: "/about" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-20">
      <div className="flex justify-center py-6">
        <ul className="flex items-center gap-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-large duration-300 ${
                    isActive
                      ? "text-zinc-300" // active = highlighted
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
