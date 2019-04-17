import React from "react";
import { Container, Divider, Icon, Segment } from "semantic-ui-react";
import ResponsiveContainer from "./ResponsiveContainer";
import About from "./About";
import ExperienceList from "./ExperienceList";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import resume from "../resume";

const DividerLine = props => (
  <Divider
    as="h2"
    className="header"
    horizontal
    style={{ margin: "1em 0em", textTransform: "uppercase" }}
  >
    <Icon name={props.iconName} />
    {props.title}
  </Divider>
);

const HomePageLayout = () => (
  <ResponsiveContainer>
    <DividerLine iconName="id card outline" title="About Me" />
    <Container style={{ padding: "2em 0em" }}>
      <Container>
        <About />
      </Container>
    </Container>

    <DividerLine iconName="suitcase" title="Experience" />
    <Container style={{ padding: "2em 0em" }}>
      <Container text>
        <ExperienceList />
      </Container>
    </Container>

    <DividerLine iconName="graduation" title="Education" />
    <Container style={{ padding: "2em 0em" }}>
      <Container text>
        <Education />
      </Container>
    </Container>

    <DividerLine iconName="lightbulb outline" title="Projects" id="Projects" />
    <Container style={{ padding: "2em 0em" }}>
      <Container text>
        <Projects />
      </Container>
    </Container>

    <DividerLine iconName="code" title="Software Skills" />
    <Container style={{ padding: "2em 0em" }}>
      <Container text>
        <Skills />
      </Container>
    </Container>

    <Segment
      inverted
      color="blue"
      tertiary
      vertical
      style={{ padding: "5em 0em" }}
    >
      <Container text>
        <Segment basic clearing>
          <a
            href={`mailto:${resume.email}`}
            style={{ color: "Black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size="big" name="mail" />
          </a>
          <a
            href={resume.linkedin}
            style={{ color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size="big" name="linkedin" />
          </a>
          {renderGitHubPage(resume.github)}
        </Segment>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
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
export default HomePageLayout;
