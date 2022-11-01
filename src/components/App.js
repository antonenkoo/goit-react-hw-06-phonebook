import { Layout } from './Layout/Layout';

// import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { ListStyled } from './styles';

export const App = () => {
  return (
    <Layout>
      {/* <ContactForm /> */}
      <ListStyled>
        <Filter />
        <ContactList />
      </ListStyled>
    </Layout>
  );
};
