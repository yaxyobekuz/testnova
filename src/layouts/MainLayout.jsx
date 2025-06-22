// Router
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* main */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
