import { useState } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { items } from "../../redux/phonebook/phonebook-selectors";
import * as phonebookOperations from "../../redux/phonebook/phonebook-operations";
import styles from "./ContactForm.module.css";

// function ContactForm({ contactAdding }) {
export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const contactsItems = useSelector(items);
  const dispatch = useDispatch();
  const reset = () => {
    setName("");
    setPhone("");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   contactAdding(name, number);
  //   reset();
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contactsItems);
    const check = contactsItems.find((item) => item.name === name);
    if (check) {
      alert(`${name} is already in Contacts`);
      reset();
      return;
    } else {
      dispatch(phonebookOperations.addingContact({ name, phone }));
    }
    reset();
  };

  return (
    <div className={styles.form}>
      <h3>Name</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={changeHandler}
        />

        <h3>Number</h3>
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={changeHandler}
        />
        <br />
        <button className={styles.add} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// ContactForm.propTypes = {
//   contactAdding: PropTypes.func,
// };

// const mapDispatchToProps = (dispatch) => ({
//   contactAdding: (name, number) =>
//     dispatch(phonebookActions.addingContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
