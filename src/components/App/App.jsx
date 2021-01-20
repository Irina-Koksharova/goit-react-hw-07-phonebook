import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from '../../redux/selectors';
import Container from '../Container';
import Section from '../Section';
import Title from '../Title';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section>
        <Title children={'Phonebook'} />
        <ContactsForm />
        <ToastContainer autoClose={3000} limit={1} style={{ width: '352px' }} />
      </Section>

      {contacts.length > 0 && (
        <Section>
          <Title children={'Contacts'} style={{ fontSize: '22px' }} />
          <Filter />
          <ContactsList />
        </Section>
      )}
    </Container>
  );
};

export default App;
