import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import { CurrentUserContext, currentUserData } from '../contexts/CurrentUserContext';
import { CurrentCardsContext, currentCardsData } from '../contexts/CurrentCardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  const [onClose, setOnClose] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const closeAllPopups = () => {
    setOnClose(!onClose);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };

  function handleUpdateUser(userData) {
    api.setNewDataUser(userData)
    .then((userData) => {
      setCurrentUser({
        ...currentUser,
        name: userData.name,
        description: userData.about,
      });
      closeAllPopups();
    })
    .catch((err) => {
      console.error(err);
    })
    return () => {
    };
  }

  function handleUpdateAvatar(newAvatarLink) {
    api.avatarUpdate(newAvatarLink)
    .then((userData) => {
      setCurrentUser({
        ...currentUser,
        avatar: userData.avatar,
      });
      closeAllPopups();
    })
    .catch((err) => {
      console.error(err);
    })
    return () => {
    };
  }


// Получение данных пользователя и массива карточек с сервера
  //const [object, setObject] = React.useState({ userName: '', userDescription: '', userAvatar: ' '});
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({ name: '', description: '', avatar: ' ', _id: '' });


  React.useEffect(() => {
    Promise.all([
      api.getUserDataDefaultFromServer(),
      api.getCardDefaultFromServer()
    ])
    // .then(([userData, cardDefault]) => {
    //   return [userData, cardDefault];
    // })
    .then(([userData, cardDefault]) => {
      // setObject({
      //   ...object,
      //   userName: userData.name,
      //   userDescription: userData.about,
      //   userAvatar: userData.avatar,
      // });
      setCards(cardDefault);

      setCurrentUser({
        ...currentUser,
        name: userData.name,
        description: userData.about,
        avatar: userData.avatar,
        _id: userData._id,
      });
    })
    .catch((err) => {
      console.error(err);
    })
    return () => {
    };
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentCardsContext.Provider value={cards}>
          <div className="page">
            <Header />

              {/* {console.log('currentUser')}
              {console.log(currentUser)} */}
            {/* <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} object={object} cards={cards} onClose={onClose} closeAllPopups={closeAllPopups}/> */}
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onClose={onClose} closeAllPopups={closeAllPopups} setCards={setCards}/>

            <Footer />

            {/* <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> */}
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
            {/* <PopupWithForm name="avatar-update" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
              <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
              <span id="link-input_update-avatar-error" className="popup__error" />
            </PopupWithForm> */}

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            {/* <PopupWithForm name="profile" title="Редактировать профиль"  isOpen={isEditProfilePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
              <input id="name-input-profile" type="text" className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required/>
              <span id="name-input-profile-error" className="popup__error" />
              <input id="prof-input" type="text" className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required/>
              <span id="prof-input-error" className="popup__error" />
            </PopupWithForm> */}

            <PopupWithForm name="add-card" title="Новое место"  isOpen={isAddPlacePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
              <input id="name-input-add-card" type="text" className="popup-add-card__form-name popup__input" name="name" placeholder="Название" defaultValue="" minLength="1" maxLength="30" autoComplete="off" required/>
              <span id="name-input-add-card-error" className="popup__error" />
              <input id="link-input" type="url" className="popup-add-card__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
              <span id="link-input-error" className="popup__error" />
            </PopupWithForm>
          </div>
        </CurrentCardsContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
