import axios from 'axios';

import {DOMAIN} from '.';

const CONTACT_API = `${DOMAIN}/17acefab-0956-47/contacts`;

export type TContact = {
  id: string;
  first_name: string;
  last_name: string;
  phoneNumber: string;
};

type TContactsResponse = {
  contacts: Array<TContact>;
};

const getContacts = async () => {
  const result = await axios.get<TContactsResponse>(CONTACT_API);
  return result.data.contacts;
};

export default {
  getContacts,
};
