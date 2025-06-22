import { Link } from "react-router-dom";

// Data
import categories from "../../../data/categories";

// Components
import Icon from "../../../components/common/Icon";

// Icons
import arrowTopRightIcon from "../../../assets/icons/outline/arrow-top-right-primary.svg";

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-white">
      <div className="container">
        {/* Top */}
        <div className="flex items-center justify-between mb-8">
          <h2>Bo'limlar</h2>

          <Link to="/bolimlar" className="btn-outline">
            Barcha bo'limlar
          </Link>
        </div>

        {/* List */}
        <ul className="grid grid-cols-2 gap-5 mb-8">
          {categories
            .slice(0, 8)
            .map(({ name, description, icon, background, link }, index) => (
              <li
                key={index}
                className={`${background} flex items-center gap-3.5 relative p-5 rounded-2xl group`}
              >
                {/* Icon */}
                <Icon
                  size={56}
                  src={icon}
                  alt={name}
                  className="size-14 bg-neutral-50 rounded-lg"
                />

                {/* Info */}
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-neutral-500 mt-1.5">{description}</p>
                </div>

                {/* Top right icon */}
                <Icon
                  alt="Yuqoriga o'ngga"
                  src={arrowTopRightIcon}
                  className="absolute top-5 right-5 opacity-0 translate-y-1 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                />

                {/* Link */}
                <Link
                  title={name}
                  aria-label={name}
                  to={`/bolimlar/${link}`}
                  className="absolute inset-0 size-full rounded-2xl"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
