import Link from "next/link";

const menus = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Properties", href: "/properties" },
  { title: "Rental Units", href: "/rental-units" },
  { title: "Tenants", href: "/tenants" },
  { title: "Agreements", href: "/agreements" },
  { title: "Bills", href: "/bills" },
  { title: "Payments", href: "/payments" },
];

export default function Sidebar() {
  return (
    <aside className="glass w-52 p-6 flex flex-col m-2">
      <h1 className="text-3xl font-bold mb-10">
        Rental ERP
      </h1>

      <nav className="space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="rounded-xl px-4 py-3 hover:bg-white/10 transition block"
          >
            {menu.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}