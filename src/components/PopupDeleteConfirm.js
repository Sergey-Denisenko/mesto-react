import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupDeleteConfirm({ isOpen, onClose, onCardDelete }) {

  return (
    <PopupWithForm name="card-delete" title="Вы уверены?" isOpen={isOpen} onClose={onClose} onSubmit={onCardDelete} />
  )
}

export default PopupDeleteConfirm;
