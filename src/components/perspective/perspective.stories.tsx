import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import { number, withKnobs } from "@storybook/addon-knobs";

import Perspective from "./perspective.component";

const Container = styled.div`
  margin: 100px;
  display: inline-block;
`;

storiesOf("Perspective", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Container>
      <Perspective
        rotateY={number(
          "rotateY",
          45,
          {
            range: true,
            min: 0,
            max: 180,
            step: 1
          },
          "transforms"
        )}
        perspective={number(
          "perspective",
          500,
          {
            range: true,
            min: 0,
            max: 1000,
            step: 10
          },
          "transforms"
        )}
      />
    </Container>
  ));
