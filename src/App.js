import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar/NavBar";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import ContactsView from "./components/ContactsView";
import Home from "./components/pages/HomePage/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Container from "./components/Container/Container";
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<PublicRoute component={Home} />} />
          <Route
            path="/register"
            element={<PublicRoute component={Register} restricted />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={Login} restricted />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsView} />}
          />
        </Routes>
      </Container>
    )
  );
}
