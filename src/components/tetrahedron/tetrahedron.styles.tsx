import styled, {
  css,
  FlattenSimpleInterpolation
} from "styled-components/macro";
import { POSITIONS } from "./tetrahedron.component";

interface Props {
  position?: string;
  frontFace?: string;
  width?: number;
  height?: number;
}

type PropDependentStyleBlock = undefined | 0 | FlattenSimpleInterpolation;

export const Scene = styled.div<Props>`
  ${({ width, height }): PropDependentStyleBlock =>
    width &&
    height &&
    css`
      width: ${width}px;
      height: ${height}px;
    `};
  perspective: 600px;
  transition: all 2s ease-in-out;
`;

export const Tetrahedron = styled.div<Props>`
  position: relative;
  transition: all 2s ease-in-out;
  transform-style: preserve-3d;
  ${({ width, height }): PropDependentStyleBlock =>
    width &&
    height &&
    css`
      width: ${width}px;
      height: ${height}px;
    `};
  ${({ frontFace }): PropDependentStyleBlock => {
    if (frontFace) {
      switch (frontFace) {
        case POSITIONS[0]:
          return css`
            transform: rotateY(0deg);
          `;
        case POSITIONS[1]:
          return css`
            transform: rotateY(-120deg);
          `;
        case POSITIONS[2]:
          return css`
            transform: rotateY(120deg);
          `;
        case POSITIONS[3]:
          return css`
            transform: rotateX(90deg) rotateY(180deg);
          `;
        default:
          break;
      }
    }
  }}
`;

export const Face = styled.svg<Props>`
  position: absolute;
  transition: all 2s ease-in-out;
  transform-origin: center center;
  ${({ position, width, height }): PropDependentStyleBlock => {
    if (position && width && height) {
      switch (position) {
        case POSITIONS[0]:
          return css`
            transform: rotateY(0deg) rotateX(19.47deg)
              ${`translateZ(${height / 6}px)`};
          `;
        case POSITIONS[1]:
          return css`
            transform: rotateY(120deg) rotateX(19.47deg)
              ${`translateZ(${height / 6}px)`};
          `;
        case POSITIONS[2]:
          return css`
            transform: rotateY(-120deg) rotateX(19.47deg)
              ${`translateZ(${height / 6}px)`};
          `;
        case POSITIONS[3]:
          return css`
            transform: rotateX(90deg) rotateY(180deg)
              ${`translateZ(${height / 4}px)`};
            transform-origin: center 66%;
          `;
        default:
          break;
      }
    }
  }}
`;

export const Polygon = styled.polygon``;

export const FaceCopy = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 60px;
`;
