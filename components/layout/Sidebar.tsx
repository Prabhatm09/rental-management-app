"use client";

import NavigationLink from "./NavigationLink";
import { usePathname } from "next/navigation";
import {
  Building2,
  DoorOpen,
  Home,
  IndianRupee,
  ReceiptIndianRupee,
  Users,
} from "lucide-react";

const menus = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Properties", href: "/properties", icon: Building2 },
  { name: "Tenants", href: "/tenants", icon: Users },
  { name: "Bills", href: "/bills", icon: ReceiptIndianRupee },
  { name: "Payments", href: "/payments", icon: IndianRupee },
  { name: "Units", href: "/rental-units", icon: DoorOpen },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="sticky top-0 z-30 hidden h-screen w-64 shrink-0 border-r border-[var(--line)] bg-[var(--surface)] p-4 backdrop-blur-xl md:flex md:flex-col">
        <div className="mb-7 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-[12px] bg-[var(--accent)] text-base font-black text-white shadow-[0_0_24px_var(--accent-glow)]">
            R
          </div>
          <div>
            <h1 className="text-xl font-black tracking-normal text-[var(--ink)]">
              RentalMS
            </h1>
            <p className="text-[11px] font-semibold uppercase text-[var(--muted)]">
              Billing Studio
            </p>
          </div>
        </div>

        <div className="mb-5 h-px bg-[var(--line)]" />

        <div className="mb-5 grid grid-cols-[1fr_44px] gap-2">
          <div className="h-1.5 rounded-full bg-[var(--accent)]" />
          <div className="h-1.5 rounded-full bg-[var(--charge)]" />
        </div>

        <nav className="space-y-2">
          {menus.map((menu) => (
            <NavigationLink
              key={`${pathname}-${menu.href}`}
              href={menu.href}
              icon={menu.icon}
            >
              {menu.name}
            </NavigationLink>
          ))}
        </nav>
      </aside>

      <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-6 gap-1 rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-1.5 shadow-[var(--app-shadow)] backdrop-blur-xl md:hidden">
        {menus.map((menu) => (
          <NavigationLink
            key={`${pathname}-${menu.href}`}
            href={menu.href}
            icon={menu.icon}
            compact
          >
            {menu.name}
          </NavigationLink>
        ))}
      </nav>
    </>
  );
}
