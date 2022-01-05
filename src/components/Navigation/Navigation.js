import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const applyClassName = ({ isActive }) =>
    isActive ? `link active-link` : `link`;

  return (
    <nav className="navigation">
      <NavLink to="/" className={applyClassName}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={applyClassName}>
        Contacts
      </NavLink>
    </nav>
  );
}
