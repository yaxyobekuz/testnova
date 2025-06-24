import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Logo from "../common/Logo";
import Icon from "../common/Icon";

// Icons
import xIcon from "../../assets/icons/outline/x-mark.svg";
import barsIcon from "../../assets/icons/outline/bars-3.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Header */}
      <header className="flex items-center h-[72px] xs:h-20 sm:h-[86px]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-10">
              <Logo />

              {/* Nav */}
              <nav className="hidden lg:block">
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

            {/* Auth links & Hamburger menu */}
            <div className="flex items-center gap-3.5">
              <Link
                to="/hisob/royxatdan-otish"
                className="hidden btn-outline sm:flex"
              >
                Ro'yxatdan o'tish
              </Link>

              <Link to="/hisob/kirish" className="btn-primary sm:flex">
                Kirish
              </Link>

              {/* Hamburger menu */}
              <button
                title="Menyuni ochish"
                onClick={handleOpenMenu}
                aria-label="Menyuni ochish"
                className="flex items-center justify-center size-10 sm:size-12 lg:hidden"
              >
                <Icon
                  size={32}
                  alt="Menyu"
                  src={barsIcon}
                  className="size-7 md:size-[30px]"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={handleCloseMenu} />
    </>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`flex flex-col fixed inset-0 size-full bg-white origin-top-right transition-transform duration-300 ${
        isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-0"
      }`}
    >
      {/* Top */}
      <div className="flex items-center justify-between w-full h-[72px] px-3 mx-auto xs:px-3.5 sm:px-4 md:px-5 sm:h-[86px]">
        <Logo />

        {/* Hamburger menu */}
        <button
          onClick={onClose}
          title="Menyuni yopish"
          aria-label="Menyuni yopish"
          className="flex items-center justify-center size-10 sm:size-12"
        >
          <Icon
            size={32}
            alt="Yopish"
            src={xIcon}
            className="size-7 md:size-[30px]"
          />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex justify-center items-center grow">
        <ul className="space-y-5">
          {/* Home */}
          <li>
            <Link
              to="/"
              onClick={onClose}
              className="block text-center text-lg font-medium transition-colors duration-200 hover:text-primary-500"
            >
              Asosiy
            </Link>
          </li>

          {/* Categories */}
          <li>
            <Link
              to="/bolimlar"
              onClick={onClose}
              className="block text-center text-lg font-medium transition-colors duration-200 hover:text-primary-500"
            >
              Bo'limlar
            </Link>
          </li>

          {/* Tournaments */}
          <li>
            <Link
              to="/musobaqalar"
              onClick={onClose}
              className="block text-center text-lg font-medium transition-colors duration-200 hover:text-primary-500"
            >
              Musobaqalar
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/boglanish"
              onClick={onClose}
              className="block text-center text-lg font-medium transition-colors duration-200 hover:text-primary-500"
            >
              Bog'lanish
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom */}
      <div className="flex flex-col justify-center gap-5 p-5 xs:flex-row xs:p-12">
        <Link
          onClick={onClose}
          className="btn-outline"
          to="/hisob/royxatdan-otish"
        >
          Ro'yxatdan o'tish
        </Link>

        <Link onClick={onClose} to="/hisob/kirish" className="btn-primary">
          Kirish
        </Link>
      </div>
    </div>
  );
};

export default Header;
