import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-aperations";
import "./RegisterForm.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label>Имя</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label>Электронный адрес</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Пароль может состоять только из букв, апострофа, тире и пробелов."
        required
      />
      <label>Пароль</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Пороль может состоять только из букв, апострофа, тире и пробелов."
        required
      />

      <button type="submit" className="form_register-button">
        Register new
      </button>
    </form>
  );
};
export default RegisterForm;
