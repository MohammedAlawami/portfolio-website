import React from "react";
import { List, Container, Header, Segment } from "semantic-ui-react";
import resume from "../resume";

class Education extends React.Component {
  renderMetaList() {
    return resume.education.meta.map((listItem, itemKey) => (
      <List.Item key={itemKey}>{listItem}</List.Item>
    ));
  }

  render() {
    return (
      <Container>
        <Segment basic clearing>
          <Header as="h1" floated="left">
            <Header.Content>
              {resume.education.schoolName}
              <Header.Subheader style={{ marginLeft: "1em" }}>
                {resume.education.major}
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Segment
            floated="right"
            basic
            style={{ padding: "1em 0em", margin: "0em" }}
          >
            <Header as="h5" disabled style={{ padding: "0em", margin: "0em" }}>
              {resume.education.gradDate}
            </Header>
            <Header as="h5" disabled style={{ padding: "0em", margin: "0em" }}>
              {resume.education.GPA}
            </Header>
          </Segment>
        </Segment>

        <List bulleted style={{ paddingLeft: "2em" }}>
          {this.renderMetaList()}
        </List>
      </Container>
    );
  }
}

export default Education;
