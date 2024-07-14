"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const FrenchCourseCard = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/course/french/french-video-course");
  };
  return (
    <div
      className="bg-gray-50 border-blue-800 border-2 rounded-md p-2"
      onClick={handleClick}
    >
      <div className="">
        <Image height={500} width={500} alt="Logo" src="/french.jpg" />
      </div>
      <div className="text-2xl mt-1">Name</div>
      <div className="flex items-center gap-1 mt-1">
        <div className="size-5">
          <Image
            height={500}
            width={500}
            alt="cameras"
            src="/device-camera-video.svg"
          />
        </div>
        15 Lessons
      </div>
      <div className="mt-1">Progress bar</div>
    </div>
  );
};
///change the size of the image with preet
