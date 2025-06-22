import { Link } from "react-router-dom";

// Components
import Logo from "../common/Logo";

const Header = () => {
  return (
    <header className="py-5">
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

          {/* Auth links */}
          <div className="flex items-center gap-3.5">
            <Link
              to="/hisob/royxatdan-otish"
              className="bg-white px-5 py-2.5 border rounded-2xl transition-colors duration-200 hover:bg-primary-500/5"
            >
              Ro'yxatdan o'tish
            </Link>

            <Link
              to="/hisob/kirish"
              className="bg-primary-500 px-5 py-2.5 text-white rounded-2xl transition-colors duration-200 hover:bg-primary-700"
            >
              Kirish
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
