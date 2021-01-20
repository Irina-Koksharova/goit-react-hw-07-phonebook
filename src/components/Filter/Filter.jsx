import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label} htmlFor="input">
        Find contact by name
      </label>

      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <FiSearch />
      </IconContext.Provider>

      <input
        className={s.input}
        id="input"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        autoComplete="off"
      ></input>
    </>
  );
};

export default Filter;
