import React from "react";
// import { Link } from "gatsby";
import Link from "gatsby-link";

interface Props {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const UnstyledLink = ({ to, className, children }: Props) => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <a href={to} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
