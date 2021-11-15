// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList />}
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.object,
};

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
// });

// export default connect(mapStateToProps)(App);
