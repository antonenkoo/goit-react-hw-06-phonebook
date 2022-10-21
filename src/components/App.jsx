import React, { useState, useEffect } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';
import { ListStyled } from './styles';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = data => {
    if (data.name === '' || data.number === '' || data.name.includes('  ')) {
      return alert(`Input is still empty !`);
    }
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in list`);
    } else {
      setContacts([
        ...contacts,
        { name: data.name, number: data.number, id: nanoid() },
      ]);
    }
  };

  const onDeleteClick = id => {
    setContacts(
      contacts.filter(contact => {
        return contact.id !== id;
      })
    );
  };

  const onChange = e => {
    setFilter(e.target.value);
  };

  const changeFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = changeFilter();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={onSubmit}
        name={contacts.name}
        contacts={contacts}
      />
      <h2>Contacts</h2>
      <ListStyled>
        <Filter
          contacts={contacts}
          value={filter}
          onChange={onChange}
          onDeleteClick={onDeleteClick}
        />
        <ContactList
          filterValue={filter}
          contacts={visibleContacts}
          onDeleteClick={onDeleteClick}
        />
      </ListStyled>
    </>
  );
}
