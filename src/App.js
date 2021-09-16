import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contact = localStorage.getItem("contacts");
    const parsedContact = JSON.parse(contact);
    if (parsedContact) this.setState({ contacts: parsedContact });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    // if (this.state.contacts.length === 0) localStorage.removeItem("contacts");
  }

  contactAdding = (name, number) => {
    const check = this.state.contacts.some((item) => item.name === name);
    if (check) {
      alert(`${name} is already in Contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          { id: shortid.generate(), name, number },
        ],
      }));
    }
  };

  handleFilter = ({ name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  renderFilter = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter((item) =>
        item.name.toLowerCase().includes(lowerFilter)
      );
    }
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== id),
    });
  };

  render() {
    const showFilteredContacts = this.renderFilter();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm contactAdding={this.contactAdding} />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} />
        {this.state.contacts && (
          <ContactList
            contactList={showFilteredContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
