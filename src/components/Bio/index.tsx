import React from "react";
import { styled } from "../../stitches.config";

import { Text } from "../Text";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  background: "$accent",
  padding: "$1",

  "@smUp": {
    flexDirection: "row",
  },
});

const ProfilePhoto = styled("img", {
  width: "100%",
  height: "100%",

  maxWidth: 150,
  maxHeight: 150,
});

export const Bio = ({ author: { avatar, firstName, description } }) => {
  const avatarUrl = avatar?.url;

  return (
    <Wrapper>
      {avatarUrl && <ProfilePhoto alt={firstName || ""} src={avatarUrl} />}
      {firstName && (
        <div>
          <Text color="normal">
            <i>
              Written by <b>{firstName}</b>
            </i>
          </Text>
          <Text color="normal" css={{ marginBottom: 0 }}>
            {description || null}
          </Text>
        </div>
      )}
    </Wrapper>
  );
};
