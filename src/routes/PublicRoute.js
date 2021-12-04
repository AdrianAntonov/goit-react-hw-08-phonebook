import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

export function PublicRoute({ component: Component, restricted = false }) {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isAuth && restricted;
  return (
    <>
      {/* <h1>PUBLIC</h1> */}
      {shouldRedirect ? <Navigate to="/contacts" /> : <Component />}
    </>
  );
}
