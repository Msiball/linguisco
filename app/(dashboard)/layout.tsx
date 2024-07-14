import { DashboardNavbar } from "./_components/dashboard-navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <DashboardNavbar />
      <div className="h-[80px] fixed inset-y-0 w-full z-50"></div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
