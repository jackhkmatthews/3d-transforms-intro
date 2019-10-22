import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components/macro";
import { withKnobs, number, radios } from "@storybook/addon-knobs";
import Box from "./box.component";

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

storiesOf("Box", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Container>
      <Note>Note: order of transformation functions is meaningful</Note>
      <Box
        frontFace={radios(label, options, defaultValue, "transforms")}
        boxWidth={number(
          "boxWidth",
          300,
          {
            range: true,
            min: 200,
            max: 400,
            step: 1
          },
          "transforms"
        )}
        boxHeight={number(
          "boxHeight",
          200,
          {
            range: true,
            min: 100,
            max: 300,
            step: 1
          },
          "transforms"
        )}
        boxDepth={number(
          "boxDepth",
          100,
          {
            range: true,
            min: 50,
            max: 150,
            step: 1
          },
          "transforms"
        )}
      />
    </Container>
  ));
