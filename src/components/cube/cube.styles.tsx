import styled, {
  css,
  FlattenSimpleInterpolation
} from "styled-components/macro";
import { POSITIONS } from "./cube.component";

interface Props {
  position?: string;
  boxWidth?: number;
  frontFace?: string;
}

type PropDependentStyleBlock = undefined | 0 | FlattenSimpleInterpolation;

export const Scene = styled.div<Props>`
  ${({ boxWidth }): PropDependentStyleBlock =>
    boxWidth &&
    css`
      width: ${boxWidth}px;
      height: ${boxWidth}px;
    `};
  perspective: 600px;
  transition: all 3s ease;
`;

export const Cube = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 3s ease;
  transform-style: preserve-3d;
  ${({ boxWidth, frontFace }): PropDependentStyleBlock => {
    switch (frontFace) {
      case POSITIONS[0]:
        return (
          boxWidth &&
          css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateY(0deg);
          `
        );
      case POSITIONS[1]:
        return (
          boxWidth &&
          css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateY(-180deg);
          `
        );
      case POSITIONS[2]:
        return (
          boxWidth &&
          css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateY(-90deg);
          `
        );
      case POSITIONS[3]:
        return (
          boxWidth &&
          css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateY(90deg);
          `
        );
      case POSITIONS[4]:
        return (
          boxWidth &&
          css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateX(-90deg);
          `
        );
      case POSITIONS[5]:
        return (
          boxWidth &&
          css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateX(90deg);
          `
        );
      default:
        break;
    }
  }}
`;

export const Face = styled.div<Props>`
  position: absolute;
  transition: all 3s ease;
  ${({ boxWidth }): PropDependentStyleBlock =>
    boxWidth &&
    css`
      width: ${boxWidth}px;
      height: ${boxWidth}px;
    `};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  ${({ boxWidth, position }): PropDependentStyleBlock => {
    switch (position) {
      case POSITIONS[0]:
        return (
          boxWidth &&
          css`
            background: hsla(0, 100%, 50%, 0.7);
            transform: rotateY(0deg) ${`translateZ(${boxWidth / 2}px)`};
          `
        );
      case POSITIONS[1]:
        return (
          boxWidth &&
          css`
            background: hsla(60, 100%, 50%, 0.7);
            transform: rotateY(180deg) ${`translateZ(${boxWidth / 2}px)`};
          `
        );
      case POSITIONS[2]:
        return (
          boxWidth &&
          css`
            background: hsla(120, 100%, 50%, 0.7);
            transform: rotateY(90deg) ${`translateZ(${boxWidth / 2}px)`};
          `
        );
      case POSITIONS[3]:
        return (
          boxWidth &&
          css`
            background: hsla(180, 100%, 50%, 0.7);
            transform: rotateY(-90deg) ${`translateZ(${boxWidth / 2}px)`};
          `
        );
      case POSITIONS[4]:
        return (
          boxWidth &&
          css`
            background: hsla(240, 100%, 50%, 0.7);
            transform: rotateX(90deg) ${`translateZ(${boxWidth / 2}px)`};
          `
        );
      case POSITIONS[5]:
        return (
          boxWidth &&
          css`
            background: hsla(300, 100%, 50%, 0.7);
            transform: rotateX(-90deg) ${`translateZ(${boxWidth / 2}px)`};
          `
        );
      default:
        break;
    }
  }}
`;

export const FaceCopy = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 60px;
`;
