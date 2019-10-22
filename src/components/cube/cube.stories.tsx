import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components/macro";
import { withKnobs, number, radios } from "@storybook/addon-knobs";
import Cube from "./cube.component";

const Container = styled.div`
  margin: 50px;
  display: inline-block;
`;

const Note = styled.h3`
  margin-bottom: 50px;
`;

const label = "Front Face";
const options = {
  Front: "front",
  Back: "back",
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right"
};
const defaultValue = "front";

storiesOf("Cube", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Container>
      <Note>Note: order of transformation functions is meaningful</Note>
      <Cube
        frontFace={radios(label, options, defaultValue, "transforms")}
        boxWidth={number(
          "boxWidth",
          200,
          {
            range: true,
            min: 100,
            max: 300,
            step: 1
          },
          "transforms"
        )}
      />
    </Container>
  ));
