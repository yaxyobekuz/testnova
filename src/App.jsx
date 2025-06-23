import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Page404 from "./pages/Page404";
import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import Categories from "./pages/Categories";

// Layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="bolimlar" element={<Categories />} />
        <Route path="bolimlar/:categoryLink" element={<Category />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
