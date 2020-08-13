import React from 'react';

function ImagePopup({card, onClose, isOpen}) {


// let cardsss = {card}.map();

// {console.log('cardsss')};
// {console.log(cardsss)};

{console.log('typeof card')};
{console.log(typeof card)};
{console.log('card')};
{console.log(card)};
{console.log('card.name')};
// {console.log( card.name )};


// const [isOpen, setIsOpen] = React.useState(false)
// let openedClass = '';
// if (isOpen) {
//   openedClass = 'popup-image_opened';
// }
// return <div className={`popup-image ${openedClass}`}></div>

// React.useEffect(() => {





// function handlerPopupImageOpened() {
//   document.querySelector('.popup-image').classList.toggle('popup-image_opened');
// }

// if (card !== undefined) {handlerPopupImageOpened()};

  return (

    <div className={`popup-image popup popup__overlay ${card ? 'popup-image_opened' : ''}`}>
    {/* ${openedClass}`}> */}
      {card &&  <div className="popup-image__container">
        <button type="button" className="popup-image__close-button popup__close-button" onClick={onClose ? (evt) => {evt.target.closest('.popup-image').classList.remove('popup-image_opened')} : ''}/>

        {/* onClick={onClose ? (evt) => {evt.target.closest('.popup-image').classList.remove('popup-image_opened')} : ''} */}

        {/* , handlerPopupImageOpened}/> */}
        <img className="popup-image__image" src={card.link} alt={card.name} />
        <h3 className="popup-image__title">{card.name}</h3>
      </div> }
    </div>

  );
}

export default ImagePopup;
