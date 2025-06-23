import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Logo from "../../../components/common/Logo";
import Icon from "../../../components/common/Icon";

// Icons
import arrowRightIcon from "../../../assets/icons/outline/arrow-right.svg";

const Header = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Start timer when component mounts
    const timerInterval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timerInterval);
  }, []);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <header className="flex items-center justify-between h-[80px] container">
      {/* Back link */}
      <Link
        to={-1}
        translate="no"
        className="btn-outline justify-between gap-0 w-44"
      >
        <Icon
          alt="Chap tomon"
          src={arrowRightIcon}
          className="size-6 rotate-180"
        />
        <span>Ortga qaytish</span>
      </Link>

      {/* Logo */}
      <Logo />

      {/* Time */}
      <div
        translate="no"
        className="btn-outline justify-center gap-2 w-44 hover:bg-white"
      >
        <b className="font-medium">Vaqt:</b>
        <span className="inline-block w-14">{formatTime(elapsedTime)}</span>
      </div>
    </header>
  );
};

export default Header;
