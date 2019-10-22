import React from "react";
import * as S from "./tetrahedron.styles";

export const POSITIONS = ["front", "right", "left", "bottom"];
export const colors = [
  "hsla(0, 100%, 50%, 0.7)",
  "hsla(60, 100%, 50%, 0.7)",
  "hsla(120, 100%, 50%, 0.7)",
  "hsla(180, 100%, 50%, 0.7)"
];

interface Props {
  sideLength: number;
  frontFace: string;
}
const Tetrahedron: React.FC<Props> = ({ sideLength, frontFace }: Props) => {
  const triangleHeight = Math.sqrt(
    sideLength * sideLength - (sideLength / 2) * (sideLength / 2)
  );
  const points = `0 ${triangleHeight},${sideLength /
    2} 0,${sideLength} ${triangleHeight}`;
  return (
    <S.Scene width={sideLength} height={triangleHeight}>
      <S.Tetrahedron
        width={sideLength}
        height={triangleHeight}
        frontFace={frontFace}
      >
        {POSITIONS.map((position, index) => {
          return (
            <S.Face
              height={triangleHeight}
              width={sideLength}
              position={position}
              key={position}
            >
              <S.Polygon
                points={points}
                fill={colors[index]}
                stroke="black"
                strokeWidth="1"
              />
              <text
                y={(2 * triangleHeight) / 3}
                x={sideLength / 2}
                textAnchor="centre"
              >
                {position}
              </text>
            </S.Face>
          );
        })}
      </S.Tetrahedron>
    </S.Scene>
  );
};

export default Tetrahedron;

/* <S.Face position={position} key={position} sideLength={sideLength}>
              <S.FaceCopy>{position}</S.FaceCopy>
            </S.Face> */
