import React from "react";
import { Image } from "semantic-ui-react";

const ProfileImage = () => (
  <Image
    src="/profile_picture.JPG"
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
