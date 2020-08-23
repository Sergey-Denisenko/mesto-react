import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { CurrentCardsContext } from '../contexts/CurrentCardsContext';

function Card({card, onCardClick, onDeleteCard, onCardLike, onCardDelete}) {
// function Card({onCardClick, onDeleteCard}) {

  const actualUserData = React.useContext(CurrentUserContext);
  // const actualCardData = React.useContext(CurrentCardsContext);

  function handleClick() {
    onCardClick(card);
    // onCardClick(actualCardData);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const isOwn = card.owner._id === actualUserData._id;
  // console.log('isOwn');
  // console.log(isOwn);
  const cardDeleteButtonClassName = (
    `card__trash ${!isOwn ? 'card__trash_disabled' : ''}`
  );
  const isLiked = card.likes.some(i => i._id === actualUserData._id);
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active-black' : ''}`
  );
  // (
  //   `card__like ${isLiked ? 'card__trash_visible' : 'card__trash_disabled'}`
  // );



  return (
    <div className="card">
      <img className="card__image" alt="" src="" style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick} />
      {/* <img className="card__image" alt="" src="" style={{ backgroundImage: `url(${actualCardData.link})`}} onClick={handleClick} /> */}
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        {/* <h2 className="card__title">{actualCardData.name}</h2> */}
        <button type="button" className={`card__like ${cardLikeButtonClassName}`} onClick={handleLikeClick}/>
        <p className="card__like-counter">{card.likes.length}</p>
        {/* <p className="card__like-counter">{actualCardData.likes.length}</p> */}
      </div>
      <button type="button" className={`card__trash ${cardDeleteButtonClassName}`} onClick={handleDeleteClick} />
      {/* <button type="button" className={`card__trash ${cardDeleteButtonClassName}`} onClick={onDeleteCard} /> */}
    </div>
  );
}

export default Card;



// api.likePlus(item._id)
//   .then(() => {
//     card.cardLikePlus();
//     card.regenLikesCounter();
//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
//   });


// api.likeMinus(item._id)
//   .then(() => {
//     card.cardLikeMinus();
//     card.regenLikesCounter();
//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
//   });
