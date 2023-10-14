import React from 'react'

const Card = ({ pokemon }) => {
  return (
    <div className="card">
        <div className="cardImg">
            <img src={pokemon.sprites.front_default} />
        </div>
        <h3 className="cardName">{pokemon.name}</h3>
        <dvi className="cardTypes">
            <div>タイプ</div>
            {pokemon.types.map((type) => {
                return (
                    <div>
                        <span className="typeName">{type.type.name}</span>
                    </div>
                );
            })}
        </dvi>
        <div className="cardInfo">
            <div className="cardData">
                <div className="cardData">
                    <p className="title">重さ : {pokemon.weight}</p>
                </div>
            </div>
            <div className="cardData">
                <div className="cardData">
                    <p className="title">高さ : {pokemon.height}</p>
                </div>
            </div>
            <div className="cardData">
                <div className="cardData">
                    <p className="title">重さ : {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card