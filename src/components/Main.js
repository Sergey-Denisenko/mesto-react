import React from 'react';
import Card from './Card';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import PopupWithForm from './PopupWithForm';

function Main({onEditAvatar, onEditProfile, onAddPlace, onClose, closeAllPopups, cards, onCardLike, onCardDelete, setOnClose}) {

  const actualUserData = React.useContext(CurrentUserContext); //Подписка на контекст

  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false); //Переменная состояния
  const [selectedCard, setSelectedCard] = React.useState(); //Переменная состояния
  const [isOpen, setIsOpen] = React.useState(false); //Переменная состояния

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsOpen(!isOpen);
    setOnClose(false);
  }
  const resetSelectedCardInImagePopup = () => {
    setSelectedCard();
  }

  const handleCardDeletePopup = (card) => {
    setIsCardDeletePopupOpen(!isCardDeletePopupOpen);
    onCardDelete(card);
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <button onClick={onEditAvatar} type="button" className="profile__avatar-button" style={{ backgroundImage: `url(${actualUserData.avatar}`, minWidth: '120px'}} />
          <div className="profile__data">
            <div className="profile__info">
              <h1 className="profile__title-name">{actualUserData.name}</h1>
              <p className="profile__subtitle-about">{actualUserData.description}</p>
            </div>
            <button onClick={onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button" />
        </section>

        <section className="card-container">
          {cards.map((card) => (
            <div key={card._id}>
              <Card card={card} onCardClick={handleCardClick} onCardLike={onCardLike} onCardDeleteClick={handleCardDeletePopup} />
            </div>
          ))}
        </section>
      </main>
      {/* <PopupWithForm name="card-delete" title="Вы уверены?" isOpen={isCardDeletePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups && closeDeleteCardPopup} /> */}
      <ImagePopup card={selectedCard} onClose={onClose} closeAllPopups={closeAllPopups} resetSelectedCardInImagePopup={resetSelectedCardInImagePopup}/>
    </>
  );
}

export default Main;
