import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact, changeFilter } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
    dispatch(changeFilter(''));
  };

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
