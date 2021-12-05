import axios from "axios";
// axios.defaults.baseURL = "https://61987e15164fa60017c230b2.mockapi.io/api/v1/";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");

  return data;
}

export async function addingContact(contact) {
  const { data } = await axios.post("/contacts", contact);

  return data;
}

export async function deleteContacts(id) {
  console.log(id);
  const { data } = await axios.delete(`/contacts/${id}`);
  console.log(data);
  return data;
}
