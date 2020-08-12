import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (

        // <div key={card._id}>
          <div className="card">
            <img className="card__image" alt="" src="" style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick} />
            <div className="card__info">
              <h2 className="card__title">{card.name}</h2>
              <button type="button" className="card__like"></button>
              <p className="card__like-counter">{card.likes.length}</p>
            </div>
            <button type="button" className="card__trash"></button>
          </div>
        // </div>
  );
}

export default Card;
