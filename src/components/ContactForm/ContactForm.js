import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    contactAdding: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const { name, number } = this.state;
    const { contactAdding } = this.props;
    e.preventDefault();
    contactAdding(name, number);
    this.reset();
  };
  render() {
    return (
      <div className={styles.form}>
        <h3>Name</h3>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.changeHandler}
          />

          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.changeHandler}
          />
          <br />
          <button className={styles.butt} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
