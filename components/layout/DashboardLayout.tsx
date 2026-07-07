import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
<div className="flex min-h-screen">
  <Sidebar />

  <main className="flex-1">
    <Header />

    <div className="p-8">
      {children}
    </div>
  </main>
</div>
  );
}