// utils/ScrollToTop.js
import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { useLenis } from "./LenisContext";

export const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();
  const lenisRef = useLenis();

  useLayoutEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return children;
};
