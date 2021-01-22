import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './ContactsForm.module.css';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import { initialContactData } from '../../initial/contactsData';
import notification from '../../services/notification';
import InputName from '../InputFields/InputName';
import InputNumber from '../InputFields/InputNumber';
import ButtonSecondary from '../ButtonSecondary';
import InputEmail from '../InputFields/InputEmail';
import InputSkype from '../InputFields/InputSkype';
import InputTelegram from '../InputFields/InputTelegram';
import SelectGroup from '../SelectGroup';

const ContactsForm = () => {
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  const [additionalInfo, setAdditionalInfo] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...initialContactData });
      setAdditionalInfo(false);
    }
  }, [isSubmitSuccessful, reset]);

  const onFormSubmit = data => {
    const {
      name,
      number,
      email = initialContactData.email,
      skype = initialContactData.skype,
      telegram = initialContactData.telegram,
      group = initialContactData.group,
    } = data;
    const includesContact = contactsList.some(contact => contact.name === name);
    !includesContact
      ? dispatch(addContact(name, number, email, skype, telegram, group))
      : notification(`${name} is already in your contacts`);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ul className={s.formList}>
        <InputName key="name" name="name" register={register} errors={errors} />
        <InputNumber
          key="number"
          name="number"
          register={register}
          errors={errors}
        />
      </ul>
      {!additionalInfo ? (
        <ButtonSecondary
          onClick={() => setAdditionalInfo(true)}
          children={'Add more'}
        />
      ) : (
        <>
          <ul className={s.formList}>
            <InputEmail
              key="email"
              name="email"
              register={register}
              errors={errors}
            />
            <InputSkype key="skype" name="skype" register={register} />
            <InputTelegram key="telegram" name="telegram" register={register} />
            <SelectGroup key="group" name="group" register={register} />
          </ul>
          <ButtonSecondary
            onClick={() => setAdditionalInfo(false)}
            children={'Hide'}
          />
        </>
      )}
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;