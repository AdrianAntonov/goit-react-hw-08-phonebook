import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";
import { items } from "../redux/phonebook/phonebook-selectors";

export default function ContactsView() {
  const contactsList = useSelector(items);
  return (
    <>
      <ContactForm />
      {contactsList && (
        <div>
          {/* <Filter /> */}
          <ContactList />
        </div>
      )}
    </>
  );
}
