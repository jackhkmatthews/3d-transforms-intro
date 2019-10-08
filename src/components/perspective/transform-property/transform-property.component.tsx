import React from "react";
import * as S from "./transform-property.styles";

interface Props {
  rotateY: number;
  perspective: number;
  perspectiveOriginX: number;
  perspectiveOriginY: number;
}

const TransformProperty: React.FC<Props> = ({
  rotateY,
  perspective,
  perspectiveOriginX,
  perspectiveOriginY
}: Props) => {
  const perspectiveOrigin = `${perspectiveOriginX}% ${perspectiveOriginY}%`;
  return (
    <>
      <div>
        <S.TransformProperty>
          <S.Inner
            rotateY={rotateY}
            perspective={perspective}
            perspectiveOrigin={perspectiveOrigin}
          />
        </S.TransformProperty>
      </div>
      <div>
        <S.TransformProperty>
          <S.Inner
            rotateY={rotateY}
            perspective={perspective}
            perspectiveOrigin={perspectiveOrigin}
          />
          <S.Inner
            rotateY={rotateY}
            perspective={perspective}
            perspectiveOrigin={perspectiveOrigin}
          />
          <S.Inner
            rotateY={rotateY}
            perspective={perspective}
            perspectiveOrigin={perspectiveOrigin}
          />
          <S.Inner
            rotateY={rotateY}
            perspective={perspective}
            perspectiveOrigin={perspectiveOrigin}
          />
        </S.TransformProperty>
      </div>
    </>
  );
};

export default TransformProperty;
