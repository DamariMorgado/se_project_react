import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const defaultValues = {
  name: "",
  avatar: "",
  email: "",
  password: "",
};

function RegisterModal({ isOpen, onClose, onRegister }) {
  const { values, handleChange, setValues } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(values)
      .then(() => {
        setValues(defaultValues);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
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

      <label className="modal__label" htmlFor="avatar">
        Avatar URL
        <input
          className="modal__input"
          type="url"
          id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>

      <label className="modal__label" htmlFor="email">
        Email
        <input
          className="modal__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="modal__label" htmlFor="password">
        Password
        <input
          className="modal__input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
