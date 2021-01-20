import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsForm.module.css';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import notification from '../../services/notification';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeForm = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (name.trim() === '') {
      notification('Contact name is missing');
      return;
    }
    if (number.trim() === '') {
      notification('Contact number is missing');
      return;
    }
    const includesContact = contactsList.some(contact => contact.name === name);
    !includesContact
      ? dispatch(addContact(name, number))
      : notification(`${name} is already in your contacts`);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label className={s.label} htmlFor="name">
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        placeholder="Enter the name"
        autoComplete="off"
        id="name"
        onChange={handleChangeForm}
      ></input>
      <label className={s.label} htmlFor="number">
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        placeholder="111-11-11"
        autoComplete="off"
        id="number"
        onChange={handleChangeForm}
      ></input>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
