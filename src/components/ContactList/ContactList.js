import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

function ContactList({ deleteContact, contactList }) {
  const deleteItem = (id) => {
    deleteContact(id);
  };

  return (
    <div className={styles.list}>
      {contactList.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{item.number}</span>
          <button
            type="button"
            className={styles.button}
            onClick={() => deleteItem(item.id)}
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

export default ContactList;
