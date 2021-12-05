import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";

import authSelectors from "../../redux/auth/auth-selectors";

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
