import React from "react";
import { Image } from "semantic-ui-react";
import resume from "../resume";

const ProfileImage = () => (
  <Image
    src={resume.profilePic}
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
