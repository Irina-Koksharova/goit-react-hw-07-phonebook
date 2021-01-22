import s from './InputEmail.module.css';

const InputEmail = ({ name, register, errors }) => {
  return (
    <li>
      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register({
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          },
        })}
      ></input>
      {errors.email && <p className={s.errorMessage}>Email is not valid</p>}
    </li>
  );
};

export default InputEmail;
