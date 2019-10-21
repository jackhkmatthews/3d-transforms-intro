import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components/macro";
import { number, withKnobs } from "@storybook/addon-knobs";

import TransformFunctions3d from "./transform-functions-3d.component";

const Container = styled.div`
  margin: 50px;
  display: inline-block;
`;

const translateOptions = {
  range: true,
  min: 0,
  max: 50,
  step: 1
};

const rotateOptions = {
  range: true,
  min: -1,
  max: 1,
  step: 0.1
};

const rotateAngleOptions = {
  range: true,
  min: 0,
  max: 180,
  step: 1
};

const scaleOptions = {
  range: true,
  min: 0,
  max: 2,
  step: 0.1
};

storiesOf("Transform Functions 3D", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Container>
      <TransformFunctions3d
        translateX={number("translateX", 0, translateOptions, "transform")}
        translateY={number("translateY", 0, translateOptions, "transform")}
        translateZ={number("translateZ", 0, translateOptions, "transform")}
        rotateX={number("rotateX", 0, rotateOptions, "transform")}
        rotateY={number("rotateY", 0, rotateOptions, "transform")}
        rotateZ={number("rotateZ", 0, rotateOptions, "transform")}
        rotateAngle={number("rotateAngle", 45, rotateAngleOptions, "transform")}
        scaleX={number("scaleX", 1, scaleOptions, "transform")}
        scaleY={number("scaleY", 1, scaleOptions, "transform")}
        scaleZ={number("scaleZ", 1, scaleOptions, "transform")}
      />
    </Container>
  ));
