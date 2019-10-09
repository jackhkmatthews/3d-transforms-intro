import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import CardFlip from "./card-flip.component";

const Container = styled.div`
  margin: 50px;
  display: inline-block;
`;

storiesOf("CardFlip", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Container>
      <CardFlip flip={boolean("flip", false, "transform")} />
    </Container>
  ));
