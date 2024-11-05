import DashboardHeader from "@/components/DashboardHeader";
import DashboardSideNavbar from "@/components/DashboardSideNavbar";

const DashboardLayout = ({ children }) => {
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
