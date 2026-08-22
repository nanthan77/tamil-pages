import type { Metadata } from "next";
import AdminSecurityGuard from "@/components/AdminSecurityGuard";
import AdminAlertsDashboard from "@/components/admin/AdminAlertsDashboard";

export const metadata: Metadata = {
  title: "Alerts admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <AdminSecurityGuard>
      <AdminAlertsDashboard />
    </AdminSecurityGuard>
  );
}
