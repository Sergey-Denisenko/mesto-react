(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=(a(16),a(10)),s=a(2),u=a(1),l=a(7),p=a.n(l);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:p.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},d=r.a.createContext();var _=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,o=e.onCardDeleteClick,c=r.a.useContext(d),i=t.owner._id===c._id,s="card__trash ".concat(i?"":"card__trash_disabled"),u=t.likes.some((function(e){return e._id===c._id})),l="card__like ".concat(u?"card__like_active-black":"");return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__image",alt:"",src:"",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){a(t)}}),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"card__title"},t.name),r.a.createElement("button",{type:"button",className:"card__like ".concat(l),onClick:function(){n(t)}}),r.a.createElement("p",{className:"card__like-counter"},t.likes.length)),r.a.createElement("button",{type:"button",className:"card__trash ".concat(s),onClick:function(){o(t)}}))};var f=function(e){var t=e.card,a=e.onClose,n=e.closeAllPopups,o=e.resetSelectedCardInImagePopup;return!0===a&&document.querySelector(".popup-image").classList.remove("popup-image_opened"),r.a.createElement("div",{className:"popup-image popup popup__overlay ".concat(t?"popup-image_opened":"")},t&&r.a.createElement("div",{className:"popup-image__container"},r.a.createElement("button",{type:"button",className:"popup-image__close-button popup__close-button",onClick:n&&o}),r.a.createElement("img",{className:"popup-image__image",src:t.link,alt:t.name}),r.a.createElement("h3",{className:"popup-image__title"},t.name)))};var h=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,o=e.onClose,c=e.closeAllPopups,i=e.cards,s=e.onCardLike,l=e.onCardDelete,p=e.setOnClose,m=r.a.useContext(d),h=r.a.useState(!1),v=Object(u.a)(h,2),b=v[0],E=v[1],k=r.a.useState(),C=Object(u.a)(k,2),g=C[0],N=C[1],j=r.a.useState(!1),y=Object(u.a)(j,2),O=y[0],S=y[1],P=function(e){N(e),S(!O),p(!1)},U=function(e){E(!b),l(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("button",{onClick:t,type:"button",className:"profile__avatar-button",style:{backgroundImage:"url(".concat(m.avatar),minWidth:"120px"}}),r.a.createElement("div",{className:"profile__data"},r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__title-name"},m.name),r.a.createElement("p",{className:"profile__subtitle-about"},m.description)),r.a.createElement("button",{onClick:a,type:"button",className:"profile__edit-button"})),r.a.createElement("button",{onClick:n,type:"button",className:"profile__add-button"})),r.a.createElement("section",{className:"card-container"},i.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(_,{card:e,onCardClick:P,onCardLike:s,onCardDeleteClick:U}))})))),r.a.createElement(f,{card:g,onClose:o,closeAllPopups:c,resetSelectedCardInImagePopup:function(){N()}}))};var v=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__info"},"\xa9 2020 Mesto Russia"))},b=a(8),E=a(9),k={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"b301150e-99e5-48e9-bfa2-35f39eea584a","Content-Type":"application/json"}},C=new(function(){function e(t){Object(b.a)(this,e),this._optionsApi=t,this._baseUrl=this._optionsApi.baseUrl,this._headers=this._optionsApi.headers}return Object(E.a)(e,[{key:"getUserDataDefaultFromServer",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCardDefaultFromServer",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setNewDataUser",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCardToServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCardFromServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likePlus",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeMinus",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"avatarUpdate",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())(k);var g=function(e){var t=e.name,a=e.title,n=e.isOpen,o=e.onClose,c=e.onSubmit,i=e.children;return!0===o&&document.querySelector(".popup").classList.remove("popup_opened"),r.a.createElement("div",{className:"popup popup_type_".concat(t," popup__overlay ").concat(n?"popup_opened":"")},r.a.createElement("form",{id:"form-popup",className:"popup__container popup__form",noValidate:!0,name:t,onSubmit:c},r.a.createElement("h2",{className:"popup__form-title"},a),r.a.createElement("fieldset",{className:"popup__form-profile popup__fieldset"},i,n&&"card-delete"===t?r.a.createElement("button",{type:"submit",className:"popup-card-delete__form-submit popup__button"},"\u0414\u0430"):r.a.createElement("button",{type:"submit",className:"popup__form-submit popup__button popup__button_disabled"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement("button",{onClick:o,type:"button",className:"popup__form-close-button popup__close-button"})))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,o=r.a.useContext(d);r.a.useEffect((function(){l(o.name),f(o.description)}),[o]);var c=r.a.useState(""),i=Object(u.a)(c,2),s=i[0],l=i[1],p=r.a.useState(""),m=Object(u.a)(p,2),_=m[0],f=m[1];return r.a.createElement(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:s,description:_})}},r.a.createElement("input",{id:"name-input-profile",type:"text",value:s,onChange:function(e){l(e.target.value)},className:"popup__form-name popup__input",name:"name",minLength:"2",maxLength:"40",autoComplete:"off",required:!0}),r.a.createElement("span",{id:"name-input-profile-error",className:"popup__error"}),r.a.createElement("input",{id:"prof-input",type:"text",value:_,onChange:function(e){f(e.target.value)},className:"popup__form-about popup__input",name:"prof",minLength:"2",maxLength:"200",autoComplete:"off",required:!0}),r.a.createElement("span",{id:"prof-input-error",className:"popup__error"}))};var j=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,o=r.a.useRef("");return r.a.createElement(g,{name:"avatar-update",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})}},r.a.createElement("input",{ref:o,id:"link-input_update-avatar",type:"url",className:"popup-avatar-update__form-image-link popup__input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",defaultValue:"",autoComplete:"off",required:!0}),r.a.createElement("span",{id:"link-input_update-avatar-error",className:"popup__error"}))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,o=r.a.useState(""),c=Object(u.a)(o,2),i=c[0],s=c[1],l=r.a.useState(""),p=Object(u.a)(l,2),m=p[0],d=p[1];return r.a.createElement(g,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:m})}},r.a.createElement("input",{id:"name-input-add-card",type:"text",value:i,onChange:function(e){s(e.target.value)},className:"popup-add-card__form-name popup__input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",autoComplete:"off",required:!0}),r.a.createElement("span",{id:"name-input-add-card-error",className:"popup__error"}),r.a.createElement("input",{id:"link-input",type:"url",value:m,onChange:function(e){d(e.target.value)},className:"popup-add-card__form-image-link popup__input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off",required:!0}),r.a.createElement("span",{id:"link-input-error",className:"popup__error"}))};var O=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(u.a)(o,2),l=c[0],p=c[1],_=r.a.useState(!1),f=Object(u.a)(_,2),b=f[0],E=f[1],k=r.a.useState(!1),g=Object(u.a)(k,2),O=g[0],S=g[1],P=function(){n(!a),p(!1),E(!1),S(!1)},U=r.a.useState([]),A=Object(u.a)(U,2),D=A[0],w=A[1],L=r.a.useState({name:"",description:"",avatar:" ",_id:""}),x=Object(u.a)(L,2),T=x[0],q=x[1];return r.a.useEffect((function(){return Promise.all([C.getUserDataDefaultFromServer(),C.getCardDefaultFromServer()]).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];w(n),q(Object(s.a)(Object(s.a)({},T),{},{name:a.name,description:a.about,avatar:a.avatar,_id:a._id}))})).catch((function(e){console.error(e)})),function(){}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(d.Provider,{value:T},r.a.createElement("div",{className:"page"},r.a.createElement(m,null),r.a.createElement(h,{onEditAvatar:function(){p(!l)},onEditProfile:function(){E(!b)},onAddPlace:function(){S(!O)},onClose:a,closeAllPopups:P,cards:D,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));t||C.likePlus(e._id).then((function(t){var a=D.map((function(a){return a._id===e._id?t:a}));w(a)})),t&&C.likeMinus(e._id).then((function(t){var a=D.map((function(a){return a._id===e._id?t:a}));w(a)}))},onCardDelete:function(e){C.deleteCardFromServer(e._id).then((function(){var t=D.filter((function(t){return t._id!==e._id}));w(t),P()}))},setOnClose:n}),r.a.createElement(v,null),r.a.createElement(j,{isOpen:l,onClose:P,onUpdateAvatar:function(e){return C.avatarUpdate(e).then((function(e){q(Object(s.a)(Object(s.a)({},T),{},{avatar:e.avatar})),P()})).catch((function(e){console.error(e)})),function(){}}}),r.a.createElement(N,{isOpen:b,onClose:P,onUpdateUser:function(e){return C.setNewDataUser(e).then((function(e){q(Object(s.a)(Object(s.a)({},T),{},{name:e.name,description:e.about})),P()})).catch((function(e){console.error(e)})),function(){}}}),r.a.createElement(y,{isOpen:O,onClose:P,onAddPlace:function(e){return C.addNewCardToServer(e).then((function(e){w([].concat(Object(i.a)(D),[e])),P()})).catch((function(e){console.error(e)})),function(){}}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/Vector_white.c6f11019.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.16041c43.chunk.js.map