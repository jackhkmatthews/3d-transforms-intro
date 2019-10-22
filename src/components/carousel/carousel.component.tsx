import React, { useState } from "react";
import * as S from "./carousel.styles";

function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getTanFromDegrees(degrees: number): number {
  return Math.tan((degrees * Math.PI) / 180);
}

interface Props {
  slideWidth: number;
  slideHeight: number;
  numberOfSlides: number;
  className?: string;
}
const Carousel: React.FC<Props> = ({
  slideWidth,
  slideHeight,
  numberOfSlides,
  className
}: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const radius = slideWidth / 2 / getTanFromDegrees(360 / numberOfSlides / 2);
  const activeSlideRotation = (360 / numberOfSlides) * activeSlide;

  function handleClick(index: number): void {
    setActiveSlide(index);
  }
  return (
    <S.Scene
      slideHeight={slideHeight}
      slideWidth={slideWidth}
      className={className}
    >
      <S.Carousel
        activeSlideRotation={activeSlideRotation}
        slideTranslate={radius}
      >
        {new Array(numberOfSlides).fill("").map((slide, index) => {
          const slideRotation = (360 / numberOfSlides) * index;
          return (
            <S.Slide
              key={index}
              slideWidth={slideWidth}
              slideHeight={slideHeight}
              color={getRandomColor()}
              slideRotation={slideRotation}
              slideTranslate={radius}
              onClick={(): void => handleClick(index)}
            >
              <S.SlideCopy>{index}</S.SlideCopy>
            </S.Slide>
          );
        })}
      </S.Carousel>
    </S.Scene>
  );
};

export default Carousel;
