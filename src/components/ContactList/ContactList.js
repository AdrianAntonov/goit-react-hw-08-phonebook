import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsState } from "../../redux/phonebook/phonebook-selectors";
import * as phonebookOperations from "../../redux/phonebook/phonebook-operations";
import styles from "./ContactList.module.css";
import Filter from "../Filter/Filter";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(contactsState);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.list}>
      {contactList.length > 0 && <Filter />}
      {contactList.map((item) => (
        <ol>
          <li key={item.id} className={styles.listItem}>
            <span>
              {item.name}
              <span>{item.number}</span>
            </span>
            <button
              type="button"
              className={styles.button}
              onClick={() =>
                dispatch(phonebookOperations.deleteContact(item.id))
              }
            >
              Delete
            </button>
          </li>
        </ol>
      ))}
    </div>
  );
}

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contactList: PropTypes.array,
};
