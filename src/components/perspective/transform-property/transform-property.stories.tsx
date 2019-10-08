import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import { number, withKnobs } from "@storybook/addon-knobs";

import TransformProperty from "./transform-property.component";

const Container = styled.div`
  margin: 50px;
  display: inline-block;
`;

storiesOf("Perspective", module)
  .addDecorator(withKnobs)
  .add("TransformProperty", () => (
    <Container>
      <TransformProperty
        rotateY={number(
          "rotateY",
          45,
          {
            range: true,
            min: 0,
            max: 180,
            step: 1
          },
          "transform"
        )}
        perspectiveOriginX={number(
          "perspectiveOriginX",
          50,
          {
            range: true,
            min: 0,
            max: 100,
            step: 1
          },
          "perspective-origin"
        )}
        perspectiveOriginY={number(
          "perspectiveOriginY",
          50,
          {
            range: true,
            min: 0,
            max: 100,
            step: 1
          },
          "perspective-origin"
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
          "transform"
        )}
      />
    </Container>
  ));
