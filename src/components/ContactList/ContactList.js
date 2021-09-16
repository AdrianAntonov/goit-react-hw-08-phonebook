import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export class ContactList extends Component {
  static propTypes = {
    deleteContact: PropTypes.func,
    contactList: PropTypes.array,
  };

  deleteItem = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    // console.log(this.props.contactList);
    if (this.props.contactList) {
      return (
        <div className={styles.list}>
          {this.props.contactList.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.number}</span>
              <button
                type="button"
                className={styles.button}
                onClick={() => this.deleteItem(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ContactList;
