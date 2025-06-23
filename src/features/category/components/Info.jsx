import { useParams } from "react-router-dom";

// Data
import categories from "../../../data/categories";

// Components
import Icon from "../../../components/common/Icon";

const Info = () => {
  const { categoryLink } = useParams();
  const category = categories.find(({ link }) => link === categoryLink);

  return (
    <div className="py-10">
      <div className="flex items-end justify-between gap-1 container">
        {/* Main content */}
        <div className="">
          {/* Title */}
          <h1 className="mb-8">
            <span className="text-primary-500">{category.name}</span>
            <span> bo'yicha testlar</span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl text-lg text-neutral-500">
            {category.longDescription}
          </p>
        </div>

        {/* Category icon */}
        <Icon
          size={64}
          src={category.icon}
          alt={category.name}
          className="shrink-0 size-16 bg-white rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Info;
