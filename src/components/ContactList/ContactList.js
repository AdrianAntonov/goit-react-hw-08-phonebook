import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  contactsState,
  items,
} from "../../redux/phonebook/phonebook-selectors";
import * as phonebookOperations from "../../redux/phonebook/phonebook-operations";
import styles from "./ContactList.module.css";
import Filter from "../Filter/Filter";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(contactsState);
  const listedItems = useSelector(items);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.list}>
      {listedItems.length > 0 ? (
        <Filter />
      ) : (
        <h3>There are no contacts in your phonebook</h3>
      )}
      {contactList.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <span>
            {item.name}
            <span className={styles.number}>{item.number}</span>
          </span>
          <button
            type="button"
            className={styles.button}
            onClick={() => dispatch(phonebookOperations.deleteContact(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contactList: PropTypes.array,
};
