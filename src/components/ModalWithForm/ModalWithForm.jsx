import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText,
  secondaryButtonText,
  onSecondaryButtonClick,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <div className="modal__buttons">
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
            {secondaryButtonText && (
              <button
                className="modal__secondary-button"
                type="button"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
