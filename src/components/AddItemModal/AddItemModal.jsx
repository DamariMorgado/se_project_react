import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const defaultValues = { name: "", imageUrl: "", weather: "" };

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const { values, handleChange, setValues } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.weather) return;
    onAddItem(values)
      .then(() => {
        setValues(defaultValues);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ModalWithForm
      title="New Garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        Name
        <input
          className="modal__input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label" htmlFor="imageUrl">
        Image
        <input
          className="modal__input"
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio" htmlFor="hot">
          <input
            className="modal__radio-input"
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          <input
            className="modal__radio-input"
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          <input
            className="modal__radio-input"
            type="radio"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
