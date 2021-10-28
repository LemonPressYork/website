import React from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../utils/breakpoints";

export const Navbar = () => {
  const isDesktop = useMediaQuery(breakpoints.navWidth);

  if (isDesktop) {
    return <DesktopNavbar />;
  } else {
    return <MobileNavbar />;
  }
};
