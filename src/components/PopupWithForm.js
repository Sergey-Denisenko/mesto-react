import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, closeAllPopups, children}) {

  if (onClose === true) {
    document.querySelector(`.popup`).classList.remove('popup_opened');
  }

  return (
    <div className={`popup popup_type_${name} popup__overlay ${isOpen ? 'popup_opened' : ''}`}>
      <form id="form-popup" className="popup__container popup__form" noValidate name={name}>
        <h2 className="popup__form-title">{title}</h2>
        <fieldset className="popup__form-profile popup__fieldset">
          {children}
          <button disabled type="submit" className="popup__form-submit popup__button popup__button_disabled">Сохранить</button>
        </fieldset>
        <button onClick={closeAllPopups} type="button" className="popup__form-close-button popup__close-button"></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
