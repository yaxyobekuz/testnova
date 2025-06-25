import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Icons
import arrowTopRightIcon from "../../assets/icons/outline/arrow-top-right-primary.svg";

const TestItem = ({ title, description, icon, count, _id: id }) => {
  return (
    <li className="test-item group">
      <Icon
        size={56}
        src={icon}
        alt={title}
        className="size-12 mb-5 md:size-14"
      />

      <div className="space-y-1.5 mb-5">
        {/* Title */}
        <h3 className="text-xl xs:text-2xl md:text-[28px]">{title}</h3>

        {/* Description */}
        <p className="text-primary-500">{description}</p>
      </div>

      {/* Count */}
      <div className="xs:text-lg">
        <b className="font-semibold">Jami savollar soni: </b>
        <span>{count?.toLocaleString()} ta</span>
      </div>

      {/* Link */}
      <Link
        title={title}
        aria-label={title}
        to={`/test/${id}`}
        className="absolute inset-0 size-full rounded-2xl outline-none peer"
      />

      {/* Top right icon */}
      <Icon
        size={32}
        alt="Yuqoriga o'ngga"
        src={arrowTopRightIcon}
        className="absolute top-5 right-5 size-7 opacity-0 translate-y-1.5 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 peer-focus:opacity-100 peer-focus:translate-y-0 peer-focus:translate-x-0 sm:size-8 sm:top-8 sm:right-8"
      />
    </li>
  );
};

export default TestItem;
