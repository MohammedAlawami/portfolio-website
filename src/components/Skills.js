import React from "react";
import { Label, Segment, Container, Grid } from "semantic-ui-react";
import resume from "../resume";

class Skills extends React.Component {
  listSkills() {
    return (
      <Grid columns={4} doubling>
        <Grid.Row>
          {resume.skills.map((skill, key) => (
            <Grid.Column key={key}>
              <Label image size="large" style={{ margin: "0.5em" }}>
                <img src={skill[0]} />
                {skill[1]}
              </Label>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    return (
      <Container text id="Skills">
        <Segment basic clearing textAlign="left">
          {this.listSkills()}
        </Segment>
      </Container>
    );
  }
}

export default Skills;
