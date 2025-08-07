import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant for immediate scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTopOnRoute;
