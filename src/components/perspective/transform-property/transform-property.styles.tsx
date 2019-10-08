import styled from "styled-components/macro";

interface Props {
  rotateY: number;
  perspective: number;
  perspectiveOrigin: string;
}

export const TransformProperty = styled.div`
  display: inline-block;
  border: 1px black solid;
  line-height: 0;
  margin-bottom: 50px;
`;

export const Inner = styled.div<Props>`
  display: inline-block;
  height: 200px;
  width: 200px;
  background-color: pink;
  transition: all 1s ease;
  transform: ${(props): string =>
    `perspective(${props.perspective}px) rotateY(${props.rotateY}deg)`};
  perspective-origin: ${(props): string => props.perspectiveOrigin};
`;
