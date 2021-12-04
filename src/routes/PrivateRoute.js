import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

export function PrivateRoute({ component: C }) {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {/* <h1>PRIVATE</h1> */}
      {isAuth ? <C /> : <Navigate to="/login" />}
    </>
  );
}
