import React from "react";
import * as S from "./cube.styles";

export const POSITIONS = ["front", "back", "right", "left", "top", "bottom"];

interface Props {
  boxWidth: number;
  frontFace: string;
}
const Cube: React.FC<Props> = (
  { boxWidth, frontFace }: Props = { boxWidth: 200, frontFace: "front" }
) => {
  return (
    <S.Scene boxWidth={boxWidth}>
      <S.Cube boxWidth={boxWidth} frontFace={frontFace}>
        {POSITIONS.map(position => (
          <S.Face position={position} key={position} boxWidth={boxWidth}>
            <S.FaceCopy>{position}</S.FaceCopy>
          </S.Face>
        ))}
      </S.Cube>
    </S.Scene>
  );
};

export default Cube;
