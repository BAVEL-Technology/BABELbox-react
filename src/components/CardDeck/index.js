import React from 'react';
import Deck from "./deck.js";

const CardDeck = () => {

  const cardDeck = new Deck();
  cardDeck.shuffle();
  console.log(cardDeck.cards);

  return (
    <div>
      
    </div>
  );
};

export default CardDeck;
