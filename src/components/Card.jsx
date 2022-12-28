import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Card = ({ image, name, title, quote, css }) => {
  return (
    <article className={css}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Card;
