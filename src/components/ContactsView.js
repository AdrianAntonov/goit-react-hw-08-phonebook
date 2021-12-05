import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { items } from "../redux/phonebook/phonebook-selectors";

export default function ContactsView() {
  const contactsList = useSelector(items);
  return (
    <div>
      <ContactForm />
      {contactsList && (
        <div>
          <ContactList />
        </div>
      )}
    </div>
  );
}
