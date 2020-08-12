import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import api from './utils/api';

function App() {

  //PopupWithForm(props
    //, () => {
      //  const popup = document.querySelector('.popup');
        // if (popup.contains('popup-avatar-update')) {
        //   // <>
        //   //   <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
        //   //   <span id="link-input_update-avatar-error" className="popup__error"></span>
        //   // </>
        //   console.log('qwerty');
        //})
    //);
    // document.querySelector('.popup-avatar-update').classList.add('popup-avatar-update_opened');
    // document.querySelector('.popup-avatar-update').classList.add('popup_opened');
    //};

  // const [isOpen, setIsOpen] = React.useState(false);
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
    setSelectedCard();
  }



//-------------------------------------

  const [object, setObject] = React.useState({ userName: '', userDescription: '', userAvatar: ' '})
  const [cards, setCards] = React.useState([])

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
    // .finally(() => {
    //   renderLoading(false, tempSubmitButtonProfileFormTextContent, popupProfileFormSubmit);
    //   popupProfileForm.close();
    // })
  // }

    return () => {
    };
  }, [])

//--------------------------

  React.useEffect(() => {
    api.getCardDefaultFromServer()
    .then((data) => {
      return data;
    })
    .then((data) => {
      setCards(
        data
      )
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })

    return () => {
    };
  }, [])

//--------------------------

const [selectedCard, setSelectedCard] = React.useState()

const handleCardClick = (card) => {
  setSelectedCard(card);
  // console.log('card in handleCardClick');
  // console.log(card);
}

//--------------------------

  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} object={object} cards={cards} onCardClick={handleCardClick}/>

        <Footer />

        <PopupWithForm name="avatar-update" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
          <span id="link-input_update-avatar-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm name="profile" title="Редактировать профиль"  isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input id="name-input-profile" type="text" className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required/>
          <span id="name-input-profile-error" className="popup__error"></span>
          <input id="prof-input" type="text" className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required/>
          <span id="prof-input-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm name="add-card" title="Новое место"  isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input id="name-input-add-card" type="text" className="popup-add-card__form-name popup__input" name="name" placeholder="Название" defaultValue="" minLength="1" maxLength="30" autoComplete="off" required/>
          <span id="name-input-add-card-error" className="popup__error"></span>
          <input id="link-input" type="url" className="popup-add-card__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
          <span id="link-input-error" className="popup__error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          {/* {console.log('selectedCard in handleCardClick')}
          {console.log(selectedCard)}
          {console.log('selectedCard in handleCardClick name')}
          {console.log(selectedCard.name)} */}

        {/* </ImagePopup> */}

        <div className="popup-card-delete popup__overlay">
          <form className="popup-card-delete__container" noValidate>
            <h2 className="popup-card-delete__form-title">Вы уверены?</h2>
            <fieldset className="popup-card-delete__form-profile">
              <button type="submit" className="popup-card-delete__form-submit popup__button">Да</button>
            </fieldset>
            <button type="button" className="popup-card-delete__form-close-button popup__close-button"></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
