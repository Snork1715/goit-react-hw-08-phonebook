import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-aperations";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
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
    dispatch(authOperations.login({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Электронный адрес</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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

      <button type="submit" className="form_login-button">
        Login
      </button>
    </form>
  );
};
export default LoginForm;
