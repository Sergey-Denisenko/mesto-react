import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, onSubmit, children}) {

  if (onClose === true) {
    document.querySelector(`.popup`).classList.remove('popup_opened');
  }

  return (
    <div className={`popup popup_type_${name} popup__overlay ${isOpen ? 'popup_opened' : ''}`}>
      <form id="form-popup" className="popup__container popup__form" noValidate name={name} onSubmit={onSubmit}>
        <h2 className="popup__form-title">{title}</h2>
        <fieldset className="popup__form-profile popup__fieldset">
          {children}
          {isOpen && (name === "card-delete") ? (
            <button type="submit" className="popup-card-delete__form-submit popup__button">Да</button>
          ) : (
            <button type="submit" className="popup__form-submit popup__button">Сохранить</button>
            // <button disabled type="submit" className="popup__form-submit popup__button popup__button_disabled">Сохранить</button>
          )}
        </fieldset>
        <button onClick={onClose} type="button" className="popup__form-close-button popup__close-button" />
      </form>
    </div>
  );
}

export default PopupWithForm;
