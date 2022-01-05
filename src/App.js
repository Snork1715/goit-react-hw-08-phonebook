import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Container from "./components/Container";
import authOperations from "./redux/auth/auth-aperations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
