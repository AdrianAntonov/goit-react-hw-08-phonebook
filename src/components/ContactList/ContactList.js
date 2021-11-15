import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import * as phonebookActions from "../../redux/phonebook/phonebook-actions";
import styles from "./ContactList.module.css";

export default function ContactList() {
  // function ContactList({ deleteContact, contactList }) {
  const contactList = useSelector((state) => {
    const filterToLowerCase = state.contacts.filter.toLowerCase();

    return state.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  });

  const dispatch = useDispatch();

  // const deleteItem = (id) => {
  //   deleteContact(id);
  // };

  return (
    <div className={styles.list}>
      {contactList.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span> <span>{item.number}</span>
          <button
            type="button"
            className={styles.button}
            // onClick={() => deleteItem(item.id)}
            onClick={() => dispatch(phonebookActions.deletingContact(item.id))}
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
