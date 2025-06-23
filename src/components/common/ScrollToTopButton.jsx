import { useState, useEffect } from "react";

// components
import Icon from "./Icon";

// Styles
import "../../styles/scroll-to-top.css";

import arrowRightIcon from "../../assets/icons/outline/arrow-right.svg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 1) setIsVisible(true);
    else setIsVisible(false);
  };

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
      calculateScrollProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      title="Yuqoriga"
      onClick={scrollToTop}
      aria-label="scroll to top"
      className={`scroll-to-top ${isVisible ? "is-visible" : ""}`}
    >
      <svg className="progress-circle text-primary-500" viewBox="0 0 36 36">
        <path
          stroke="currentColor"
          className="progress-bar"
          strokeDasharray={`${scrollProgress}, 100`}
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <Icon src={arrowRightIcon} className="size-6 -rotate-90 sm:size-[26px]" />
    </button>
  );
};

export default ScrollToTopButton;
