import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './ContactsForm.module.css';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import notification from '../../services/notification';
import InputName from '../InputFields/InputName';
import InputNumber from '../InputFields/InputNumber';
// import ButtonSecondary from '../ButtonSecondary';

const ContactsForm = () => {
  const { register, handleSubmit, errors } = useForm({
    criteriaMode: 'all',
  });
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();

  const onFormSubmit = data => {
    const { name, number } = data;
    const includesContact = contactsList.some(contact => contact.name === name);
    !includesContact
      ? dispatch(addContact(name, number))
      : notification(`${name} is already in your contacts`);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ul className={s.formList}>
        <InputName key="name" name="name" register={register} errors={errors} />
        <InputNumber
          key="phone number"
          name="phone number"
          register={register}
          errors={errors}
        />
      </ul>
      {/* {!additionalInfo
        ? <ButtonSecondary
          onClick={() => setAdditionalInfo(true)}
          children={'Add info'}
          />
        : <ul className={s.formList}>
          {Object.keys(extraTypes).map(type => 
            <InputFieldElement
              key={type}
              type={type}
              value={getInputValues(basicUserData, type)}
              onChange={handleChangeForm} />
          )}
        </ul>} */}

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
