import { DashboardNavbar } from "../../_components/dashboard-navbar";
import { FrenchCourseCard } from "../../_components/french-course-card";

export default function StudentDashboard() {
  return (
    <div className="h-full">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-5">
        <FrenchCourseCard />
      </div>
    </div>
  );
}
