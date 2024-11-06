"use client";

import { eq } from "drizzle-orm";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardSideNavbar from "@/components/DashboardSideNavbar";
import DashboardHeader from "@/components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    checkUserBudgets();
  }, []);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress));

    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar with increased width */}
      <div className="fixed top-0 left-0 md:w-72 md:block hidden w-full h-screen bg-white shadow-lg z-10">
        <DashboardSideNavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-72">
        <DashboardHeader />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
