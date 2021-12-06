import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Log in
      </NavLink>
    </div>
  );
}
