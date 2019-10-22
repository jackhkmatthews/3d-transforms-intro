import React from "react";
import * as S from "./box.styles";

export const POSITIONS = ["front", "back", "right", "left", "top", "bottom"];

interface Props {
  boxWidth: number;
  boxHeight: number;
  boxDepth: number;
  frontFace: string;
}
const Box: React.FC<Props> = (
  { boxWidth, frontFace, boxHeight, boxDepth }: Props = {
    boxWidth: 300,
    boxHeight: 200,
    boxDepth: 100,
    frontFace: "front"
  }
) => {
  return (
    <S.Scene boxWidth={boxWidth} boxHeight={boxHeight}>
      <S.Box
        boxWidth={boxWidth}
        boxDepth={boxDepth}
        boxHeight={boxHeight}
        frontFace={frontFace}
      >
        {POSITIONS.map(position => (
          <S.Face
            position={position}
            key={position}
            boxWidth={boxWidth}
            boxHeight={boxHeight}
            boxDepth={boxDepth}
          >
            <S.FaceCopy>{position}</S.FaceCopy>
          </S.Face>
        ))}
      </S.Box>
    </S.Scene>
  );
};

export default Box;
