import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  // const currentUser = React.useContext(CurrentUserContext);

  const avatarRef = React.useRef('');

  const [avatar, setAvatar] = React.useState('');

  // function handleChangeAvatar(evt) {
  //   setAvatar(evt.target.value);
  // }

  // React.useEffect(() => {
  //   setAvatar(currentUser.avatar);
  // }, [currentUser]);

  // function handleClick() {
  //   avatarRef.current(); // вызываем нужный метод на поле current объекта
  // }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,//: avatarRef/* Значение инпута, полученное с помощью рефа */,
    });
    console.log('avatarRef3');
console.log(avatarRef.current.value);
    // console.log('avatarRef.current.focus()');
    // console.log(avatarRef.current.focus());
    // console.log('avatarRef.current.textContent');
    // console.log(avatarRef.current.textContent);
  }


  return(
    <PopupWithForm name="avatar-update" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
    <input ref={avatarRef} id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
    {/* <input onChange={handleChangeAvatar} id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/> */}
    <span id="link-input_update-avatar-error" className="popup__error" />
  </PopupWithForm>

// <PopupWithForm name="avatar-update" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={onClose} closeAllPopups={closeAllPopups}>
// <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
// <span id="link-input_update-avatar-error" className="popup__error" />
// </PopupWithForm>
  )
}


export default EditAvatarPopup;
