import React from 'react';
import Card from './Card';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CurrentCardsContext } from '../contexts/CurrentCardsContext';

import api from '../utils/api';

// function Main({onEditAvatar, onEditProfile, onAddPlace, object, cards, onClose, closeAllPopups}) {
function Main({onEditAvatar, onEditProfile, onAddPlace, onClose, closeAllPopups, setCards, onCardLike, onCardDelete}) {

  const actualUserData = React.useContext(CurrentUserContext); //Подписка на контекст
  console.log('actualUserData2');
console.log(actualUserData);
  const cards = React.useContext(CurrentCardsContext); //Подписка на контекст

  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false); //Переменная состояния
  const [selectedCard, setSelectedCard] = React.useState(); //Переменная состояния
  const [isOpen, setIsOpen] = React.useState(false); //Переменная состояния


  // const handleCardClick = (card) => {
  const handleCardClick = (card) => {
    // setSelectedCard(card);
    setSelectedCard(card);
    setIsOpen(!isOpen);
  }
  const closeDeleteCardPopup = () => {
    setIsOpen(false);
    setSelectedCard();
    setIsCardDeletePopupOpen(false);
  }
  const handleCardDeletePopup = () => {
    setIsCardDeletePopupOpen(!isCardDeletePopupOpen);
  }
//----------------Фуекция пересена в APP - CARDS
  //Функция проставления лайка
  // function handleCardLike(card) {
  //   const isLiked = card.likes.some(i => i._id === actualUserData._id);

  //   if (!isLiked) {
  //     api.likePlus(card._id)
  //     .then((newCard) => {
  //       const newCards = cards.map((item) => item._id === card._id ? newCard : item);
  //       setCards(newCards);
  //     });
  //   }
  //   if (isLiked) {
  //     api.likeMinus(card._id)
  //     .then((newCard) => {
  //       const newCards = cards.map((item) => item._id === card._id ? newCard : item);
  //       setCards(newCards);
  //     });
  //   }
  // }
//----------------Фуекция пересена в APP - CARDS
  // function handleCardDelete(card) {
  //   api.deleteCardFromServer(card._id)
  //   .then(() => {
  //     const newCards = cards.filter((item) => item._id !== card._id ? true : false);
  //     setCards(newCards);
  //   });
  // };

// console.log('actualUserData');
// console.log(actualUserData);
  return (
    <>
      <main className="content">
        <section className="profile">
          {/* <button onClick={onEditAvatar} type="button" className="profile__avatar-button" style={{ backgroundImage: `url(${object.userAvatar}`, backgroundSize: `contain`, minWidth: '120px'}} /> */}
          <button onClick={onEditAvatar} type="button" className="profile__avatar-button" style={{ backgroundImage: `url(${actualUserData.avatar}`, backgroundSize: `contain`, minWidth: '120px'}} />
          <div className="profile__data">
            <div className="profile__info">
              {/* <h1 className="profile__title-name">{object.userName}</h1> */}
              <h1 className="profile__title-name">{actualUserData.name}</h1>
              {/* <p className="profile__subtitle-about">{object.userDescription}</p> */}
              <p className="profile__subtitle-about">{actualUserData.description}</p>
            </div>
            <button onClick={onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button" />
        </section>

        <section className="card-container">
          {/* {cards.map((card) => ( */}
          {cards.map((card) => (
            <div key={card._id}>
              <Card card={card} onCardClick={handleCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
              {/* <Card card={card} onCardClick={handleCardClick} onDeleteCard={handleCardDeleteClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/> */}
            </div>
          ))}
        </section>

      </main>
      {/* <PopupWithForm name="card-delete" title="Вы уверены?" isOpen={isCardDeletePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups && closeDeleteCardPopup} /> */}
      <ImagePopup card={selectedCard} onClose={onClose} closeAllPopups={closeAllPopups && closeDeleteCardPopup}/>
    </>
  );
}

export default Main;
