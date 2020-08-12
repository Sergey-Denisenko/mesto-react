import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children}) {

  return (
    <>
      <div className={`popup popup_type_${name} popup__overlay ${isOpen ? 'popup_opened' : ''}`}>
        {console.log('props.name прошел')};
        <form id="form-popup" className="popup__container popup__form" noValidate name={name}>
          <h2 className="popup__form-title">{title}</h2>
          {/* <h2 className="popup__form-title">Обновить аватар</h2> */}
          <fieldset className="popup__form-profile popup__fieldset">

            ${children}

            <button disabled type="submit" className="popup__form-submit popup__button popup__button_disabled">Сохранить</button>
          </fieldset>
          <button onClick={onClose ? (evt) => {evt.target.closest('.popup').classList.remove('popup_opened')} : ''} type="button" className="popup__form-close-button popup__close-button "></button>
        </form>
      </div>

      {/* <div className="popup popup-profile popup__overlay">
        <form className="popup__container popup__form" noValidate>
          <h2 className="popup__form-title">Редактировать профиль</h2>
          <fieldset className="popup__form-profile popup__fieldset">
            <input id="name-input-profile" type="text" className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required/>
            <span id="name-input-profile-error" className="popup__error"></span>
            <input id="prof-input" type="text" className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required/>
            <span id="prof-input-error" className="popup__error"></span>
            <button disabled type="submit" className="popup__form-submit popup__button popup__button_disabled">Сохранить</button>
          </fieldset>
          <button type="button" className="popup__form-close-button popup__close-button"></button>
        </form>
      </div> */}

      {/* <div className="popup popup-add-card popup__overlay">
          <form className="popup-add-card__container popup__form" noValidate>
            <h2 className="popup-add-card__form-title">Новое место</h2>
            <fieldset className="popup-add-card__form-profile popup__fieldset">
              <input id="name-input-add-card" type="text" className="popup-add-card__form-name popup__input" name="name" placeholder="Название" defaultValue="" minLength="1" maxLength="30" autoComplete="off" required/>
              <span id="name-input-add-card-error" className="popup__error"></span>
              <input id="link-input" type="url" className="popup-add-card__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
              <span id="link-input-error" className="popup__error"></span>
              <button disabled type="submit" className="popup-add-card__form-submit popup__button popup__button_disabled">Создать</button>
            </fieldset>
            <button type="button" className="popup-add-card__form-close-button popup__close-button"></button>
          </form>
        </div> */}

    </>
  );
}

// ReactDOM.render((
//   <>
//     <PopupWithForm name='popup-avatar-update popup-avatar-update_opened' title='Обновить аватар' />
//     {/* <PopupWithForm name='popup-avatar-update popup-avatar-update_opened' title='Обновить аватар' />
//     <PopupWithForm name='popup-avatar-update popup-avatar-update_opened' title='Обновить аватар' /> */}
//   </>
// ), document.querySelector('#root'));


        {/* <div className="popup popup-profile popup__overlay">
          <form className="popup__container popup__form" noValidate>
            <h2 className="popup__form-title">Редактировать профиль</h2>
            <fieldset className="popup__form-profile popup__fieldset">
              <input id="name-input-profile" type="text" className="popup__form-name popup__input" name="name" defaultValue="Ваше имя" minLength="2" maxLength="40" autoComplete="off" required/>
              <span id="name-input-profile-error" className="popup__error"></span>
              <input id="prof-input" type="text" className="popup__form-about popup__input" name="prof" defaultValue="О себе" minLength="2" maxLength="200" autoComplete="off" required/>
              <span id="prof-input-error" className="popup__error"></span>
              <button disabled type="submit" className="popup__form-submit popup__button popup__button_disabled">Сохранить</button>
            </fieldset>
            <button type="button" className="popup__form-close-button popup__close-button"></button>
          </form>
        </div>

        <div className="popup popup-add-card popup__overlay">
          <form className="popup-add-card__container popup__form" noValidate>
            <h2 className="popup-add-card__form-title">Новое место</h2>
            <fieldset className="popup-add-card__form-profile popup__fieldset">
              <input id="name-input-add-card" type="text" className="popup-add-card__form-name popup__input" name="name" placeholder="Название" defaultValue="" minLength="1" maxLength="30" autoComplete="off" required/>
              <span id="name-input-add-card-error" className="popup__error"></span>
              <input id="link-input" type="url" className="popup-add-card__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
              <span id="link-input-error" className="popup__error"></span>
              <button disabled type="submit" className="popup-add-card__form-submit popup__button popup__button_disabled">Создать</button>
            </fieldset>
            <button type="button" className="popup-add-card__form-close-button popup__close-button"></button>
          </form>
        </div>

        <div className="popup-card-delete popup__overlay">
          <form className="popup-card-delete__container" noValidate>
            <h2 className="popup-card-delete__form-title">Вы уверены?</h2>
            <fieldset className="popup-card-delete__form-profile">
              <button type="submit" className="popup-card-delete__form-submit popup__button">Да</button>
            </fieldset>
            <button type="button" className="popup-card-delete__form-close-button popup__close-button"></button>
          </form>
        </div>

        <div className="popup popup-avatar-update popup__overlay">
          <form className="popup-avatar-update__container popup__form" noValidate>
            <h2 className="popup-avatar-update__form-title">Обновить аватар</h2>
            <fieldset className="popup-avatar-update__form-update popup__fieldset">
              <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
                <span id="link-input_update-avatar-error" className="popup__error"></span>
                <button disabled type="submit" className="popup-avatar-update__form-submit popup__button popup__button_disabled">Сохранить</button>
            </fieldset>
            <button type="button" className="popup-avatar-update__form-close-button popup__close-button"></button>
          </form>
        </div> */}

export default PopupWithForm;








// // ------------------------



// import React from 'react';

// class PopupWithForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: !this.props.isActive,
//     };
//   }

//   handleEditAvatarClick = () => {
//     this.setState({ isActive: this.state.isActive });

//     // this.setState({ onClick: true });
//   };


//   render() {

//     <div className={`popup ${name} popup__overlay`}>
//       <form className="popup__container popup__form" noValidate name="${props.name}">

//         <h2 className="popup__form-title">Обновить аватар</h2>
//         <fieldset className="popup__form-profile popup__fieldset">

//           <children />

//           <button disabled type="submit" className="popup__form-submit popup__button popup__button_disabled">Сохранить</button>
//         </fieldset>
//         <button type="button" className="popup__form-close-button popup__close-button"></button>
//       </form>
//     </div>

//   }
// }

// export default Main;






//           <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
//           <span id="link-input_update-avatar-error" className="popup__error"></span>

