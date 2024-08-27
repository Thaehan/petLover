import {TContact} from '@Api/ContactApi';

function removeVietnameseAccents(str: string) {
  return str
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function searchContacts(query: string, contacts: Array<TContact>) {
  const standartQuery = removeVietnameseAccents(query);

  const results = [];

  // Using Array.reduce is good choice but it make the code hard to read.
  for (const contact of contacts) {
    const {first_name, last_name, phoneNumber} = contact;
    const name = removeVietnameseAccents(`${first_name} ${last_name}`);
    const nameIndex = name.indexOf(standartQuery);
    const phoneIndex = phoneNumber.indexOf(standartQuery);

    if (nameIndex !== -1 || phoneIndex !== -1) {
      // add revalance
      const relevance = nameIndex !== -1 ? nameIndex : phoneIndex;
      results.push({...contact, relevance});
    }
  }

  // Sort by added revalance
  results.sort((a, b) => a.relevance - b.relevance);

  return results;
}
