import s from './InputName.module.css';

const InputName = ({ name, register, errors }) => {
  return (
    <li>
      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register({ required: true })}
      ></input>
      {errors.name && (
        <p className={s.errorMessage}>This field cannot be empty</p>
      )}
    </li>
  );
};

export default InputName;
