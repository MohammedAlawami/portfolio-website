import React from "react";
import {
  Item,
  Label,
  Segment,
  Header,
  Container,
  Icon,
  Button
} from "semantic-ui-react";
import resume from "../resume";

class Projects extends React.Component {
  renderGitHubPage(githubLink) {
    if (githubLink) {
      return (
        <Button href={githubLink} animated="vertical" floated="right">
          <Button.Content hidden>Open in Github</Button.Content>
          <Button.Content visible>
            <Icon size="big" name="github" />
          </Button.Content>
        </Button>
      );
    }
  }
  renderSkillsIcon(icon) {
    if (icon) {
      return <Icon name={icon} />;
    }
  }
  listPropjects() {
    return resume.projects.map((project, key) => {
      return (
        <Item key={key}>
          <Item.Content>
            <Segment clearing basic style={{ padding: "0em", margin: "0em" }}>
              <Header as="h1" floated="left">
                {project.name}
              </Header>
              <Segment
                floated="right"
                basic
                style={{ padding: "1em", margin: "0em" }}
              >
                <Header
                  as="h5"
                  disabled
                  style={{ padding: "0em", margin: "0em" }}
                >
                  {project.date}
                </Header>
              </Segment>
            </Segment>
            <Item.Description style={{ padding: "0em 2em" }}>
              {project.description}
            </Item.Description>
            <Item.Extra style={{ padding: "0em 2em" }}>
              {project.skills.map((skill, key) => (
                <Label key={key}>
                  {this.renderSkillsIcon(skill[1])}
                  {skill[0]}
                </Label>
              ))}
              {this.renderGitHubPage(project.githubLink)}
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });
  }

  render() {
    return (
      <Container text id="Projects">
        <Segment basic clearing>
          <Item.Group divided>{this.listPropjects()}</Item.Group>
        </Segment>
      </Container>
    );
  }
}

export default Projects;
