import { ErrorMessage } from '@hookform/error-message';
import s from './InputNumber.module.css';

const InputNumber = ({ name, register, errors }) => {
  return (
    <li>
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
            value: /^[0-9-]+$/,
            message: 'Number is not valid',
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

export default InputNumber;
