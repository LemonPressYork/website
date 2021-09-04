import React from "react";
// import { Link } from "gatsby";
import Link from "gatsby-link";
import { css } from "../../stitches.config";

interface Props {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const styles = css({
  color: "inherit",
  textDecoration: "inherit",
});

export const UnstyledLink = ({ to, className = "", children }: Props) => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal)
    return (
      <Link to={to} className={`unstyled-link ${styles()} ${className}`}>
        {children}
      </Link>
    );

  return (
    <a
      href={to}
      className={`unstyled-link ${styles()} ${className}`}
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
};

// https://stitches.dev/docs/styling#target-a-react-component
UnstyledLink.toString = () => ".unstyled-link";
