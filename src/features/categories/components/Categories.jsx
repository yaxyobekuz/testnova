// Data
import categories from "../../../data/categories";

// Icons
import CategoryItem from "../../../components/common/CategoryItem";

const Categories = () => {
  return (
    <div className="pt-10 pb-20 bg-gradient-to-b from-transparent to-white">
      <div className="container">
        {/* Title */}
        <h1 className="mb-8">Bo'limlar</h1>

        {/* List */}
        <ul className="grid grid-cols-2 gap-5 mb-8">
          {categories.map((category, index) => (
            <CategoryItem key={index} {...category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
