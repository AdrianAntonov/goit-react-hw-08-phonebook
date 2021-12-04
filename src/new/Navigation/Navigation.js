import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import authSelectors from "../../redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {/* <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}> */}
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          to="/contacts"
          // exact
          style={styles.link}
          // activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
      {/* <NavLink
      to="/contacts"
      // exact
      style={styles.link}
      // activeStyle={styles.activeLink}
    >
      Contact Form
    </NavLink> */}
    </nav>
  );
};

export default Navigation;
