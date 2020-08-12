import React from 'react';

function ImagePopup({card, onClose}) {


// let cardsss = {card}.map();

// {console.log('cardsss')};
// {console.log(cardsss)};

{console.log('typeof card')};
{console.log(typeof card)};
{console.log('card')};
{console.log(card)};
{console.log('card.name')};
{console.log( card.name )};

function handlerPopupImageOpened() {
  document.querySelector('.popup-image').classList.toggle('popup-image_opened');
}

if (card !== undefined) {handlerPopupImageOpened()};

  return (

    <div className="popup-image popup popup__overlay">
      <div className="popup-image__container">
        <button type="button" className="popup-image__close-button popup__close-button" onClick={onClose, handlerPopupImageOpened}/>
        <img className="popup-image__image" src='#' alt="card.name" />
        <h3 className="popup-image__title">card.name</h3>
      </div>
    </div>

  );
}

export default ImagePopup;
