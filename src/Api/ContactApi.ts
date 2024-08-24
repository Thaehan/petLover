import axiosInstance, {DOMAIN} from '.';

const CONTACT_API = `${DOMAIN}/api/v1/auth/me`;

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
  const result = await axiosInstance.get<TContactsResponse>(
    'https://www.mockachino.com/17acefab-0956-47/contacts',
  );
  return result.data.contacts;
};

export default {
  getContacts,
};
