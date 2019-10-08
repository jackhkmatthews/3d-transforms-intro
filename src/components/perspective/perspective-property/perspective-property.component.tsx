import React from "react";
import * as S from "./perspective-property.styles";

interface Props {
  rotateY: number;
  perspective: number;
  perspectiveOriginX: number;
  perspectiveOriginY: number;
}

const PerspectiveProperty: React.FC<Props> = ({
  rotateY,
  perspective,
  perspectiveOriginX,
  perspectiveOriginY
}: Props) => {
  const perspectiveOrigin = `${perspectiveOriginX}% ${perspectiveOriginY}%`;
  return (
    <>
      <div>
        <S.PerspectiveProperty
          perspective={perspective}
          perspectiveOrigin={perspectiveOrigin}
        >
          <S.Inner rotateY={rotateY} />
        </S.PerspectiveProperty>
      </div>
      <div>
        <S.PerspectiveProperty
          perspective={perspective}
          perspectiveOrigin={perspectiveOrigin}
        >
          <S.Inner rotateY={rotateY} />
          <S.Inner rotateY={rotateY} />
          <S.Inner rotateY={rotateY} />
          <S.Inner rotateY={rotateY} />
        </S.PerspectiveProperty>
      </div>
    </>
  );
};

export default PerspectiveProperty;
