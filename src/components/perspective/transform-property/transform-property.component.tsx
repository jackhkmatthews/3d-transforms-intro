import React from "react";
import * as S from "./transform-property.styles";

interface Props {
  rotateY: number;
  perspective: number;
}

const TransformProperty: React.FC<Props> = ({
  rotateY,
  perspective
}: Props) => {
  return (
    <>
      <div>
        <S.TransformProperty>
          <S.Inner rotateY={rotateY} perspective={perspective} />
        </S.TransformProperty>
      </div>
      <div>
        <S.TransformProperty>
          <S.Inner rotateY={rotateY} perspective={perspective} />
          <S.Inner rotateY={rotateY} perspective={perspective} />
          <S.Inner rotateY={rotateY} perspective={perspective} />
          <S.Inner rotateY={rotateY} perspective={perspective} />
        </S.TransformProperty>
      </div>
    </>
  );
};

export default TransformProperty;
