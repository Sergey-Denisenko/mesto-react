import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ name: '', description: '', avatar: ' ', _id: '' });

  React.useEffect(() => {
    Promise.all([
      api.getUserDataDefaultFromServer(),
      api.getCardDefaultFromServer()
    ])
    .then(([userData, cardDefault]) => {
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


  function handleAddPlaceSubmit(userCardData) {
    api.addNewCardToServer(userCardData)
    .then((newCard) => {
      setCards(
        [...cards, newCard]
      );
      closeAllPopups();
    })
    .catch((err) => {
      console.error(err);
    })
    return () => {
    }
  }

//Функция проставления лайка
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.likePlus(card._id)
      .then((newCard) => {
        const newCards = cards.map((item) => item._id === card._id ? newCard : item);
        setCards(newCards);
      });
    }
    if (isLiked) {
      api.likeMinus(card._id)
      .then((newCard) => {
        const newCards = cards.map((item) => item._id === card._id ? newCard : item);
        setCards(newCards);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCardFromServer(card._id)
    .then(() => {
      const newCards = cards.filter((item) => item._id !== card._id ? true : false);
      setCards(newCards);
      closeAllPopups();
    });
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />

          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onClose={onClose} closeAllPopups={closeAllPopups}
          cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} setOnClose={setOnClose}/>

          <Footer />

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
