import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Icons
import arrowTopRightIcon from "../../assets/icons/outline/arrow-top-right-primary.svg";

const CategoryItem = ({ name, description, icon, background, link }) => {
  return (
    <li
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
  );
};

export default CategoryItem;
