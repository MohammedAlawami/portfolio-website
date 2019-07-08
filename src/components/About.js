import React, { Component } from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import resume from "../resume";

class About extends Component {
  renderAboutMe() {
    return (
      <Grid stackable verticalAlign="middle" textAlign="center">
        <Grid.Column
          width={4}
          verticalAlign="middle"
          style={{ paddingRight: "0em" }}
        >
          <Image
            src={"/HWI2.JPG"}
            size="medium"
            floated="left"
            circular
            avatar
            style={{
              height: "auto",
              width: "18em"
            }}
          />
        </Grid.Column>
        <Grid.Column
          width={10}
          verticalAlign="middle"
          style={{ paddingLeft: "0em" }}
        >
          <Container text textAlign="justified">
            <p
              style={{
                fontSize: "1.5em"
              }}
            >
              {resume.aboutMe}
            </p>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
  render() {
    return <Container id="About Me">{this.renderAboutMe()}</Container>;
  }
}

export default About;
