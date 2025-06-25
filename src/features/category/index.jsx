// Components
import Info from "./components/Info";
import Tests from "./components/Tests";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const CategoriesFeature = () => {
  return (
    <>
      <Header />
      <main>
        <Info />
        <Tests />
      </main>
      <Footer />
    </>
  );
};

export default CategoriesFeature;
