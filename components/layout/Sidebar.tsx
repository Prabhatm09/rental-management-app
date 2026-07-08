"use client";

import NavigationLink from "./NavigationLink";
import { usePathname } from "next/navigation";
import {
  Building2,
  DoorOpen,
  Home,
  ReceiptIndianRupee,
  Users,
} from "lucide-react";

const menus = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Properties", href: "/properties", icon: Building2 },
  { name: "Tenants", href: "/tenants", icon: Users },
  { name: "Bills", href: "/bills", icon: ReceiptIndianRupee },
  { name: "Units", href: "/rental-units", icon: DoorOpen },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="sticky top-0 z-30 hidden h-screen w-72 shrink-0 border-r border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] p-5 shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl md:flex md:flex-col">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid size-11 place-items-center bg-[#2563EB] text-lg font-black text-white">
            R
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-normal text-slate-950">
              RentalMS
            </h1>
            <p className="text-xs font-semibold uppercase text-slate-500">
              Billing Studio
            </p>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-[1fr_48px] gap-2">
          <div className="h-3 bg-[#EF4444]" />
          <div className="h-3 rounded-full bg-[#F7C948]" />
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

      <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 gap-1 rounded-[24px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.92)] p-2 shadow-[0_18px_48px_oklch(38%_0.12_252/16%)] backdrop-blur-xl md:hidden">
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
