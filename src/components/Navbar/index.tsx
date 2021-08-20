import React, { useEffect, useState } from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export const Navbar = () => {
  const [width, setWidth] = useState(null)

  const handleResize = () => [
    setWidth(getWidth())
  ]

  useEffect(() => {
    setWidth(getWidth())
    window.addEventListener("resize", handleResize)
  }, [])

  if (width < 800) {
    return <MobileNavbar />
  } else {
    return <DesktopNavbar />
  }
};