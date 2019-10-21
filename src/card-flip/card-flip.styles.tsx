import styled, { css } from "styled-components/macro";

interface Props {
  front?: boolean;
  flip?: boolean;
}

export const CardFlip = styled.div`
  width: 200px;
  height: 260px;
  perspective: 600px;
  border: 1px solid grey;
`;

export const Card = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${props =>
    props.flip ? `translateX(-100%) rotateY(180deg)` : `rotateY(0)`};
  transform-origin: center right;
`;

export const CardFace = styled.div<Props>`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  ${props => {
    if (props.front) {
      return css`
        background-color: rebeccapurple;
      `;
    } else {
      return css`
        background-color: rosybrown;
        transform: rotateY(180deg);
      `;
    }
  }}
`;
