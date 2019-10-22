import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components/macro";
import { withKnobs, number } from "@storybook/addon-knobs";
import Carousel from "./carousel.component";

const Container = styled.div`
  margin: 50px 0;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
`;

const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
`;

storiesOf("Carousel", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Container>
      <StyledCarousel
        numberOfSlides={number(
          "numberOfSlides",
          10,
          {
            range: true,
            min: 3,
            max: 15,
            step: 1
          },
          "slides"
        )}
        slideHeight={number(
          "slideHeight",
          100,
          {
            range: true,
            min: 50,
            max: 150,
            step: 1
          },
          "slides"
        )}
        slideWidth={number(
          "slideWidth",
          150,
          {
            range: true,
            min: 100,
            max: 200,
            step: 1
          },
          "slides"
        )}
      />
    </Container>
  ));
