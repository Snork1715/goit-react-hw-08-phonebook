import Container from "../Container";
import AuthNav from "../AuthNav";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import "./AppBar.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="header-app">
      <Container>
        <div className="wrapper">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
}
