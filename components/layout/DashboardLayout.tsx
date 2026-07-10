import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col text-[var(--ink)] md:flex-row">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <Header />

        <div className="px-4 pb-28 pt-4 sm:px-5 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
