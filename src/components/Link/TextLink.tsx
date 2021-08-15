import { styled } from "../../stitches.config";

import { UnstyledLink } from "./UnstyledLink";

export const TextLink = styled(UnstyledLink, {
  textDecoration: "underline",
  color: "inherit",
  fontWeight: "$semibold",

  transition: "color $ease",

  "&:hover, &:active": {
    color: "$text",
  },
});
