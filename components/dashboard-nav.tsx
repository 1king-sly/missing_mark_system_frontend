"use client";

import { cn } from "@/lib/utils";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  School,
  Users,
  Building2,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = {
  admin: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      title: "Schools",
      icon: School,
      href: "/admin/schools",
    },
    {
      title: "Users",
      icon: Users,
      href: "/admin/users",
    },
    {
      title: "Courses",
      icon: BookOpen,
      href: "/admin/courses",
    },
  ],
  dean: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dean",
    },
    {
      title: "Departments",
      icon: Building2,
      href: "/dean/departments",
    },
    {
      title: "Courses",
      icon: BookOpen,
      href: "/dean/courses",
    },
    {
      title: "Missing Marks",
      icon: FileSpreadsheet,
      href: "/dean/missing-marks",
    },
  ],
  lecturer: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/lecturer",
    },
    {
      title: "My Courses",
      icon: BookOpen,
      href: "/lecturer/courses",
    },
    {
      title: "Missing Marks",
      icon: FileSpreadsheet,
      href: "/lecturer/missing-marks",
    },
  ],
  student: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/student",
    },
    {
      title: "My Courses",
      icon: BookOpen,
      href: "/student/courses",
    },
    {
      title: "Report Missing Mark",
      icon: FileSpreadsheet,
      href: "/student/report",
    },
  ],
};

export function DashboardNav() {
  const pathname = usePathname();
  // This should be dynamic based on user role from auth context
  const userRole = pathname.includes("/admin")
    ? "admin"
    : pathname.includes("/dean")
    ? "dean"
    : pathname.includes("/lecturer")
    ? "lecturer"
    : "student";

  const currentRoutes = routes[userRole as keyof typeof routes];

  return (
    <nav className="w-64 border-r bg-card min-h-screen p-4 space-y-4">
      <div className="flex items-center gap-2 px-2 mb-8">
        <GraduationCap className="h-6 w-6" />
        <span className="font-semibold">Missing Mark System</span>
      </div>
      <div className="space-y-1">
        {currentRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              pathname === route.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <route.icon className="h-4 w-4" />
            {route.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}