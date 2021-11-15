import { useState } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import * as phonebookActions from "../../redux/phonebook/phonebook-actions";
import styles from "./ContactForm.module.css";

// function ContactForm({ contactAdding }) {
export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const reset = () => {
    setName("");
    setNumber("");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
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
    dispatch(phonebookActions.addingContact(name, number));
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
          name="number"
          value={number}
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
