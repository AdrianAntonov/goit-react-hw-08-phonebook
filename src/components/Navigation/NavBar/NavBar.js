import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../../UserMenu/UserMenu";
import AuthNav from "../AuthNav";
import styles from "./NavBar.module.css";
import authSelectors from "../../../redux/auth/auth-selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
