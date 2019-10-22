import styled, {
  css,
  FlattenSimpleInterpolation
} from "styled-components/macro";

interface Props {
  slideWidth?: number;
  slideHeight?: number;
  numberOfSlides?: number;
  activeSlide?: number;
  slideRotation?: number;
  slideTranslate?: number;
  activeSlideRotation?: number;
  color?: string;
}

type PropDependentStyleBlock = undefined | 0 | FlattenSimpleInterpolation | "";

export const Scene = styled.div<Props>`
  position: relative;
  ${({ slideWidth, slideHeight }): PropDependentStyleBlock =>
    slideWidth &&
    slideHeight &&
    css`
      width: ${slideWidth}px;
      height: ${slideHeight}px;
    `}
  perspective: 600px;
`;

export const Carousel = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 2s ease-in-out;
  ${({ activeSlideRotation, slideTranslate }): PropDependentStyleBlock =>
    slideTranslate &&
    css`
      transform: ${`translateZ(-${slideTranslate /
        2}px) rotateY(${-activeSlideRotation}deg)`};
    `}
`;

export const Slide = styled.div<Props>`
  position: absolute;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
  opacity: 0.8;
  ${({
    slideWidth,
    slideHeight,
    color,
    slideRotation,
    slideTranslate
  }): PropDependentStyleBlock =>
    slideWidth &&
    slideHeight &&
    color &&
    css`
      top: 10px;
      left: 10px;
      width: ${slideWidth - 10}px;
      height: ${slideHeight - 10}px;
      background-color: ${color};
      transform: ${`rotateY(${slideRotation}deg) translateZ(${slideTranslate}px)`};
    `}
`;

export const SlideCopy = styled.h3`
  width: 100%;
`;
