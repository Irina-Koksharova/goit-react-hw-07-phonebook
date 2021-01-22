import PropTypes from 'prop-types';
import s from './SelectGroup.module.css';
import { initialGroups } from '../../initial/groups';

const SelectGroup = ({ name, register }) => {
  return (
    <select className={s.select} id={name} name={name} ref={register}>
      {Object.keys(initialGroups).map(group => (
        <option className={s.option} key={group}>
          {group}
        </option>
      ))}
    </select>
  );
};

SelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default SelectGroup;
