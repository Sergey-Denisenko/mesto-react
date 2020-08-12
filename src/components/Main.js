import React from 'react';
import api from '../utils/api';
import Card from './Card';


// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // isActive: this.props.isActive,
//       className: this.props.className,
//     };
//   }

//   handleEditAvatarClick = () => {
//     this.setState({ className: !this.state.className });

//     // this.setState({ onClick: true });
//   };


//   render() {
//     if (this.state.onClick && this.className.contains('popup-avatar-update')) {
//       return (
//         <>
//           <input id="link-input_update-avatar" type="url" className="popup-avatar-update__form-image-link popup__input" name="link" placeholder="Ссылка на картинку" defaultValue="" autoComplete="off" required/>
//           <span id="link-input_update-avatar-error" className="popup__error"></span>
//         </>
//       );
//     } else {
//       return (
//         // console.log(' Неправильно сделано ');
//         <main className="content">
//           <section className="profile">

//             <button onClick={handleEditAvatarClick} type="button" className="profile__avatar-button">
//             Обновить аватар
//               <img className="profile__avatar" alt="Фото в профиле" />
//             </button>

//             <div className="profile__data">
//               <div className="profile__info">
//                 <h1 className="profile__title-name">Имя тут</h1>
//                 <p className="profile__subtitle-about">About тут</p>
//               </div>
//               <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"></button>
//             </div>

//             <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"></button>
//           </section>

//           <section className="card-container">
//           </section>

//         </main>
//       );
//     }
//   }
// }

// export default Main;













function Main({onEditAvatar, onEditProfile, onAddPlace, object, cards, onCardClick}) {
  // userName, userDescription, userAvatar, dataUserInfo}) {

  // {console.log('object')};
  // {console.log({object})};
  // {console.log('cards')};
  // {console.log({cards})};

  return (

    <main className="content">
      <section className="profile">

        <button onClick={onEditAvatar} type="button" className="profile__avatar-button"
        style={{ backgroundImage: `url(${object.userAvatar}`, backgroundSize: `contain`, minWidth: '120px'} }>
        {/* {console.log('клик')}; */}
        </button>

        <div className="profile__data">
          <div className="profile__info">
            <h1 className="profile__title-name">{object.userName}</h1>
            <p className="profile__subtitle-about">{object.userDescription}</p>
          </div>
          <button onClick={onEditProfile} type="button" className="profile__edit-button">
          {/* {console.log('клик2')}; */}
          </button>
        </div>

        <button onClick={onAddPlace} type="button" className="profile__add-button">
        {/* {console.log('клик3')}; */}
        </button>
      </section>

      <section className="card-container">

        {cards.map((card) => (
          <div key={card._id}>
            <Card card={card} onCardClick={onCardClick}/>
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
