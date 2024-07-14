import { DashboardNavbar } from "./_components/dashboard-navbar";
import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>
        <DashboardNavbar />
      </div>
      <div>
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
