import { UserButton } from "@clerk/nextjs";
import { SmallLogo } from "./small-logo";

export const DashboardNavbar = () => {
  return (
    <div className="border-b flex items-center bg-white shadow-sm mx-auto justify-between">
      <div className="w-full flex items-center p-4 justify-between h-auto">
        <div className="flex flex-col">
          <SmallLogo />
        </div>
        <div className="mr-5">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
