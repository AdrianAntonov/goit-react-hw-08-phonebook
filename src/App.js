import { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filterContacts, setFilterContacts] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const contactAdding = (name, number) => {
    const check = contacts.some((item) => item.name === name);
    if (check) {
      alert(`${name} is already in Contacts`);
    } else {
      setContacts((prevState) => [
        ...prevState,
        { id: shortid.generate(), name, number },
      ]);
    }
  };

  const handleFilter = ({ value }) => {
    setFilterContacts(value);
  };

  const renderFilter = () => {
    const lowerFilter = filterContacts.toLowerCase();
    if (contacts) {
      return contacts.filter((item) =>
        item.name.toLowerCase().includes(lowerFilter)
      );
    }
  };
  const showFilteredContacts = renderFilter();

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((item) => item.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm contactAdding={contactAdding} />
      <h2>Contacts</h2>
      <Filter filter={handleFilter} />
      {contacts && (
        <ContactList
          contactList={showFilteredContacts}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
}

export default App;
