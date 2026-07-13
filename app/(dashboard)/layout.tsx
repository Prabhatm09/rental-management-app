import DashboardLayout from "@/components/layout/DashboardLayout";
import { requireOwner } from "@/lib/owner";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const owner = await requireOwner();

  return (
    <DashboardLayout owner={owner}>{children}</DashboardLayout>
  );
}
