import axios from "axios";
axios.defaults.baseURL = "https://61987e15164fa60017c230b2.mockapi.io/api/v1/";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");

  return data;
}

export async function addingContact(contact) {
  // const contact = { name, phone };
  const { data } = await axios.post("/contacts", contact);

  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
}
