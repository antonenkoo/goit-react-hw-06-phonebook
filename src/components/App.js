import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <ContactsList contacts={defaultContacts} />
      <GlobalStyle />
    </Layout>
  );
};
