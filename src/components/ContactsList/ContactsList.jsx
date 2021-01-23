import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './ContactsList.module.css';
import { deleteContact, changeFilter, changeContact } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import InputName from '../InputFields/InputName.jsx';
import InputNumber from '../InputFields/InputNumber.jsx';
import InputEmail from '../InputFields/InputEmail.jsx';
import InputSkype from '../InputFields/InputSkype.jsx';
import InputTelegram from '../InputFields/InputTelegram.jsx';
import SelectGroup from '../SelectGroup';
import IconButton from '../IconButton';

const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  useEffect(() => {
    if (selectedContact) {
      setValue('name', selectedContact.name);
      setValue('number', selectedContact.number);
      setValue('email', selectedContact.email);
      setValue('skype', selectedContact.skype);
      setValue('telegram', selectedContact.telegram);
      setValue('group', selectedContact.group);
    }
  }, [selectedContact, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setSelectedContact(null);
    }
  }, [isSubmitSuccessful, reset]);

  const onDelete = id => {
    dispatch(deleteContact(id));
    dispatch(changeFilter(''));
  };

  const showContact = id => {
    setSelectedContact(contacts.find(contact => contact.id === id));
  };

  const onFormSubmit = data => {
    const { name, number, email, skype, telegram, group } = data;
    const { id } = selectedContact;
    dispatch(changeContact(id, name, number, email, skype, telegram, group));
  };

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} onChange={showContact} onDelete={onDelete} />
        ))}
      </ul>
      {selectedContact && (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <ul>
            <InputName key="name" name="name" register={register} errors={errors} />
            <InputNumber key="number" name="number" register={register} errors={errors} />
            <InputEmail key="email" name="email" register={register} errors={errors} />
            <InputSkype key="skype" name="skype" register={register} />
            <InputTelegram key="telegram" name="telegram" register={register} />
            <SelectGroup key="group" name="group" register={register} />
          </ul>
          <IconButton
            type="submit"
            aria-label="Кнопка 'Добавить контакт'"
            style={{ width: '55px', height: '55px', backgroundColor: 'rgb(5, 224, 104)' }}
          >
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <MdDone />
            </IconContext.Provider>
          </IconButton>
        </form>
      )}
    </>
  );
};

export default ContactsList;
