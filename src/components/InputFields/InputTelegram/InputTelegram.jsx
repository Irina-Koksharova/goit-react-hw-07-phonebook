import s from './InputTelegram.module.css';

const InputTelegram = ({ name, register }) => {
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

export default InputTelegram;
