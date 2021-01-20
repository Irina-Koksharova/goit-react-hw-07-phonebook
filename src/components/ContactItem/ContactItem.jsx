import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}:</p>
      <p className={s.number}>{number}</p>
      <button className={s.button} onClick={() => onDelete(id)}>
        Del
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
