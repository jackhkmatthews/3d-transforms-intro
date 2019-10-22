import styled, {
  css,
  FlattenSimpleInterpolation
} from "styled-components/macro";
import { POSITIONS } from "./box.component";

interface Props {
  position?: string;
  boxWidth?: number;
  boxHeight?: number;
  boxDepth?: number;
  frontFace?: string;
}

type PropDependentStyleBlock = undefined | 0 | FlattenSimpleInterpolation;

export const Scene = styled.div<Props>`
  ${({ boxWidth, boxHeight }): PropDependentStyleBlock =>
    boxWidth &&
    boxHeight &&
    css`
      width: ${boxWidth}px;
      height: ${boxHeight}px;
    `};
  perspective: 600px;
  transition: all 2s ease-in-out;
`;

export const Box = styled.div<Props>`
  position: relative;
  transition: all 2s ease-in-out;
  transform-style: preserve-3d;
  ${({ boxWidth, frontFace, boxDepth, boxHeight }): PropDependentStyleBlock => {
    if (boxWidth && boxHeight && boxDepth) {
      switch (frontFace) {
        case POSITIONS[0]:
          return css`
            transform: ${`translateZ(-${boxDepth / 2}px)`} rotateY(0deg);
            width: ${boxWidth}px;
            height: ${boxHeight}px;
          `;
        case POSITIONS[1]:
          return css`
            transform: ${`translateZ(-${boxDepth / 2}px)`} rotateY(-180deg);
            width: ${boxWidth}px;
            height: ${boxHeight}px;
          `;
        case POSITIONS[2]:
          return css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateY(-90deg);
            width: ${boxWidth}px;
            height: ${boxHeight}px;
          `;
        case POSITIONS[3]:
          return css`
            transform: ${`translateZ(-${boxWidth / 2}px)`} rotateY(90deg);
            width: ${boxWidth}px;
            height: ${boxHeight}px;
          `;
        case POSITIONS[4]:
          return css`
            transform: ${`translateZ(-${boxHeight / 2}px)`} rotateX(-90deg);
            width: ${boxWidth}px;
            height: ${boxHeight}px;
          `;
        case POSITIONS[5]:
          return css`
            transform: ${`translateZ(-${boxHeight / 2}px)`} rotateX(90deg);
            width: ${boxWidth}px;
            height: ${boxHeight}px;
          `;
        default:
          break;
      }
    }
  }}
`;

export const Face = styled.div<Props>`
  position: absolute;
  transition: all 2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  ${({ boxWidth, position, boxHeight, boxDepth }): PropDependentStyleBlock => {
    if (boxWidth && boxHeight && boxDepth) {
      switch (position) {
        case POSITIONS[0]:
          return css`
            width: ${boxWidth}px;
            height: ${boxHeight}px;
            background: hsla(0, 100%, 50%, 0.7);
            transform: rotateY(0deg) ${`translateZ(${boxDepth / 2}px)`};
            top: 0px;
            left: 0px;
          `;
        case POSITIONS[1]:
          return css`
            width: ${boxWidth}px;
            height: ${boxHeight}px;
            background: hsla(60, 100%, 50%, 0.7);
            transform: rotateY(180deg) ${`translateZ(${boxDepth / 2}px)`};
            top: 0px;
            left: 0px;
          `;
        case POSITIONS[2]:
          return css`
            width: ${boxDepth}px;
            height: ${boxHeight}px;
            background: hsla(120, 100%, 50%, 0.7);
            transform: rotateY(90deg) ${`translateZ(${boxWidth / 2}px)`};
            top: 0px;
            left: ${(boxWidth - boxDepth) / 2}px;
          `;
        case POSITIONS[3]:
          return css`
            width: ${boxDepth}px;
            height: ${boxHeight}px;
            background: hsla(180, 100%, 50%, 0.7);
            transform: rotateY(-90deg) ${`translateZ(${boxWidth / 2}px)`};
            top: 0px;
            left: ${(boxWidth - boxDepth) / 2}px;
          `;
        case POSITIONS[4]:
          return css`
            width: ${boxWidth}px;
            height: ${boxDepth}px;
            background: hsla(240, 100%, 50%, 0.7);
            transform: rotateX(90deg) ${`translateZ(${boxHeight / 2}px)`};
            top: ${(boxHeight - boxDepth) / 2}px;
            left: 0px;
          `;
        case POSITIONS[5]:
          return css`
            width: ${boxWidth}px;
            height: ${boxDepth}px;
            background: hsla(300, 100%, 50%, 0.7);
            transform: rotateX(-90deg) ${`translateZ(${boxHeight / 2}px)`};
            top: ${(boxHeight - boxDepth) / 2}px;
            left: 0px;
          `;
        default:
          break;
      }
    }
  }}
`;

export const FaceCopy = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 60px;
`;
