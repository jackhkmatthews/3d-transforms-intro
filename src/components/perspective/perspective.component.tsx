import React from "react";
import * as S from "./perspective.styles";

interface Props {
  rotateY: number;
  perspective: number;
}

const Perspective: React.FC<Props> = ({ rotateY, perspective }: Props) => {
  return (
    <S.Perspective>
      <S.Inner rotateY={rotateY} perspective={perspective} />
    </S.Perspective>
  );
};

export default Perspective;
