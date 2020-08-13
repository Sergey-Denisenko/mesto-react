import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, object, cards, onCardClick}) {
  // userName, userDescription, userAvatar, dataUserInfo}) {

  return (
    <main className="content">
      <section className="profile">
        <button onClick={onEditAvatar} type="button" className="profile__avatar-button" style={{ backgroundImage: `url(${object.userAvatar}`, backgroundSize: `contain`, minWidth: '120px'}}></button>
        <div className="profile__data">
          <div className="profile__info">
            <h1 className="profile__title-name">{object.userName}</h1>
            <p className="profile__subtitle-about">{object.userDescription}</p>
          </div>
          <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>

      <section className="card-container">
        {cards.map((card) => (
          <div key={card._id}>
            <Card card={card} onCardClick={onCardClick} />
          </div>
        ))}
      {/* {cards.map((item, i) => (
        <div key={item._id}>
          <div className="card">
            <img className="card__image" alt="" src="" style={{ backgroundImage: `url(${item.link})`}}/>
            <div className="card__info">
              <h2 className="card__title">{item.name}</h2>
              <button type="button" className="card__like"></button>
              <p className="card__like-counter">{item.likes.length}</p>
            </div>
            <button type="button" className="card__trash"></button>
          </div>
        </div>
      ))} */}
      </section>
    </main>
  );
}

export default Main;
