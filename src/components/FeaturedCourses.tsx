"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { div, p } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gardient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Featured Courses
          </h2>
          <p className="mt-4 font-normal text-base md:text-lg textneuta max-w-lg mx-auto">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center items-center text-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.description}
                </p>
                <div className="justify-center items-center text-center mt-8 mb-2 border rounded-lg inline-block p-2">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-2xl sm:text-xl text-black  dark:text-neutral-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center  ">
        <Link
          href={"courses"}
          className="px—8 py-2 rounded border border-neutral—600 text-neutral-700 bg-white hover:bg-gray-100 transition duration—200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
