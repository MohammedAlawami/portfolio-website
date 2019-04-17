import React from "react";
import { List, Container, Header, Segment, Divider } from "semantic-ui-react";
import resume from "../resume";

class ExperienceList extends React.Component {
  renderDivider(key) {
    if (key !== resume.experince.length - 1) {
      return <Divider />;
    }
  }

  renderExperinceList() {
    return resume.experince.map((experince, key) => {
      return (
        <Container key={key}>
          <Segment basic clearing style={{ margin: "0em 0em 0em 0em" }}>
            <Header as="h1" floated="left">
              <Header.Content>
                {experince.position}
                <Header.Subheader style={{ marginLeft: "1em" }}>
                  {experince.companyName} | {experince.companyAddress}
                </Header.Subheader>
              </Header.Content>
            </Header>
            <Segment
              floated="right"
              basic
              style={{ padding: "0em", margin: "0em" }}
            >
              <Header
                as="h5"
                disabled
                style={{ padding: "1em 0em", margin: "0em" }}
              >
                {experince.date}
              </Header>
            </Segment>
          </Segment>
          <Container style={{ paddingLeft: "2em" }}>
            <Segment basic clearing style={{ padding: "0em", margin: "0em" }}>
              <strong>Summary: </strong>
              {experince.summary}
            </Segment>
            <List bulleted>
              {experince.duties.map((duty, key) => (
                <List.Item key={key}>{duty}</List.Item>
              ))}
            </List>
          </Container>
          {this.renderDivider(key)}
        </Container>
      );
    });
  }

  render() {
    return <Container>{this.renderExperinceList()}</Container>;
  }
}

export default ExperienceList;
