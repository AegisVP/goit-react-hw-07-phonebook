import axios from 'axios';

axios.defaults.baseURL = 'https://63348ed3849edb52d6f3da86.mockapi.io/phonebook';

export async function fetchPhonebook() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact({ name, number }) {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
