import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `);

  const avatarUrl = author?.avatar?.url;

  return (
    <div>
      {avatarUrl && <img alt={author?.firstName || ""} src={avatarUrl} />}
      {author?.firstName && (
        <p>
          Written by <strong>{author.firstName}</strong> {author?.description || null}{" "}
          {author?.twitter && (
            <a href={`https://twitter.com/${author?.twitter || ""}`}>
              You should follow them on Twitter
            </a>
          )}
        </p>
      )}
    </div>
  );
};
