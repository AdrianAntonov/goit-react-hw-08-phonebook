import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./UserMenu.module.css";
// import defaultAvatar from "./default-avatar.png";

export default function UserMenu() {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUsermail);
  // const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span className={styles.name}>
        Welcome, <span className={styles.email}>{email}</span>
      </span>
      {/* <span style={styles.name}>Добро пожаловать, ZZZ</span> */}
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
