import { CourseContentSidebar } from "@/app/(dashboard)/_components/course-content-sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default function FrenchVideoCourse() {
  const user = currentUser();
  return (
    <div>
      <h1>Hello User</h1>
    </div>
  );
}
