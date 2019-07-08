import React from "react";
import { Image } from "semantic-ui-react";

const ProfileImage = () => (
  <Image
    src="/expo.jpg"
    size="small"
    circular
    centered
    style={{
      height: "auto",
      width: "35%"
    }}
  />
);

export default ProfileImage;
