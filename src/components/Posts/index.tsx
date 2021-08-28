import React from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { PostCardMobile } from "./PostCardMobile";
import { PostCardDesktop } from "./PostCardDesktop";

import { breakpoints } from "../../utils/breakpoints";

export const PostCard = ({ image, title, date, category, postText }) => {
  const isDesktop = useMediaQuery(breakpoints.smUp);

  return (
    <>
      {!isDesktop ? (
        <PostCardMobile image={image} title={title} date={date} category={category} />
      ) : null}
      {isDesktop ? (
        <PostCardDesktop
          image={image}
          title={title}
          date={date}
          category={category}
          postText={postText}
        />
      ) : null}
    </>
  );
};
