import React, { Component } from "react";
import { Segment, Image, Container } from "semantic-ui-react";
import resume from "../resume";

class About extends Component {
  render() {
    return (
      <Container
        textAlign="justified"
        style={{ margin: "1em", padding: "0em 5em 0em 5em" }}
        id="About Me"
      >
        <Segment
          basic
          clearing
          style={{
            margin: "0em 0em 0em 0em"
          }}
          size="huge"
        >
          <Image
            src={"/HWI.JPG"}
            size="medium"
            floated="left"
            circular
            avatar
            style={{
              height: "auto",
              width: "17em"
            }}
          />
          <Segment basic clearing>
            <p style={{ fontSize: "1.5em" }}>{resume.aboutMe}</p>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default About;
