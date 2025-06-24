import { Link } from "react-router-dom";

// Data
import categories from "../../../data/categories";

// Components
import CategoryItem from "../../../components/common/CategoryItem";

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-white xs:py-20">
      <div className="container">
        {/* Top */}
        <div className="flex items-center justify-between mb-8">
          <h2>Bo'limlar</h2>

          <Link to="/bolimlar" className="btn-outline">
            Barcha bo'limlar
          </Link>
        </div>

        {/* List */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {categories.slice(0, 8).map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
