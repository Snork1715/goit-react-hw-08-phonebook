import DefaultAuthLogo from "../../images/DefaultAuthLogo.png";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-aperations";
import { useSelector, useDispatch } from "react-redux";
import "./UserMenu.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const avatar = DefaultAuthLogo;
  const name = useSelector(authSelectors.getName);

  return (
    <div className="avatar-container">
      <img src={avatar} alt="avatar" width="32" className="avatar"></img>
      <span className="avatar-welcome"> Welcome, {name} </span>
      <button
        className="avatar-button"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
