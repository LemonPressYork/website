import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { styled } from "../../stitches.config";

import { Text } from "../Text";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "$1",

  color: "$background",
  backgroundColor: "$accentDark",

  "@smUp": {
    display: "none",
  },

  [`& ${Text}`]: {
    fontWeight: "$semibold",
    color: "$background",
    margin: 0,
  },
});

interface Props {
  isOpen: boolean;
  toggleOpen(): void;
}

export const MobileToggle = ({ isOpen, toggleOpen }: Props): JSX.Element => {
  return (
    <Wrapper onClick={toggleOpen}>
      <Text>Categories</Text>
      <span>{isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}</span>
    </Wrapper>
  );
};
