import { useParams } from "react-router-dom";

// Data
import categories from "../../../data/categories";

// Components
import Icon from "../../../components/common/Icon";

const Info = () => {
  const { categoryLink } = useParams();
  const category = categories.find(({ link }) => link === categoryLink);

  return (
    <div className="py-8 md:py-10">
      <div className="flex items-end justify-between gap-1 container">
        {/* Main content */}
        <div>
          <div className="flex items-center justify-between gap-1.5 mb-6 sm:mb-8">
            {/* Title */}
            <h1>
              <span className="text-primary-500">{category.name}</span>
              <span> bo'yicha testlar</span>
            </h1>

            {/* MObile category icon */}
            <Icon
              size={48}
              src={category.icon}
              alt={category.name}
              className="shrink-0 size-12 bg-white rounded-2xl sm:hidden"
            />
          </div>

          {/* Description */}
          <p className="max-w-3xl text-neutral-500 xs:text-lg">
            {category.longDescription}
          </p>
        </div>

        {/* Desktope category icon */}
        <Icon
          size={64}
          src={category.icon}
          alt={category.name}
          className="hidden shrink-0 size-16 bg-white rounded-2xl sm:inline-block"
        />
      </div>
    </div>
  );
};

export default Info;
