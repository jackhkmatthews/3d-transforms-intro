import styled from "styled-components/macro";

interface Props {
  transform?: string;
}

export const TransformFunction3d = styled.div<Props>`
  display: inline-block;
  border: 1px black solid;
  line-height: 0;
  perspective: 500px;
`;

export const Inner = styled.div<Props>`
  display: inline-block;
  height: 200px;
  width: 200px;
  background-color: pink;
  transition: all 1s ease;
  transform: ${(props): string => `${props.transform}`};
`;
