import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {

  const [onClose, setOnClose] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]  = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]  = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setOnClose(!onClose);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsOpen(false);
    setSelectedCard();
  }

// Получение данных пользователя и массива карточек с сервера
  const [object, setObject] = React.useState({ userName: '', userDescription: '', userAvatar: ' '});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserDataDefaultFromServer()
    .then((data) => {
      return data;
    })
    .then((data) => {
      setObject({
        ...object,
        userName: data.name,
        userDescription: data.about,
        userAvatar: data.avatar,
      })
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
    return () => {
    };
  }, []);

  React.useEffect(() => {
    api.getCardDefaultFromServer()
    .then((data) => {
      return data;
    })
    .then((data) => {
      setCards(data)
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
    return () => {
    };
  }, []);

// Работа над окном попапа картинки
  const [selectedCard, setSelectedCard] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} object={object} cards={cards} onCardClick={handleCardClick}/>

        <Footer />

        <PopupWithForm name="avatar-update" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
          <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
          <span id="link-input_update-avatar-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm name="profile" title="Редактировать профиль"  isOpen={isEditProfilePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
          <input id="name-input-profile" type="text" className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required/>
          <span id="name-input-profile-error" className="popup__error"></span>
          <input id="prof-input" type="text" className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required/>
          <span id="prof-input-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm name="add-card" title="Новое место"  isOpen={isAddPlacePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
          <input id="name-input-add-card" type="text" className="popup-add-card__form-name popup__input" name="name" placeholder="Название" defaultValue="" minLength="1" maxLength="30" autoComplete="off" required/>
          <span id="name-input-add-card-error" className="popup__error"></span>
          <input id="link-input" type="url" className="popup-add-card__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
          <span id="link-input-error" className="popup__error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={onClose} closeAllPopups={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
