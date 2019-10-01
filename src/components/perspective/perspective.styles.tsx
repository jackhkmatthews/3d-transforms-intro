import styled from "styled-components/macro";

interface Props {
  rotateY: number;
  perspective: number;
}

export const Perspective = styled.div`
  display: inline-block;
  height: 200px;
  width: 200px;
  border: 1px black solid;
`;

export const Inner = styled.div<Props>`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: pink;
  transition: all 1s ease;
  transform: ${(props): string =>
    `perspective(${props.perspective}px) rotateY(${props.rotateY}deg)`};
`;
