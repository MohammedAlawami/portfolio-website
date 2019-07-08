import React from "react";
import { List, Container, Header, Segment } from "semantic-ui-react";
import resume from "../resume";

class Certificate extends React.Component {
  renderMetaList() {
    return resume.certificates.meta.map((listItem, itemKey) => (
      <List.Item key={itemKey}>{listItem}</List.Item>
    ));
  }

  render() {
    return (
      <Container>
        <Segment basic clearing style={{ marginBottom: "1em" }}>
          <Header as="h1" floated="left">
            <Header.Content>
              {resume.certificates.certificateName}
            </Header.Content>
            <Header.Subheader
              style={{ marginLeft: "1em", paddingTop: "0.5em" }}
            >
              <a href={resume.certificates.credentialURL} target="_blank">
                Credential
              </a>
            </Header.Subheader>
          </Header>
          <Segment
            floated="right"
            basic
            style={{ padding: "1em 0em", margin: "0em" }}
          >
            <Header as="h5" disabled style={{ padding: "0em", margin: "0em" }}>
              {resume.certificates.date}
            </Header>
          </Segment>
        </Segment>

        <List bulleted style={{ marginTop: "0em", paddingLeft: "2em" }}>
          {this.renderMetaList()}
        </List>
      </Container>
    );
  }
}

export default Certificate;
