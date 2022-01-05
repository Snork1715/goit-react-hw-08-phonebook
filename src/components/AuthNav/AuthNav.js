import { NavLink } from "react-router-dom";
import "./AuthNav.css";

export default function Navigation() {
  const applyClassName = ({ isActive }) =>
    isActive ? `link active-link` : `link`;

  return (
    <nav className="navigation">
      <NavLink to="/register" className={applyClassName}>
        Registration
      </NavLink>
      <NavLink to="/login" className={applyClassName}>
        Login
      </NavLink>
    </nav>
  );
}
