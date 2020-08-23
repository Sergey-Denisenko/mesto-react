import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

const currentUser = React.useContext(CurrentUserContext);

React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.description);
}, [currentUser]);


  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      description,
    });
    console.log('name');
    console.log(name);
    console.log('description');
    console.log(description);
  }


  return(
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      {/* <input id="name-input-profile" type="text" value={name} onChange={handleChangeName} className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required /> */}
      <input id="name-input-profile" type="text" value={name} onChange={handleChangeName} className="popup__form-name popup__input" name="name" minLength="2" maxLength="40" autoComplete="off" required />
      <span id="name-input-profile-error" className="popup__error" />
      {/* <input id="prof-input" type="text" value={description} onChange={handleChangeDescription} className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required /> */}
      <input id="prof-input" type="text" value={description} onChange={handleChangeDescription} className="popup__form-about popup__input" name="prof" minLength="2" maxLength="200" autoComplete="off" required />
      <span id="prof-input-error" className="popup__error" />
    </PopupWithForm>
  )
}
{/* <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
  <input id="name-input-profile" type="text" className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required />
  <span id="name-input-profile-error" className="popup__error" />
  <input id="prof-input" type="text" className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required />
  <span id="prof-input-error" className="popup__error" />
</PopupWithForm> */}

export default EditProfilePopup;
