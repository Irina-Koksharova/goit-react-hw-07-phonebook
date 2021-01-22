import s from './InputSkype.module.css';

const InputSkype = ({ name, register }) => {
  return (
    <li>
      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register}
      ></input>
    </li>
  );
};

export default InputSkype;
