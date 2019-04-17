import PropTypes from "prop-types";
import React from "react";
import ProfileImage from "./ProfileImage";
import { Container, Header, Icon, Divider } from "semantic-ui-react";

import resume from "../resume";

const renderGitHubPage = githubLink => {
  if (githubLink) {
    return (
      <a
        href={githubLink}
        style={{ color: "inherit" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="big" name="github" />
      </a>
    );
  }
};
const renderLinkedinPage = linkedin => {
  if (linkedin) {
    return (
      <a
        href={resume.linkedin}
        style={{ color: "inherit" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="big" name="linkedin" />
      </a>
    );
  }
};
const HomePageHeader = ({ mobile }) => (
  <Container text>
    <Divider hidden />
    <ProfileImage />
    <Divider hidden />
    <Header
      as="h1"
      inverted
      textAlign="center"
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginTop: 0,
        marginBottom: 0
      }}
    >
      <Header.Content>{resume.name}</Header.Content>
    </Header>

    <Header
      as="h2"
      content={resume.objective}
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />

    <Container
      text
      style={{
        marginBottom: "1em"
      }}
    >
      {renderGitHubPage(resume.github)}
      {renderLinkedinPage(resume.linkedin)}
      <a
        href={`mailto:${resume.email}`}
        style={{ color: "inherit" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="big" name="mail" />
      </a>
    </Container>
  </Container>
);

HomePageHeader.propTypes = {
  mobile: PropTypes.bool
};

export default HomePageHeader;
