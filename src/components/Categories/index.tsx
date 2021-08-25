import React, { useState } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { MobileToggle } from "./MobileToggle";
import { Bar } from "./Bar";

export const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {!isDesktop ? <MobileToggle isOpen={isOpen} toggleOpen={toggleOpen} /> : null}
      {isOpen || isDesktop ? <Bar /> : null}
    </>
  );
};
