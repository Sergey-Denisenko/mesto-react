import React from 'react';
import Card from './Card';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function Main({onEditAvatar, onEditProfile, onAddPlace, object, cards, onClose, closeAllPopups}) {

  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsOpen(!isOpen);
  }
  const closeDeleteCardPopup = () => {
    setIsOpen(false);
    setSelectedCard();
    setIsCardDeletePopupOpen(false);
  }
  const handleCardDeleteClick = () => {
    setIsCardDeletePopupOpen(!isCardDeletePopupOpen);
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <button onClick={onEditAvatar} type="button" className="profile__avatar-button" style={{ backgroundImage: `url(${object.userAvatar}`, backgroundSize: `contain`, minWidth: '120px'}} />
          <div className="profile__data">
            <div className="profile__info">
              <h1 className="profile__title-name">{object.userName}</h1>
              <p className="profile__subtitle-about">{object.userDescription}</p>
            </div>
            <button onClick={onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button" />
        </section>

        <section className="card-container">
          {cards.map((card) => (
            <div key={card._id}>
              <Card card={card} onCardClick={handleCardClick} onDeleteCard={handleCardDeleteClick} />
              {/* <Card card={card} onCardClick={onCardClick} onDeleteCard={onDeleteCard} /> */}
            </div>
          ))}
        </section>

      </main>
      <PopupWithForm name="card-delete" title="Вы уверены?" isOpen={isCardDeletePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups && closeDeleteCardPopup} />
      <ImagePopup card={selectedCard} onClose={onClose} closeAllPopups={closeAllPopups && closeDeleteCardPopup}/>
    </>
  );
}

export default Main;
