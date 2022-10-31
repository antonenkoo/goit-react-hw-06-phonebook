import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
