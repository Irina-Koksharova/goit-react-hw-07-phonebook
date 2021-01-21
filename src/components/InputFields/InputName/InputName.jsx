import { ErrorMessage } from '@hookform/error-message';
import s from './InputName.module.css';

const InputName = ({ name, register, errors }) => {
  return (
    <li className={s.formItem}>
      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register({
          required: {
            value: true,
            message: 'This field cannot be empty',
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'The name must be only letters',
          },
        })}
      ></input>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className={s.errorMessage}>
              {message}
            </p>
          ))
        }
      />
    </li>
  );
};

export default InputName;
