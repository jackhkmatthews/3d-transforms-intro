import React from "react";
import * as S from "./card-flip.styles";

interface Props {
  flip?: boolean;
}

const CardFlip: React.FC<Props> = ({ flip }: Props) => {
  return (
    <S.CardFlip>
      <S.Card flip={flip}>
        <S.CardFace front={true}>
          <h2>front</h2>
        </S.CardFace>
        <S.CardFace front={false}>
          <h2>back</h2>
        </S.CardFace>
      </S.Card>
    </S.CardFlip>
  );
};

export default CardFlip;
