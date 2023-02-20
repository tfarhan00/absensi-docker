/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useCamelToNormalCase = () => {
  const camelCaseToString = (camelCaseString) => {
    const words = camelCaseString.split(/(?=[A-Z])/);

    const normalCaseString = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return normalCaseString;
  };
  return camelCaseToString;
};

export const useChildRoutesActive = (parentRouteName) => {
  const { pathname } = useLocation();
  const name = parentRouteName.toLowerCase().replace(" ", "-");
  const isChildRouteActive = pathname.startsWith(`/${name}`);

  return {
    isChildActive: isChildRouteActive,
    name: name,
  };
};

export const useCurrentRoutes = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const routes = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    let name = segment
      .split("-")
      .map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join("-");
    name = name.replace(/-/g, " ");
    return { name, path };
  });
  return routes;
};

export const useMobileSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < 1280;
};

export const useOutsideClick = () => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setClickedOutside(true);
    } else {
      setClickedOutside(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return [ref, clickedOutside];
};

export const useDropdownStillOpen = (routeTarget) => {
  // Dropdown menu still open while refreshing page
  const { pathname } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const match = routeTarget.some((item) => item.path === pathname);

  useLayoutEffect(() => {
    if (match) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, []);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
  };
};
