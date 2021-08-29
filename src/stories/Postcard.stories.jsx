import React from "react";

import { PostCard } from "../components/Posts";
import { PostCardMobile } from "../components/Posts/PostCardMobile";
import { PostCardDesktop } from "../components/Posts/PostCardDesktop";

export default {
  title: "Components/PostCards",
  argTypes: {
    image: {
      defaultValue: "https://www.publicdomainpictures.net/pictures/20000/nahled/york-from-top.jpg",
      control: "text",
    },
    title: {
      defaultValue: "Example Post Title",
      control: "text",
    },
    slug: {
      defaultValue: "/example-post-slug",
      control: "text",
    },
    date: {
      defaultValue: "29.08.2021",
      control: "text",
    },
    category: {
      defaultValue: "Category",
      control: "text",
    },
    categorySlug: {
      defaultValue: "/category-slug",
      control: "text",
    },
    excerpt: {
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      control: "text",
    },
  },
};

export const PostCardComponent = (args) => (
  <PostCard
    image={args.image}
    title={args.title}
    slug={args.slug}
    date={args.date}
    category={args.category}
    categorySlug={args.categorySlug}
    excerpt={args.excerpt}></PostCard>
);

export const MobilePostCard = (args) => (
  <PostCardMobile
    image={args.image}
    title={args.title}
    slug={args.slug}
    date={args.date}
    category={args.category}
    categorySlug={args.categorySlug}
    excerpt={args.excerpt}></PostCardMobile>
);

export const DesktopPostCard = (args) => (
  <PostCardDesktop
    image={args.image}
    title={args.title}
    slug={args.slug}
    date={args.date}
    category={args.category}
    categorySlug={args.categorySlug}
    excerpt={args.excerpt}></PostCardDesktop>
);
