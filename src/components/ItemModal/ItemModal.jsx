import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose, onDeleteCard }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose} />
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete-button"
            type="button"
            onClick={() => onDeleteCard(card)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
