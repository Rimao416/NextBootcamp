"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link href={link.href} className={isActive ? "active text-red-500" : ""}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
