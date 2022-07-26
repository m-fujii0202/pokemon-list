import React from "react";
import styled from "styled-components";
import { DetailedPokemonType } from "../../types/pokemon";


// TODO：Propsの場合には、各コンポーネントでPropsTypeを作成する
type PropsType = {
  pokemon:DetailedPokemonType;
}

const Card = (props: PropsType ) => {
  const { pokemon } = props;
  return (
    <SCard>
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <ScardName>{pokemon.name}</ScardName>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <ScardInfo>
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ：{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </ScardInfo>
    </SCard>
  );
};

const SCard = styled.div`
  width: 290px;
  box-shadow: 24px 26px 22px 6px #777777;
  border-radius: 10px;
  background-color: #fff;
`;
const ScardName = styled.h3`
  padding: 0;
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 0;
`;

const ScardInfo = styled.div`
  text-align: center;
`;

export default Card;
