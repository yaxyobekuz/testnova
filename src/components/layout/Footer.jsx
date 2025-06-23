import { Link } from "react-router-dom";

// Components
import Logo from "../common/Logo";
import Icon from "../common/Icon";

// Data
import social from "../../data/social";

const Header = () => {
  return (
    <footer className="flex items-center py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            <Logo />

            {/* Nav */}
            <nav>
              <ul className="flex items-center gap-5">
                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-200 hover:text-primary-500"
                  >
                    Asosiy
                  </Link>
                </li>

                {/* Categories */}
                <li>
                  <Link
                    to="/bolimlar"
                    className="transition-colors duration-200 hover:text-primary-500"
                  >
                    Bo'limlar
                  </Link>
                </li>

                {/* Tournaments */}
                <li>
                  <Link
                    to="/musobaqalar"
                    className="transition-colors duration-200 hover:text-primary-500"
                  >
                    Musobaqalar
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    to="/boglanish"
                    className="transition-colors duration-200 hover:text-primary-500"
                  >
                    Bog'lanish
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <ul className="flex items-center gap-5">
            {social.map(({ icon, url, description, name }, index) => (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  title={description}
                  aria-label={description}
                  rel="noopener noreferrer"
                >
                  <Icon size={36} src={icon} alt={name} className="size-9" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Header;
