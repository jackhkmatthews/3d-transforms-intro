import styled from "styled-components/macro";

interface Props {
  rotateY?: number;
  perspective?: number;
  perspectiveOrigin?: string;
}

export const PerspectiveProperty = styled.div<Props>`
  display: inline-block;
  border: 1px black solid;
  perspective: ${(props): string => `${props.perspective}px`};
  perspective-origin: ${(props): string => `${props.perspectiveOrigin}`};
  line-height: 0;
  margin-bottom: 50px;
`;

export const Inner = styled.div<Props>`
  display: inline-block;
  height: 200px;
  width: 200px;
  background-color: royalblue;
  transition: all 1s ease;
  transform: ${(props): string => `rotateY(${props.rotateY}deg)`};
`;
