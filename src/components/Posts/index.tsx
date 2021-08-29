import React from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { PostCardMobile } from "./PostCardMobile";
import { PostCardDesktop } from "./PostCardDesktop";

import { breakpoints } from "../../utils/breakpoints";

export const PostCard = ({ image, title, slug, date, category, categorySlug, excerpt }) => {
  const isDesktop = useMediaQuery(breakpoints.smUp);

  return (
    <>
      {isDesktop ? (
        <PostCardDesktop
          image={image}
          title={title}
          date={date}
          category={category}
          excerpt={excerpt}
          categorySlug={categorySlug}
          slug={slug}
        />
      ) : (
      <PostCardMobile
          image={image}
          title={title}
          slug={slug}
          date={date}
          category={category}
          categorySlug={categorySlug}
        />
      )}
    </>
  );
};
