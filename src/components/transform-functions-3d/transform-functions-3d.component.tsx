import React from "react";
import * as S from "./transform-functions-3d.styles";

interface Props {
  translateX: number;
  translateY: number;
  translateZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  rotateAngle: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
}

const TransformFunction3d: React.FC<Props> = ({
  translateX,
  translateY,
  translateZ,
  rotateX,
  rotateY,
  rotateZ,
  rotateAngle,
  scaleX,
  scaleY,
  scaleZ
}: Props) => {
  const translate = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`;
  const scale = `scale3d(${scaleX}, ${scaleY}, ${scaleZ})`;
  const rotate = `rotate3d(${rotateX}, ${rotateY}, ${rotateZ}, ${rotateAngle}deg)`;
  const transform = `${translate} ${rotate} ${scale}`;
  return (
    <S.TransformFunction3d>
      <S.Inner transform={transform} />
    </S.TransformFunction3d>
  );
};

export default TransformFunction3d;
