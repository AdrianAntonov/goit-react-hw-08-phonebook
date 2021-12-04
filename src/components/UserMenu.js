import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import authOperations from "../redux/auth/auth-operations";
// import defaultAvatar from "./default-avatar.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUsermail);
  // const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Welcome, {email}</span>
      {/* <span style={styles.name}>Добро пожаловать, ZZZ</span> */}
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
