import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const defaultValues = {
  email: "",
  password: "",
};

function LoginModal({ isOpen, onClose, onLogin }) {
  const { values, handleChange, setValues } = useForm(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(values)
      .then(() => {
        setValues(defaultValues);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
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

export default LoginModal;
