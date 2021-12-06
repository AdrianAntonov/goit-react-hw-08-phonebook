import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUsermail);

  return (
    <div className={styles.container}>
      <span className={styles.name}>
        Welcome, <span className={styles.email}>{email}</span>
      </span>
      <button
        className={styles.userButton}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
