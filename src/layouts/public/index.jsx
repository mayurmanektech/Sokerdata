import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PublicLayout = ({ children }) => {
  const location = useLocation(); // Get current location
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return children;
};

export default PublicLayout;
