import { useEffect } from "react";

// Router
import { Outlet, useLocation } from "react-router-dom";

// Components
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* main */}
      <main className="">
        <Outlet />
      </main>

      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
