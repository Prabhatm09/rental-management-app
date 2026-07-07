"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Properties", href: "/properties" },
  { name: "Tenants", href: "/tenants" },
  { name: "Bills", href: "/bills" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold">🏠 RentalMS</h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={`block rounded-xl px-4 py-3 transition ${
              pathname === menu.href
                ? "bg-indigo-600 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}