import PropTypes from "prop-types";
import { useEffect } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { contactsState } from "../../redux/phonebook/phonebook-selectors";
import * as phonebookOperations from "../../redux/phonebook/phonebook-operations";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(contactsState);

  // const contactList = useSelector((state) => {
  //   const filterToLowerCase = state.contacts.filter.toLowerCase();

  //   return state.contacts.items.filter(({ name }) =>
  //     name.toLowerCase().includes(filterToLowerCase)
  //   );
  // });

  return (
    <div className={styles.list}>
      {contactList.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span> <span>{item.phone}</span>
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

// const getFilteredContacts = (items, filter) => {
//   const filterToLowerCase = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(filterToLowerCase)
//   );
// };

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;
//   const filteredContacts = getFilteredContacts(items, filter);

//   return { contactList: filteredContacts };
// };

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(phonebookActions.deletingContact(id)),
// });

// export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
