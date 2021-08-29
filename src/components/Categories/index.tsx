import React, { useState } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { MobileToggle } from "./MobileToggle";
import { Bar } from "./Bar";

import { breakpoints } from "../../utils/breakpoints";

export const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery(breakpoints.smUp);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {!isDesktop ? <MobileToggle isOpen={isOpen} toggleOpen={toggleOpen} /> : null}
      {isOpen || isDesktop ? <Bar /> : null}
    </>
  );
};
