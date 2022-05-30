import React, { FC } from 'react';
import './card.scss';

type CardProps = {
    name: string;
    imgSrc: string;
    species: string;
}

const Card:FC<CardProps> = ({ name, imgSrc, species }) => {
  const a = 5;
  return (
    <div className="card">
      <div className="image__box">
        <img src={imgSrc} alt={name} width={300} />
      </div>
      <div className="info__box">
        <h2 className="title">{name}</h2>
        <h4 className="species">{species}</h4>
      </div>
    </div>
  );
};

export default Card;
